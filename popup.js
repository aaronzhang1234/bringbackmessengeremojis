let bkg = chrome.extension.getBackgroundPage();
bkg.console.log("hello!");

chrome.tabs.executeScript({file: 'changer.js'});
