"use strict";

var chai = require('chai');
var assert = chai.assert;

var cwdConfig = require('../lib/cwd_config.js');

describe('cwd config', function() {

    it('can find a config file', function () {
        var thingsConfig = cwdConfig('things');
        assert(thingsConfig.favorites.length === 3);

    });

});
