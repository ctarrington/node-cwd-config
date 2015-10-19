# node-cwd-config
node configuration utility based on the current working directory of the process

# Installation
npm install cwd-config

# Usage
Add config files to a configs directory where you intend to start your node application.
 
If you use upstart or some other scheme that runs your node application from a script, 
make sure that the script changes directories before it starts node. 

So, if your config file is:
/configs/things.json

Then you can access it from any file with:

var cwdConfig = require('cwd-config');
var config = cwdConfig('things');

or 

var config = require('cwd-config')('things');

