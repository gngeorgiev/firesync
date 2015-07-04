'use strict';

var firesync;

if (typeof require !== 'undefined') {
    firesync = require('../dist/firesync.js');
    var expect = require('expect.js');
} else {
    firesync = window.firesync;
    var FiresyncObject = firesync.FiresyncObject;
    mocha.reporter('html');
    mocha.setup('bdd');
}

var ref = new Firebase('https://firesync-tests.firebaseio.com');

describe('Firesync tests', function() {
    this.timeout(15000);

    var testRef;
    var obj;

    beforeEach(function () {
        testRef = ref.child('haha');
    });

    afterEach(function (done) {
        testRef.remove(done);
        if (obj) {
            obj.detach();
            obj = null;
        }
    });

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
        })
    });
});
