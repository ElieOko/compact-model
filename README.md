### Compact Model
Compact Model est un `Model Proxy` qui vous permet d'avoir une codebase refactorisée lorsqu'il s'agit de définir vos endpoints et le flux réseau en encapsulant le client `axios`.

### Plugins

* axios
* dotenv

### Installation
First install Node.js then :
```sh
npm install compact_model
```

### Importing
```js
// Using Node.js `require()`
const CompactModel = require('compact_model')
```
### Overview

1. Create `.env` file configure
```js
PROTOCOLE = http
DOMAINE   = 127.0.0.1 // or example.com
PORT      = 8000
API_ROUTE = /api/   
```
Our backend generates this url http://127.0.0.1:8000/api/

2. Example create file index.js
```js
const CompactModel = require('compact_model');
class Product extends CompactModel{}
const product = new Product();
product.list  = "";
const {get} = product.method();
//endpoints http://127.0.0.1:8000/api/product/
get.then(res=>{
    console.log(res.data);
}).catch(err=>{
    console.log(err);
});
   ```
Our backend generates the name of the class as an API route within the collection of the extended ModelCompact class.

#### Default value endpoints
```js
list    = "/all";
detail  = "/detail/:id";
create  = "/store";
destory = "/delete/:id";
update  = "/update/:id";    
```
