function Check() {
ObjC.import('Cocoa');
ObjC.import('Foundation');
ObjC.import('stdlib');
var currentApp = Application.currentApplication();
currentApp.includeStandardAdditions = true;

//leveraged this idea from reading https://www.generacodice.com/en/articolo/4525879/osx-check-if-the-screen-is-locked

var fileMan = $.NSFileManager.defaultManager;

var results = "";

try {

var script = `
#!/bin/bash
p=$(ioreg -n Root -d1 -a | grep CGSSession)
if [[ "$p" == *"CGSSessionScreenIsLocked"* ]]; then
        echo "[+] Screen is currently LOCKED"
else
        echo "[-] Screen is currently UNLOCKED"
fi`

var p = currentApp.doShellScript(script);

results += p;

return results

} catch (error){
        return error;
}


}

//Check()
