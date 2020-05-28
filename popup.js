/* When the page has loaded, a message is sent to the content script 
by the popup. Then the content script, by using the page DOM, reads the 
selected word and send it back to the popup. At this point, the word 
is used to set the iframe url and the popup shows the wanted page. */

window.onload = function() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, "", function(response) {});  
  });
}

chrome.runtime.onMessage.addListener(function(word) {
  const iframe = document.getElementById('iframe');
  if (word !== '') {
    iframe.src = 'https://www.wordreference.com/enit/' + word;
  }
});