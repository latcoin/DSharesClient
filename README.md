# DShare Client

This is a general purpose DShare client in JavaScript.

## Directory structure

* `build/` Compiled files
* `src/` Source code
* `src/js/client` Client classes
* `src/js/entry` Entry points for the various client versions
* `src/js/util` Various static, stateless utility functions
* `tools/` Tools used in the build process


## Testing Locally

Run the following command to run the tests once.

    ./node_modules/.bin/karma start test/karma.conf.js --single-run

Or run Karma in the background and listen to changes in /test

    ./node_modules/.bin/karma start test/karma.conf.js