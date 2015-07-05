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
</dl>
<a name="firesync"></a>
## firesync
The entry point of firesync.

**Kind**: global class  

* [firesync](#firesync)
  * [.FiresyncArray](#firesync.FiresyncArray) ⇐ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
    * [.loaded()](#FiresyncBase+loaded) ⇒ <code>boolean</code>
    * [.ref()](#FiresyncBase+ref) ⇒ <code>FirebaseRef</code>
    * [.detach()](#FiresyncBase+detach)
    * [.set(val)](#FiresyncBase+set)
    * ["changed"](#FiresyncBase+event_changed)
    * ["loaded"](#FiresyncBase+event_loaded)
    * ["synced" (err)](#FiresyncBase+event_synced)
  * [.FiresyncObject](#firesync.FiresyncObject) ⇐ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
    * [.loaded()](#FiresyncBase+loaded) ⇒ <code>boolean</code>
    * [.ref()](#FiresyncBase+ref) ⇒ <code>FirebaseRef</code>
    * [.detach()](#FiresyncBase+detach)
    * [.set(val)](#FiresyncBase+set)
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
**Access:** protected  

* [.FiresyncArray](#firesync.FiresyncArray) ⇐ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
  * [.loaded()](#FiresyncBase+loaded) ⇒ <code>boolean</code>
  * [.ref()](#FiresyncBase+ref) ⇒ <code>FirebaseRef</code>
  * [.detach()](#FiresyncBase+detach)
  * [.set(val)](#FiresyncBase+set)
  * ["changed"](#FiresyncBase+event_changed)
  * ["loaded"](#FiresyncBase+event_loaded)
  * ["synced" (err)](#FiresyncBase+event_synced)

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
Detaches from the subscribed events to the [FirebaseRef](FirebaseRef)

**Kind**: instance method of <code>[FiresyncArray](#firesync.FiresyncArray)</code>  
<a name="FiresyncBase+set"></a>
#### firesyncArray.set(val)
Applies a value to the object.

**Kind**: instance method of <code>[FiresyncArray](#firesync.FiresyncArray)</code>  

| Param | Type |
| --- | --- |
| val | <code>object</code> | 

**Example**  
```js
firebaseObject.set({value: 1});
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
An object which keeps its values synchronized with the remote.

**Kind**: static class of <code>[firesync](#firesync)</code>  
**Extends:** <code>[FiresyncBase](#new_FiresyncBase_new)</code>  
**Access:** protected  

* [.FiresyncObject](#firesync.FiresyncObject) ⇐ <code>[FiresyncBase](#new_FiresyncBase_new)</code>
  * [.loaded()](#FiresyncBase+loaded) ⇒ <code>boolean</code>
  * [.ref()](#FiresyncBase+ref) ⇒ <code>FirebaseRef</code>
  * [.detach()](#FiresyncBase+detach)
  * [.set(val)](#FiresyncBase+set)
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
Detaches from the subscribed events to the [FirebaseRef](FirebaseRef)

**Kind**: instance method of <code>[FiresyncObject](#firesync.FiresyncObject)</code>  
<a name="FiresyncBase+set"></a>
#### firesyncObject.set(val)
Applies a value to the object.

**Kind**: instance method of <code>[FiresyncObject](#firesync.FiresyncObject)</code>  

| Param | Type |
| --- | --- |
| val | <code>object</code> | 

**Example**  
```js
firebaseObject.set({value: 1});
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
