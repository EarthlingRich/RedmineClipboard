browser.browserAction.onClicked.addListener(function(tab) {
    if(tab.url.includes("/issues/")){
        browser.tabs.executeScript(tab.id, {file: "js/content.js"});
    }
});