chrome.runtime.onMessage.addListener(function(message) {
  chrome.runtime.sendMessage(window.getSelection().toString().trim());
});