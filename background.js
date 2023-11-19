chrome.runtime.onInstalled.addListener(() => {
    //receiving a message
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
            console.log(sender.tab ?
                        "from a content script:" + sender.tab.url :
                        "from the extension");
            if (request.greeting === "hello"){
                sendResponse({farewell: "goodbye"});
            }
        }
    );

    chrome.offscreen.createDocument({
        url: 'web_resources/n.html',
        reasons: ['CLIPBOARD'],
        justification: 'testing the offscreen API'
    });


    console.log('hello world');
    //create context menu
    // chrome.contextMenus.create({
    //     id: "wikipedia",
    //     title: "Search for: \"%s\" on Wikipedia", 
    //     contexts: ["selection"], 
    // })
});

//listener for context menu
// chrome.contextMenus.onClicked.addListener(function(info, tab){
//     baseURL = "http://en.wikipedia.org/wiki/";
//     var newURL = baseURL + info.selectionText;
//     chrome.tabs.create({ url: newURL });
// })

