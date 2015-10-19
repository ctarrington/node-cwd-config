"use strict";

function cwdConfig(name)
{
    return require(process.cwd()+'/configs/'+name+'.json');
}

module.exports = cwdConfig;