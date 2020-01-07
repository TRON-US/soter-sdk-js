const chai = require('chai');
const assert = chai.assert;
const soterBuilder = require('./soterBuilder');
const TronWeb = require('../setup/tronWeb');
const { NET } = require('./config');
const assertThrow = require('./assertThrow');


module.exports = {
    chai,
    assert,
    assertThrow,
    soterBuilder,
    TronWeb,
    net: NET
};