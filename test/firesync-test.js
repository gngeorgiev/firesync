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

describe('Firesync tests', function() {
    this.timeout(6000);

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
                    expect(val[0]).to.equal('gosho');
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
                    expect(val[0].pesho).to.equal(53);
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

            expect(obj.length()).to.equal(5);
            expect(obj[1]).to.equal(2);
        });

        it('should add 5 objects and get correct val', function () {
            obj = new FiresyncArray(testRef);

            [1,2,3,4,5].forEach(function (i) {
                obj.add(i);
            });

            var val = obj.val();
            expect(val.length).to.equal(5);
            expect(val[0]).to.equal(1);
        });

        it('should remove object on middle index', function () {
            obj = new FiresyncArray(testRef);
            [1,2,3,4,5].forEach(function (i) {
                obj.add(i);
            });

            obj.remove(1);
            expect(obj.length()).to.equal(4);
            expect(obj[0]).to.equal(1);
            expect(obj[1]).to.equal(3);
            expect(obj[2]).to.equal(4);
            expect(obj[3]).to.equal(5);
        });

        it('should remove object from start', function () {
            obj = new FiresyncArray(testRef);
            [1,2,3,4,5].forEach(function (i) {
                obj.add(i);
            });

            obj.remove(0);
            expect(obj.length()).to.equal(4);
            expect(obj[0]).to.equal(2);
            expect(obj[1]).to.equal(3);
            expect(obj[2]).to.equal(4);
            expect(obj[3]).to.equal(5);
        });

        it('should remove object from end', function () {
            obj = new FiresyncArray(testRef);
            [1,2,3,4,5].forEach(function (i) {
                obj.add(i);
            });

            obj.remove(4);
            expect(obj.length()).to.equal(4);
            expect(obj[0]).to.equal(1);
            expect(obj[1]).to.equal(2);
            expect(obj[2]).to.equal(3);
            expect(obj[3]).to.equal(4);
        });
    });
});
