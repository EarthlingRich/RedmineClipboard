chrome.browserAction.onClicked.addListener(function(tab) {
    if(tab.url.includes("/issues/")){
        chrome.tabs.executeScript(tab.id, {file: "js/content.js"});
    }
});