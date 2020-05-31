'use strict';

function updateText() {
  console.log("update text called");
  // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.tabs.sendMessage(tabs[0].id, {status: "start"}, function(response) {
  //     console.log(response);
  //   });
  // });
}

chrome.browserAction.onClicked.addListener(updateText);