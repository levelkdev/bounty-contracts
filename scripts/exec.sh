#! /bin/bash

babel $1.js --out-file $1.bundle.js && truffle exec $1.bundle.js
