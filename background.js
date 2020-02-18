console.log("I am in the bg");
chrome.browserAction.onClicked.addListener(function(){
    console.log("You clicked me");
    chrome.tabs.executeScript({
        file: "jquery-3.4.1.js"
    });
    chrome.tabs.executeScript({
        file: "content.js"
    });
   
})