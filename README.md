# soter-sdk-js

====

<p>
  <a href=""><img src="https://img.shields.io/badge/npm-%3E%3D6.0.0-orange.svg?style=flat" /></a>
  <a href=""><img src="https://img.shields.io/badge/Node.js-%3E%3D10.0.0-orange.svg?style=flat" /></a>
  <br>
</p>

> BTFS Soter is a charging service gateway based on the TRON Network and BTFS cluster<br/>
> A set of utilities to help identify [BTFS](https://BTFS.io/) resources

# Install

### In Node.js through npm

```bash
$ npm install soter
```

### Browser: Browserify, Webpack, other bundlers

The code published to npm that gets loaded on require is in fact an ES5 transpiled version with the right shims added. This means that you can require it and use with your favorite bundler without having to adjust asset management process.

```javascript
var Soter = require('soter')
```


### In the Browser through `<script>` tag

Loading this module through a script tag will make the ```Soter``` obj available in the global namespace.

```html
<script src="/dist/Soter.js"></script>
<script src="./tronWeb.js"></script>
```

# Usage
```javascript
 const Soter = require('soter')

 const tronWeb = new TronWeb({
                        fullHost: 'https://api.shasta.trongrid.io',
                        privateKey: 'your private key'
                })
    
 var soter = new Soter(tronWeb)              

 soter.query.userBalance()    // {code: 0, data: {balance: 0}}
	

```

# API

The target audience for BTFS Soter are developers familiar with HTTP APIs and network development.


## Query [examples](https://github.com/TRON-US/soter-sdk-js/blob/master/examples/query.html)


```javascript
soter.query.userBalance()

soter.query.userSignBalanceRawData()

soter.query.userSignBalance()


soter.query.depositHistory()

soter.query.signDepositHistoryRawData()

soter.query.signDepositHistory()


soter.query.userOrderList()

soter.query.userSignOrderListRawData()

soter.query.userSignOrderList()


soter.query.userUploaded()

soter.query.userSignUploadedRawData()

soter.query.userSignUploaded()

```


## Set [examples](https://github.com/TRON-US/soter-sdk-js/blob/master/examples/set.html)

```javascript
soter.set.setAutopay()

soter.set.setSignAutopayRawData()

soter.set.setSignAutopay()
```

## Update [examples](https://github.com/TRON-US/soter-sdk-js/blob/master/examples/update.html)

```javascript
### `soter.update.userInformation(path)`

### `soter.update.userSignInformationRawData()`

### `soter.update.userSignInformation()`
```

## Addfiles [examples](https://github.com/TRON-US/soter-sdk-js/blob/master/examples/addFile.html)

```javascript
### `soter.add.addFile()`

### `soter.add.signAddFileRawData()`

### `soter.add.signAddFile()`
```

# License

MIT
