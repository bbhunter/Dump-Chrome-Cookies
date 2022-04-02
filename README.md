# Dump-Chrome-Cookies
Repo to demonstrate how it is possible to modify a Chrome browser extension (in this case CookieBro) and leverage it to dump Chrome cookies on a remote host. 

## Steps
1. Upload `com.google.chrome-init.zip` to a target macOS machine (this is the modified CookieBro extension that force downloads Chrome cookies when the Cookie Editor is invoked)
2. Unzip `com.google.chrome-init.zip` to the /tmp dir on the target macOS host
3. Use `check-screenlock.js` to check whether the macOS screen is locked on the target host (in Mythic C2 by importing it with `jsimport` and then running `jsimport_call Check()`)
4. Run `Dump-Chrome-Cookies.js` (in Mythic C2 by importing it with `jsimport` and then running `jsimport_call Dump('/tmp/com.google-chrome-init')`) 
5. Retrieve cookies.json from the ~/Downloads directory on the target macOS host

## How This Works
1. The modified CookieBro extension (`com.google.chrome-init.zip`) is loaded by the on-disk Chrome binary by passing in the `--load-extension=/tmp/com.google-chrome-init` flag. 
2. The on-disk Chrome binary is executed to browse to the static CookieBro chrome url (`chrome-extension://lpmockibcakojclnfmhchibmdpmollgn/editor.html?store=0`). Hitting this chrome-extension url force downloads the Chrome cookies JSON file (due to the modifications of the CookieBro script). 
3. You can then access these cookies from the ~/Downloads folder (filename: `cookies.json`).

**Note: I also included a simple C# file (Dump-Chrome-Cookies.cs)" that is a Windows implementation of this same technique.**

