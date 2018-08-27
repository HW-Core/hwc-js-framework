#!/usr/bin/env bash

PATH_MODULES="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )/modules/"
[ ! -d $PATH_MODULES/drassil/joiner ] && git clone https://github.com/drassil/joiner $PATH_MODULES/drassil/joiner -b master
source "$PATH_MODULES/drassil/joiner/joiner.sh"

#
# ADD DEPENDENCIES
#

Joiner:add_repo "https://github.com/hw-core/js-library-browser-application"
