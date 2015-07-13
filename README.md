# Firesync - Overview

[![Join the chat at https://gitter.im/gngeorgiev/firesync](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/gngeorgiev/firesync?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Build Status](https://travis-ci.org/gngeorgiev/firesync.svg?branch=master)](https://travis-ci.org/gngeorgiev/firesync) [![Code Climate](https://codeclimate.com/github/gngeorgiev/firesync/badges/gpa.svg)](https://codeclimate.com/github/gngeorgiev/firesync) [![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg)]()
[![dependencies](https://david-dm.org/gngeorgiev/firesync.svg)]() [![version](https://badge.fury.io/js/firesync-node.svg)](http://badge.fury.io/js/firesync-node)


[![NPM](https://nodei.co/npm/firesync-node.png)](https://nodei.co/npm/firesync-node/)


---
**firesync** is a library for seamless data synchronization between **[Firebase](http://firebase.com)** your local data and optionally the DOM, without the need of a framework, also known as **three-way-data-binding**. 

The illustration below should help you understand how **firesync** works.

![firesync](http://s12.postimg.org/gdw7mp19p/Drawing_1.png)

#Three-way-data-binding
---
The **three-way-data-binding** is a binding where the **model**, **view** and **database** are all updated simulateniously without extra code. **Firesync** achieves this by using [RactiveJS](http://ractivejs.org) for its DOM binding. One should be familiar with [RactiveJS](http://ractivejs.org) when using the dom binding.

# Requirements
---
**firesync** runs equally well in browsers and in node. Since it uses `Object.observe` to watch for local changes a polyfill should be used in environments that do not support it.

# Installation and usage
---

### bower
`bower install firesync`

`<script src="bower_components/firesync/dist/firesync.js"></script>`

### nodejs
`npm install firesync-node`

`var firesync = require('firesync-node');`

# Examples
---

### Firebase to Firesync

Basic
```js
var ref = new Firebase('https://example.firebaseio.com/users/admin'); // null
ref.once('value', function (snap) {
    var val = snap.val();
    val.name === 'admin';
    val.email === 'admin@admin.admin';
});

var admin = new firesync.FiresyncObject(ref);
admin.name = 'admin';
admin.dateCreated = new Date().valueOf().toString();
admin.email = 'admin@admin.admin';
//these changes will be automatically synced to the server
```

Firesync object synchronized from the database first
```js
var ref = new Firebase('https://example.firebaseio.com/users/admin'); // {name: 'admin'}
var adminUser = new firesync.FiresyncObject(ref);

//the user might have already loaded
if (!adminUser.loaded()) {
    //in most cases you would not need to explicitly attach to events
    adminUser.once('loaded', function () {
        var name = adminUser.name;
    
        adminUser.once('synced', function () {
            //https://example.firebaseio.com/users/admin now is - {name: '__invalid'}
        });
    
        adminUser.name = '__invalid';
    });
}
```

Firesync object synchronized from local first
```js
var ref = new Firebase('https://example.firebaseio.com/users/newUser'); // null
var newUser = new firesync.FiresyncObject(ref);
newUser.name = 'newUser';
newUser.once('synced', function () {
    //https://example.firebaseio.com/users/newUser now is - {name: 'newUser'}
});
```

Firesync array synchronized from database first
```js
var ref = new Firebase('https://example.firebaseio.com/users'); // [{name: 'admin'}, {name: 'newUser'}]
var users = new firesync.FiresyncArray(ref);

//the array can be already loaded
if (!users.loaded()) {
    //we do not need to use loaded to add values
    users.once('loaded', function () {
        //users = [{name: 'admin'}, {name: 'newUser'}]
        users[0].name === 'admin';
        users[1].name === 'newUser';
        
        users.add({
          name: 'newUser2'
        });
        
        //this will immediately push newUser2 to the remote array
    });
}
```

### Firebase to Firesync to DOM

Binding to an input element with inline template:
```html
<div id="container"></div>
```

```js
var ref = new Firebase('https://example.firebaseio.com');
var bindChild = ref.child('currentItem'); // { value: 'test' }

var currentItem = new firesync.FiresyncObject(bindChild)
    .bindTo({
        el: '#container',
        template: '<input type="text" value="{{value}}" />'
    });

//this results in the following html <div id="container"><input type="text" value="test" /></div>

currentItem.value = 'test123';

//this results in the following html <div id="container"><input type="text" value="test123" /></div>

//writing in the input will also change the .value property
```

Binding to an input element with external template:
```html
<div id="container"></div>

<script type="text/ractive" id="template">
    <input type="text" value="{{value}}" />
</script>
```

```js
var ref = new Firebase('https://example.firebaseio.com');
var bindChild = ref.child('currentItem'); // { value: 'test' }

var currentItem = new firesync.FiresyncObject(bindChild)
    .bindTo({
        el: '#container',
        template: '#template'
    });

//this results in the following html <div id="container"><input type="text" value="test" /></div>

currentItem.value = 'test123';

//this results in the following html <div id="container"><input type="text" value="test123" /></div>

//writing in the input will also change the .value property
```

Bind to a list. 
```html
<div id="container"></div>

<script type="text/ractive" id="template">
    <ul>
        {{#iterator}} //iterator is a built-in variable of FiresyncArray which is an iteratable array compatible with ractivejs since ractivejs does not support array mixins.
        <li>{{value}}</li>
        {{/iterator}}
    </ul>
</script>
```

```js
var ref = new Firebase('https://example.firebaseio.com');
var bindChild = ref.child('currentItem'); // { '-Ju5kIB-e3ZABIccrOjK': { value: 'test' }, '-Mb4kIBa-3ZABIaarOjK': { value: 'test2' } }

var array = new firesync.FiresyncArray(bindChild)
    .bindTo({
        el: '#container',
        template: '#template'
    });

/* 
* this results in the following html:
* <div id="container">
*   <ul>
*       <li>test</li>
*       <li>test2</li>
*   </ul>
* </div>
*/

array.add({value: 'test3'});

/* 
* this results in the following html:
* <div id="container">
*   <ul>
*       <li>test</li>
*       <li>test2</li>
*       <li>test3</li>
*   </ul>
* </div>
*
* And to something like this in the firebase: 
* { '-Ju5kIB-e3ZABIccrOjK': { value: 'test' }, '-Mb4kIBa-3ZABIaarOjK': { value: 'test2' }, '-Vb6kFBa-3ZABIaarOmH': { value: 'test2' } }
*/
```

### Firesync utility methods

`firesync.create` - Automatically creates a synchronized object or array based on the underlying firebase value. The created
objects are guaranteed to be loaded.
```js
var ref = new Firebase('https://example.firebaseio.com/users/fred'); //{name: 'fred'}
firesync.create(ref)
    .then(function (firesyncObj) {
        firesyncObj.name === 'fred';
        firesyncObj.loaded() === true;
    });
    
var usersRef = new Firebase('https://example.firebaseio.com/users'); //[{name: 'admin'}, {name: 'fred'}];
firesync.create(usersRef)
    .then(function (firesyncArr) {
        firesyncArr.lenght() === 2;
        firesyncArr.loaded() === true;
        firesyncArr[0].name === 'admin';
    });

```

`firesync.map` - Returns a non-synchronized object or array, depending on the underlying firebase value. Each object in the
returned object/array is a synchronized <a href="#firesync.FiresyncObject">FiresyncObject</a> or <a href="#firesync.FiresyncArray">FiresyncArray</a>
depending on the underlying firebase value. The objects are guaranteed to be loaded.
```js
    var usersRef = new Firebase('https://example.firebaseio.com/users'); //[{name: 'admin'}, {name: 'fred'}];
    firesync.map(usersRef)
        .then(function (arr) {
            Array.isArray(arr) === true;
            arr[0] instanceof firesync.FiresyncObject === true;
            arr[1] instanceof firesync.FiresyncObject === true;
            
            //changes to arr will not reflect the changes to the remote data, but changing any of the inner objects will
        });
        
    var someRef = new Firebase('https://example.firebaseio.com/someRef'); //{someObj: {name: 'admin'}, someArr: [1, 2]};
    firesync.map(someRef)
        .then(function (obj) {
            typeof obj === 'object';
            obj.someObj instanceof firesync.FiresyncObject;
            obj.someArr instanceof firesync.FiresyncArray;
            
            //changes to obj will not reflect the changes to the remote data, but changing any of the inner objects will
        });
```

# Important !!!
---

Whenever you are done with any <a href="#firesync.FiresyncObject">FiresyncObject</a> or <a href="#firesync.FiresyncArray">FiresyncArray</a> make sure to call the `detach()` method as it will unattach the inner firebase listeners.

# API Reference
---
## Classes
<dl>
<dt><a href="#firesync">firesync</a></dt>
<dd><p>The entry point of firesync.</p>
</dd>
</dl>
## External
<dl>
<dt><a href="#external_FirebaseRef">FirebaseRef</a></dt>
<dd><p>FirebaseRef object</p>
</dd>
<dt><a href="#external_RactiveJs">RactiveJs</a></dt>
<dd><p>RactiveJs object</p>
</dd>
</dl>
<a name="firesync"></a>
## firesync
The entry point of firesync.

**Kind**: global class  

* [firesync](#firesync)
  * [.FiresyncArray](#firesync.FiresyncArray) ⇐ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
    * [.iterator](#firesync.FiresyncArray+iterator) : <code>Array</code>
    * [.key()](#firesync.FiresyncArray+key) ⇒ <code>string</code>
    * [.update(value, identifier)](#firesync.FiresyncArray+update) ⇒ <code>Promise</code>
    * [.add(value, [key], [index])](#firesync.FiresyncArray+add) ⇒ <code>Promise</code>
    * [.remove(identifier)](#firesync.FiresyncArray+remove) ⇒ <code>Promise</code>
    * [.move(oldIdentifier, newIdentifier)](#firesync.FiresyncArray+move) ⇒ <code>Promise</code>
    * [.loaded()](#FiresyncBase+loaded) ⇒ <code>boolean</code>
    * [.ref()](#FiresyncBase+ref) ⇒ <code>FirebaseRef</code>
    * [.detach()](#FiresyncBase+detach)
    * [.bindTo(settings)](#FiresyncBase+bindTo) ⇒ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
    * ["changed"](#FiresyncBase+event_changed)
    * ["loaded"](#FiresyncBase+event_loaded)
    * ["synced" (err)](#FiresyncBase+event_synced)
  * [.FiresyncObject](#firesync.FiresyncObject) ⇐ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
    * [.loaded()](#FiresyncBase+loaded) ⇒ <code>boolean</code>
    * [.ref()](#FiresyncBase+ref) ⇒ <code>FirebaseRef</code>
    * [.detach()](#FiresyncBase+detach)
    * [.bindTo(settings)](#FiresyncBase+bindTo) ⇒ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
    * ["changed"](#FiresyncBase+event_changed)
    * ["loaded"](#FiresyncBase+event_loaded)
    * ["synced" (err)](#FiresyncBase+event_synced)
  * [.create(ref)](#firesync.create) ⇒ <code>Promise</code>
  * [.map(ref)](#firesync.map) ⇒ <code>Promise</code>

<a name="firesync.FiresyncArray"></a>
### firesync.FiresyncArray ⇐ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
An array which keeps its values synchronized with the remote.
One should use the [FiresyncArray](FiresyncArray) methods to manipulate the values.

**Kind**: static class of <code>[firesync](#firesync)</code>  
**Extends:** <code>[FiresyncBase](#new_FiresyncBase_new)</code>  
**Mixes**: <code>Array</code>  
**Access:** protected  

* [.FiresyncArray](#firesync.FiresyncArray) ⇐ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
  * [.iterator](#firesync.FiresyncArray+iterator) : <code>Array</code>
  * [.key()](#firesync.FiresyncArray+key) ⇒ <code>string</code>
  * [.update(value, identifier)](#firesync.FiresyncArray+update) ⇒ <code>Promise</code>
  * [.add(value, [key], [index])](#firesync.FiresyncArray+add) ⇒ <code>Promise</code>
  * [.remove(identifier)](#firesync.FiresyncArray+remove) ⇒ <code>Promise</code>
  * [.move(oldIdentifier, newIdentifier)](#firesync.FiresyncArray+move) ⇒ <code>Promise</code>
  * [.loaded()](#FiresyncBase+loaded) ⇒ <code>boolean</code>
  * [.ref()](#FiresyncBase+ref) ⇒ <code>FirebaseRef</code>
  * [.detach()](#FiresyncBase+detach)
  * [.bindTo(settings)](#FiresyncBase+bindTo) ⇒ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
  * ["changed"](#FiresyncBase+event_changed)
  * ["loaded"](#FiresyncBase+event_loaded)
  * ["synced" (err)](#FiresyncBase+event_synced)

<a name="firesync.FiresyncArray+iterator"></a>
#### firesyncArray.iterator : <code>Array</code>
A simple array which is in sync with the [FiresyncArray](FiresyncArray).

**Kind**: instance property of <code>[FiresyncArray](#firesync.FiresyncArray)</code>  
**Example**  
```js
firesyncArray.bindTo({el: 'body', template: '{{#iterator}}<div>{{value}}</div>{{/iterator}}'});
```
<a name="firesync.FiresyncArray+key"></a>
#### firesyncArray.key() ⇒ <code>string</code>
Returns a key by a specified index.

**Kind**: instance method of <code>[FiresyncArray](#firesync.FiresyncArray)</code>  
**Returns**: <code>string</code> - The key of the object at the specified index.  
**Example**  
```js
firesyncArray.key(0) === '-Ju5kIB-e3ZABIccrOjK';
```
<a name="firesync.FiresyncArray+update"></a>
#### firesyncArray.update(value, identifier) ⇒ <code>Promise</code>
Update an object using a specified identifier. This is the only supported way
to update an element inside {FiresyncArray}. Keeps the synchronization.

**Kind**: instance method of <code>[FiresyncArray](#firesync.FiresyncArray)</code>  
**Returns**: <code>Promise</code> - For when the synchronization is complete.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>any</code> | The update value. |
| identifier | <code>Identifier</code> | The identifier to be used to find the element. |

<a name="firesync.FiresyncArray+add"></a>
#### firesyncArray.add(value, [key], [index]) ⇒ <code>Promise</code>
Adds an element to the {FiresyncArray}. By default generates Firebase arrays with
standard Firebase-generated keys. This is the only supported way
to add an element inside {FiresyncArray}. Keeps the synchronization.

**Kind**: instance method of <code>[FiresyncArray](#firesync.FiresyncArray)</code>  
**Returns**: <code>Promise</code> - For when the synchronization is complete.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>any</code> |  | The value to add to the arary. |
| [key] | <code>string</code> | <code>&quot;ref.push().key()&quot;</code> | The key to be used for the element. Default key is recommended. |
| [index] | <code>number</code> | <code>last</code> | The index at which to add the element to the local array. |

<a name="firesync.FiresyncArray+remove"></a>
#### firesyncArray.remove(identifier) ⇒ <code>Promise</code>
Removes an element from the array by an {Identifier}

**Kind**: instance method of <code>[FiresyncArray](#firesync.FiresyncArray)</code>  
**Returns**: <code>Promise</code> - For when the synchronization is complete.  

| Param | Type | Description |
| --- | --- | --- |
| identifier | <code>Identifier</code> | The identifier to find the array by. |

<a name="firesync.FiresyncArray+move"></a>
#### firesyncArray.move(oldIdentifier, newIdentifier) ⇒ <code>Promise</code>
Moves an element from one index to another.

**Kind**: instance method of <code>[FiresyncArray](#firesync.FiresyncArray)</code>  
**Returns**: <code>Promise</code> - For when the synchronization is complete.  

| Param | Type | Description |
| --- | --- | --- |
| oldIdentifier | <code>Identifier</code> | The identifier for the old object. |
| newIdentifier | <code>Identifier</code> | The identifier for the new object. |

<a name="FiresyncBase+loaded"></a>
#### firesyncArray.loaded() ⇒ <code>boolean</code>
Indicates whether the object has loaded its data from Firebase.

**Kind**: instance method of <code>[FiresyncArray](#firesync.FiresyncArray)</code>  
<a name="FiresyncBase+ref"></a>
#### firesyncArray.ref() ⇒ <code>FirebaseRef</code>
Returns the ref set in the constructor

**Kind**: instance method of <code>[FiresyncArray](#firesync.FiresyncArray)</code>  
<a name="FiresyncBase+detach"></a>
#### firesyncArray.detach()
Detaches from the subscribed Firebase and DOM events. Must be called
if the object will no longer be used.

**Kind**: instance method of <code>[FiresyncArray](#firesync.FiresyncArray)</code>  
<a name="FiresyncBase+bindTo"></a>
#### firesyncArray.bindTo(settings) ⇒ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
Binds to DOM templates using [RactiveJs](RactiveJs). The settings are passed directly
to [RactiveJs](RactiveJs).

**Kind**: instance method of <code>[FiresyncArray](#firesync.FiresyncArray)</code>  
**Returns**: <code>[FiresyncBase](#new_FiresyncBase_new)</code> - The current instance.  

| Param | Type | Description |
| --- | --- | --- |
| settings | <code>Object</code> | The settings passed to [RactiveJs](RactiveJs). Refer to the [RactiveJs](RactiveJs) docs for more details |

**Example**  
```js
new (FiresyncObject|FiresyncArray).bindTo({ el: 'body', template: '<input value={{value}}/>' })
```
<a name="FiresyncBase+event_changed"></a>
#### "changed"
Fired the local object changes, regardless whether it is a result of direct local change
or remote change.

**Kind**: event emitted by <code>[FiresyncArray](#firesync.FiresyncArray)</code>  
**Example**  
```js
firesyncObject.on('changed', function(){});
```
<a name="FiresyncBase+event_loaded"></a>
#### "loaded"
Fired when the initial value of the object is loaded from the remote.

**Kind**: event emitted by <code>[FiresyncArray](#firesync.FiresyncArray)</code>  
**Example**  
```js
firesyncObject.on('loaded', function(){});
```
<a name="FiresyncBase+event_synced"></a>
#### "synced" (err)
Fired when the local object's value is sucesfully set to the remote.

**Kind**: event emitted by <code>[FiresyncArray](#firesync.FiresyncArray)</code>  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>Error</code> | Synchronization error |

**Example**  
```js
firesyncObject.on('synced', function(err){});
```
<a name="firesync.FiresyncObject"></a>
### firesync.FiresyncObject ⇐ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
An object which keeps its values synchronized with the remote Firebase.

**Kind**: static class of <code>[firesync](#firesync)</code>  
**Extends:** <code>[FiresyncBase](#new_FiresyncBase_new)</code>  
**Access:** protected  

* [.FiresyncObject](#firesync.FiresyncObject) ⇐ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
  * [.loaded()](#FiresyncBase+loaded) ⇒ <code>boolean</code>
  * [.ref()](#FiresyncBase+ref) ⇒ <code>FirebaseRef</code>
  * [.detach()](#FiresyncBase+detach)
  * [.bindTo(settings)](#FiresyncBase+bindTo) ⇒ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
  * ["changed"](#FiresyncBase+event_changed)
  * ["loaded"](#FiresyncBase+event_loaded)
  * ["synced" (err)](#FiresyncBase+event_synced)

<a name="FiresyncBase+loaded"></a>
#### firesyncObject.loaded() ⇒ <code>boolean</code>
Indicates whether the object has loaded its data from Firebase.

**Kind**: instance method of <code>[FiresyncObject](#firesync.FiresyncObject)</code>  
<a name="FiresyncBase+ref"></a>
#### firesyncObject.ref() ⇒ <code>FirebaseRef</code>
Returns the ref set in the constructor

**Kind**: instance method of <code>[FiresyncObject](#firesync.FiresyncObject)</code>  
<a name="FiresyncBase+detach"></a>
#### firesyncObject.detach()
Detaches from the subscribed Firebase and DOM events. Must be called
if the object will no longer be used.

**Kind**: instance method of <code>[FiresyncObject](#firesync.FiresyncObject)</code>  
<a name="FiresyncBase+bindTo"></a>
#### firesyncObject.bindTo(settings) ⇒ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
Binds to DOM templates using [RactiveJs](RactiveJs). The settings are passed directly
to [RactiveJs](RactiveJs).

**Kind**: instance method of <code>[FiresyncObject](#firesync.FiresyncObject)</code>  
**Returns**: <code>[FiresyncBase](#new_FiresyncBase_new)</code> - The current instance.  

| Param | Type | Description |
| --- | --- | --- |
| settings | <code>Object</code> | The settings passed to [RactiveJs](RactiveJs). Refer to the [RactiveJs](RactiveJs) docs for more details |

**Example**  
```js
new (FiresyncObject|FiresyncArray).bindTo({ el: 'body', template: '<input value={{value}}/>' })
```
<a name="FiresyncBase+event_changed"></a>
#### "changed"
Fired the local object changes, regardless whether it is a result of direct local change
or remote change.

**Kind**: event emitted by <code>[FiresyncObject](#firesync.FiresyncObject)</code>  
**Example**  
```js
firesyncObject.on('changed', function(){});
```
<a name="FiresyncBase+event_loaded"></a>
#### "loaded"
Fired when the initial value of the object is loaded from the remote.

**Kind**: event emitted by <code>[FiresyncObject](#firesync.FiresyncObject)</code>  
**Example**  
```js
firesyncObject.on('loaded', function(){});
```
<a name="FiresyncBase+event_synced"></a>
#### "synced" (err)
Fired when the local object's value is sucesfully set to the remote.

**Kind**: event emitted by <code>[FiresyncObject](#firesync.FiresyncObject)</code>  

| Param | Type | Description |
| --- | --- | --- |
| err | <code>Error</code> | Synchronization error |

**Example**  
```js
firesyncObject.on('synced', function(err){});
```
<a name="firesync.create"></a>
### firesync.create(ref) ⇒ <code>Promise</code>
Creates a [FiresyncObject](FiresyncObject) or [FiresyncArray](FiresyncArray) from the specified ref depending on the underlying value.
The returned object is guaranteed to be loaded.

**Kind**: static method of <code>[firesync](#firesync)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ref | <code>FirebaseRef</code> | from a specified ref |

**Example**  
```js
firesync.create(ref).then(function(firesyncObj) {}); //if ref's underlying value is array a FiresyncArray is returned
otherwise a FiresyncObject
```
<a name="firesync.map"></a>
### firesync.map(ref) ⇒ <code>Promise</code>
Returns a non-synchronized array or an object of [FiresyncObject](FiresyncObject) or [FiresyncArray](FiresyncArray) objects.
The objects are guaranteed to be loaded.

**Kind**: static method of <code>[firesync](#firesync)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ref | <code>FirebaseRef</code> | from a specified ref |

**Example**  
```js
firesync.map(ref).then(function(objOrArr){});
```
<a name="external_FirebaseRef"></a>
## FirebaseRef
FirebaseRef object

**Kind**: global external  
**See**: [https://www.firebase.com/docs/web/api/firebase/child.html](https://www.firebase.com/docs/web/api/firebase/child.html)  
<a name="external_RactiveJs"></a>
## RactiveJs
RactiveJs object

**Kind**: global external  
**See**: [http://docs.ractivejs.org/latest/get-started](http://docs.ractivejs.org/latest/get-started)  

# Development and testing

The source code is located in the `src` folder.

```shell
$ npm install
$ gulp build #builds the source code
$ gulp test #executes the tests
$ gulp watch #builds the source code as you change it
```

# License
---
The MIT License (MIT)

Copyright (c) 2015 Firesync

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
