chrome.runtime.onInstalled.addListener(function(){
  chrome.contextMenus.create({
    id:"root",
    title:"add_on",
    type:"normal"
  });
  chrome.contextMenus.create({
    parentId:"root",
    id:"link_unwrap",
    title:"リンクをリスト外として開く",
    type: "normal",
    contexts:["link"]
  });
});

chrome.contextMenus.onClicked.addListener(function(event) {
    if(event.menuItemId === "link_unwrap"){
        console.log(event);
//const url = "https://ja.wikipedia.org/wiki/" + event.selectionText;
        chrome.tabs.create({url});
    }
})
