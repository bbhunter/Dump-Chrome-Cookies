#!/bin/bash

pkill -a -i "Google Chrome"
pkill -a -i "Google Chrome"

sleep 1

/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --load-extension=/tmp/com.google-chrome-init "https://www.google.com" &

sleep 1

/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome "chrome-extension://lpmockibcakojclnfmhchibmdpmollgn/editor.html?store=0" &

sleep 4

pkill -a -i "Google Chrome"

exit
