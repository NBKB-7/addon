chrome.runtime.onInstalled.addListener(()=>{
  chrome.contextMenus.create({
    id:"root",
    title:"add_on",
    contexts:["link"],
    type:"normal"
  });

  chrome.contextMenus.create({
    parentId:"root",
    id:"link_unwrap",
    title:"リンクをリスト外として開く",
    contexts: ["all"],
    type: "normal",
  });
});

chrome.contextMenus.onClicked.addListener(function(event) {
    if(event.menuItemId === "link_unwrap"){
        console.log(event);
//const url = "https://ja.wikipedia.org/wiki/" + event.selectionText;
        chrome.tabs.create({url});
    }
})
