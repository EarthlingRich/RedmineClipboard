chrome.browserAction.onClicked.addListener(function(tab) {
    debugger;
    if(tab.url.includes("/issues/")){
        chrome.tabs.executeScript(tab.id, {file: "content.js"});
    }
});