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
await soter.query.userBalance()

await soter.query.userSignBalanceRawData()

await soter.query.userSignBalance()


await soter.query.depositHistory()

await soter.query.signDepositHistoryRawData()

await soter.query.signDepositHistory()


await soter.query.userOrderList()

await soter.query.userSignOrderListRawData()

await soter.query.userSignOrderList()


await soter.query.userUploaded()

await soter.query.userSignUploadedRawData()

await soter.query.userSignUploaded()

```


## Set [examples](https://github.com/TRON-US/soter-sdk-js/blob/master/examples/set.html)

```javascript
await soter.set.setAutopay()

await soter.set.setSignAutopayRawData()

await soter.set.setSignAutopay()
```

## Update [examples](https://github.com/TRON-US/soter-sdk-js/blob/master/examples/update.html)

```javascript
await soter.update.userInformation(path)

await soter.update.userSignInformationRawData()

await soter.update.userSignInformation()
```

## Addfiles [examples](https://github.com/TRON-US/soter-sdk-js/blob/master/examples/addFile.html)

```javascript
await soter.add.addFile()

await soter.add.signAddFileRawData()

await soter.add.signAddFile()
```

# License

MIT
