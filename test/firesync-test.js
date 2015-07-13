'use strict';

var firesync;
var Firebase;

if (typeof require !== 'undefined') {
    firesync = require('../dist/firesync.js');
    var expect = require('expect.js');
    Firebase = require('firebase');
} else {
    firesync = window.firesync;
    Firebase = window.Firebase;
    mocha.reporter('html');
    mocha.setup('bdd');
}

var FiresyncObject = firesync.FiresyncObject;
var FiresyncArray = firesync.FiresyncArray;

var ref = new Firebase('https://firesync-tests.firebaseio.com');

var fail = function (err) {
    console.log(err);
    throw err;
};

var handleCb = function (cb) {
    return function (err) {
        if (err) {
            return fail(err);
        }
        
        cb();
    }
};

var atIndex = function (obj, index) {
    return obj[Object.keys(obj)[index]];
};

var first = function (obj) {
    return atIndex(obj, 0);
};

describe('Firesync tests', function() {
    this.timeout(10000);

    var testRef;
    var obj;

    beforeEach(function () {
        testRef = ref.child('haha');
    });

    afterEach(function (done) {
        if (obj) {
            if (typeof obj.detach === 'function') {
                obj.detach();
            } else {
                Object.keys(obj).forEach(function (key) {
                    obj[key].detach();
                });
            }

            obj = null;
        }

        testRef.remove(done);
    });

    if (typeof require === 'undefined') {
        var domTimeout = function (fn, done, timeout) {
            timeout = timeout || 100;
            
            return new Promise(function (resolve, reject) {
                setTimeout(function () {
                    fn();
                    if (!done) {
                        return resolve();
                    }
                    
                    done();
                    resolve();
                }, timeout);    
            });
        }
        
        var mainContainer = document.createElement('div');
        mainContainer.setAttribute('id', 'container');
        document.body.appendChild(mainContainer);
        
        var createElement = function (el) {
            var element = document.createElement(el);
            mainContainer.appendChild(element);
            return element;
        }
        
        var getContainer = function () {
            return createElement('div');
        }
        
        describe('DOM binding', function () {
            
            afterEach(function () {
                mainContainer.innerHTML = '';
            });
            
            it('should create an input without binding', function(done) {
                var container = getContainer();
                obj = new FiresyncObject(testRef).bindTo({
                    el: container,
                    template: '<input type="text" />'
                });
                
                domTimeout(function () {
                    expect(container.childElementCount).to.equal(1);
                    expect(container.children[0].nodeName).to.equal('INPUT');
                }, done)
                .catch(fail);
            });
            
            it('should create an input with value binding - from object', function (done) {
                var container = getContainer();
                obj = new FiresyncObject(testRef).bindTo({
                    el: container,
                    template: '<input type="text" value="{{value}}"/>'
                });
                
                obj.value = 'pesho';
                
                domTimeout(function () {
                    expect(container.childElementCount).to.equal(1);
                    expect(container.children[0].nodeName).to.equal('INPUT');
                    expect(container.children[0].value).to.equal('pesho');
                }, done)
                .catch(fail);
            });
            
            it('should create an input with value binding - from dom', function (done) {
                this.timeout(10000);
                var container = getContainer();
                obj = new FiresyncObject(testRef).bindTo({
                    el: container,
                    template: '<input type="text" value="{{value}}"/>'
                });
                
                domTimeout(function () {
                    expect(container.childElementCount).to.equal(1);
                    expect(container.children[0].nodeName).to.equal('INPUT');
                    expect(container.children[0].value).to.equal('');
                })
                .then(function () {
                    return domTimeout(function() {
                        container.children[0].value = 'pesho';
                        var evt = document.createEvent("HTMLEvents");
                        evt.initEvent('change', false, true);
                        container.children[0].dispatchEvent(evt);
                    });
                })
                .then(function () {
                    return domTimeout(function () {
                        expect(container.children[0].value).to.equal('pesho');
                        expect(obj.value).to.equal('pesho');
                        testRef.once('value', function (snap) {
                            var val = snap.val();
                            expect(val.value).to.equal('pesho');
                            expect(Object.keys(val).length).to.equal(1);
                            done();
                        });
                    });
                })
                .catch(fail);
            });
            
            it('should render a list', function (done) {
                var container = getContainer();
                obj = new FiresyncArray(testRef);
                
                obj.bindTo({
                    el: container,
                    template: '<ul>' + 
                        '{{#iterator}}' + 
                        '<li>{{value}}</li>' +
                        '{{/iterator}}' +
                        '</ul>'
                });

                obj.add({value: 1});
                obj.add({value: 2});
                obj.add({value: 3});
                
                domTimeout(function () {
                    expect(container.children[0]).to.be.ok(); 
                    expect(container.children[0].children.length).to.equal(3);
                    expect(container.children[0].children[0].innerHTML).to.equal('1');
                    obj.update({
                        value: 5
                    }, 0);
                })
                .then(function () {
                    return domTimeout(function () {
                        expect(container.children[0].children[0].innerHTML).to.equal('5');
                        testRef.once('value', function (snap) {
                            var val = snap.val();
                            expect(atIndex(val, 0).value).to.equal(5);
                            expect(Object.keys(atIndex(val, 0)).length).to.equal(1);
                            expect(atIndex(val, 1).value).to.equal(2);
                            expect(Object.keys(val).length).to.equal(3);
                            done();
                        })
                    }, null, 300);   
                })
                .catch(fail);
            });
        });    
    }

    describe('Firebase binding', function () {
        describe('firesyncObject ', function() {
            it('is defined', function() {
                expect(FiresyncObject).to.be.ok();
            });

            it('should not be loaded initially', function () {
                obj = new FiresyncObject(testRef);
                expect(obj.loaded()).to.equal(false);
            });

            it('should fire loaded event', function (done) {
                obj = new FiresyncObject(testRef);
                obj.once('loaded', function () {
                    expect(this.loaded()).to.equal(true);
                    done();
                });
            });

            it('should auto set properties when loaded', function (done) {
                testRef.set({pesho: 1}, function () {
                    obj = new FiresyncObject(testRef);
                    obj.once('loaded', function () {
                        expect(this.pesho).to.equal(1);
                        done();
                    });
                });
            });

            it('should fire changed event', function (done) {
                obj = new FiresyncObject(testRef);
                obj.once('changed', function () {
                    done();
                });

                obj.gosho = 1;
            });

            it('should set remote', function (done) {
                obj = new FiresyncObject(testRef);
                obj.once('synced', function () {
                    testRef.once('value', function (snap) {
                        var val = snap.val();
                        expect(val.gosho).to.equal(1);
                        done();
                    });
                });

                obj.gosho = 1;
            });

            it('should set object to remote', function (done) {
                obj = new FiresyncObject(testRef);
                obj.once('synced', function () {
                    testRef.once('value', function (snap) {
                        var val = snap.val();
                        expect(val.gosho).to.be.ok();
                        expect(val.gosho.pesho).to.equal(53);
                        done();
                    });
                });

                obj.gosho = {
                    pesho: 53
                };
            });
        });

        describe('firesyncArray', function () {
            it('is defined', function() {
                expect(FiresyncArray).to.be.ok();
            });

            it('should not be loaded initially', function () {
                obj = new FiresyncArray(testRef);
                expect(obj.loaded()).to.equal(false);
            });

            it('should fire loaded event', function (done) {
                obj = new FiresyncArray(testRef);
                obj.once('loaded', function () {
                    expect(this.loaded()).to.equal(true);
                    done();
                });
            });

            it('should auto add elements when loaded', function (done) {
                testRef.set(['pesho', 'gosho'], function () {
                    obj = new FiresyncArray(testRef);
                    obj.once('loaded', function () {
                        expect(this[0]).to.equal('pesho');
                        expect(this[1]).to.equal('gosho');
                        done();
                    });
                });
            });

            it('should fire changed event', function (done) {
                obj = new FiresyncArray(testRef);
                obj.once('changed', function () {
                    done();
                });

                obj.add('gosho');
            });

            it('should add to remote', function (done) {
                obj = new FiresyncArray(testRef);
                obj.once('synced', function () {
                    testRef.once('value', function (snap) {
                        var val = snap.val();
                        expect(first(val)).to.equal('gosho');
                        done();
                    });
                });

                obj.add('gosho');
            });

            it('should add object to remote', function (done) {
                obj = new FiresyncArray(testRef);
                obj.once('synced', function () {
                    testRef.once('value', function (snap) {
                        var val = snap.val();
                        expect(first(val).pesho).to.equal(53);
                        done();
                    });
                });

                obj.add({
                    pesho: 53
                });
            });

            it('should add 5 objects', function (done) {
                obj = new FiresyncArray(testRef);
                obj.once('synced', function () {
                    done()
                });

                [1,2,3,4,5].forEach(function (i) {
                    obj.add(i);
                });

                expect(obj.length).to.equal(5);
                expect(obj[1]).to.equal(2);
            });

            it('should add 5 objects and get correct val', function () {
                obj = new FiresyncArray(testRef);

                [1,2,3,4,5].forEach(function (i) {
                    obj.add(i);
                });

                expect(obj.length).to.equal(5);
                expect(obj[0]).to.equal(1);
            });

            it('should remove object on middle index', function (done) {
                obj = new FiresyncArray(testRef);
                [1,2,3,4,5].forEach(function (i) {
                    obj.add(i);
                });

                obj.remove(1).then(function () {
                    expect(obj.length).to.equal(4);
                    expect(obj[0]).to.equal(1);
                    expect(obj[1]).to.equal(3);
                    expect(obj[2]).to.equal(4);
                    expect(obj[3]).to.equal(5);
                    done();
                });
            });

            it('should remove object from start', function (done) {
                obj = new FiresyncArray(testRef);
                [1,2,3,4,5].forEach(function (i) {
                    obj.add(i);
                });

                obj.remove(0).then(function () {
                    expect(obj.length).to.equal(4);
                    expect(obj[0]).to.equal(2);
                    expect(obj[1]).to.equal(3);
                    expect(obj[2]).to.equal(4);
                    expect(obj[3]).to.equal(5);
                    done();
                });
            });

            it('should remove object from end', function (done) {
                obj = new FiresyncArray(testRef);
                [1,2,3,4,5].forEach(function (i) {
                    obj.add(i);
                });

                obj.remove(4).then(function () {
                    expect(obj.length).to.equal(4);
                    expect(obj[0]).to.equal(1);
                    expect(obj[1]).to.equal(2);
                    expect(obj[2]).to.equal(3);
                    expect(obj[3]).to.equal(4);
                    done();
                });
            });

            it('should remove object', function (done) {
                obj = new FiresyncArray(testRef);
                var innerObj = {};
                [{}, {}, innerObj, {}, {}].forEach(function (i) {
                    obj.add(i);
                });

                obj.remove(innerObj).then(function () {
                    expect(obj.length).to.equal(4);
                    expect(obj.indexOf(innerObj) === -1).to.equal(true);
                    done();
                });
            });

            it('should remove string and from remote', function (done) {
                obj = new FiresyncArray(testRef);
                var promises = ['1', '2', '3', '4', '5'].map(function (i) {
                    return obj.add(i);
                });

                Promise.all(promises).then(function () {
                    obj.remove('3').then(function () {
                        expect(obj.length).to.equal(4);
                        expect(obj.indexOf('3') === -1).to.equal(true);
                        testRef.once('value', function (snap) {
                            var val = snap.val();
                            Object.keys(val).forEach(function (key) {
                                var v = val[key];
                                if (v === '3') {
                                    return done(new Error('Should not happen'));
                                }
                            });

                            done();
                        });
                    });
                });
            });

            it('should return correct key by value', function () {
                obj = new FiresyncArray(testRef);
                obj.add('');
                obj.add({});
                obj.add('pesho', 'peshoKey');

                var key = obj.key('pesho');
                expect(key).to.equal('peshoKey');
            });

            it('should return correct key by index', function () {
                obj = new FiresyncArray(testRef);
                obj.add('');
                obj.add({});
                obj.add('pesho', 'peshoKey');

                var key = obj.key(obj.indexOf('pesho'));
                expect(key).to.equal('peshoKey');
            });

            it('should update string by index', function () {
                obj = new FiresyncArray(testRef);
                obj.add('');
                obj.add({});
                obj.add('pesho', 'peshoKey');

                var index = obj.indexOf('pesho');
                obj.update('gosho', index);
                expect(obj[index]).to.equal('gosho');
            });

            it('should update object by index', function () {
                obj = new FiresyncArray(testRef);
                obj.add('');
                obj.add({});
                obj.add('pesho', 'peshoKey');

                obj.update({
                    gosho: 1
                }, 1);
                expect(obj[1].gosho).to.equal(1);
            });

            it('should update object by value', function () {
                obj = new FiresyncArray(testRef);
                obj.add('');
                obj.add({});
                obj.add('pesho', 'peshoKey');

                obj.update('pesho', '');
                expect(obj[0]).to.equal('pesho');
            });
        });

        describe('Util methods', function () {
            describe('map', function () {
                it('should create object of firesync objects', function (done) {
                    testRef.set({
                        pesho: {
                            haha: 1
                        },
                        gosho: [0, 1, 2, 3]
                    }, handleCb(function () {
                        firesync.map(testRef)
                            .then(function (_obj) {
                                obj = _obj;
                                expect(obj).to.be.ok();
                                expect(obj.pesho.haha).to.equal(1);
                                expect(obj.pesho instanceof FiresyncObject);
                                expect(obj.gosho.length).to.equal(4);
                                expect(obj.gosho instanceof FiresyncArray);
                                done();
                            })
                            .catch(fail);
                    }));
                });

                it('should create an array of firesync objects', function (done) {
                    testRef.set([{
                        pesho: 5
                    }, {
                        gosho: 6
                    }], handleCb(function () {
                        firesync.map(testRef)
                            .then(function (_obj) {
                                obj = _obj;
                                expect(obj).to.be.ok();
                                expect(obj.length).to.equal(2);
                                expect(obj[0].pesho).to.equal(5);
                                expect(obj[0] instanceof FiresyncObject);
                                expect(obj[1].gosho).to.equal(6);
                                expect(obj[1] instanceof FiresyncObject);
                                done();
                            })
                            .catch(fail);
                    }));
                });
            });

            describe('create', function () {
                it('should create object when no value is set', function (done) {
                    testRef.remove(function () {
                        firesync.create(testRef)
                            .then(function (_obj) {
                                obj = _obj;
                                expect(obj instanceof FiresyncObject).to.be.ok();
                                done();
                            })
                            .catch(fail);
                    });
                });

                it('should create object with value set', function (done) {
                    testRef.set({testval: 'pesho'}, handleCb(function () {
                        firesync.create(testRef)
                            .then(function (_obj) {
                                obj = _obj;
                                expect(obj instanceof FiresyncObject).to.be.ok();
                                expect(obj.testval).to.equal('pesho');
                                expect(obj.loaded()).to.be.ok();
                                done();
                            })
                            .catch(fail);
                    }));
                });

                it('should create array', function (done) {
                    testRef.set([0, 1, 2], handleCb(function () {
                        firesync.create(testRef)
                            .then(function (_obj) {
                                obj = _obj;
                                expect(obj instanceof FiresyncArray).to.be.ok();
                                expect(obj.length).to.equal(3);
                                expect(obj.loaded()).to.be.ok();
                                expect(obj[0]).to.equal(0);
                                expect(obj[1]).to.equal(1);
                                expect(obj[2]).to.equal(2);
                                done();
                            })
                            .catch(fail);
                    }));
                });
            });
        });
    });
});
