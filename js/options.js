function save_options() {
  var dict = document.getElementById('dict').value;
  chrome.storage.local.set({
    dict: dict
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'saved';
    setTimeout(function() {
      status.textContent = '';
    }, 1000);
  });
}

function restore_options() {
  chrome.storage.local.get('dict', function(result) {
    var dict = result.dict || 'enit';
    document.getElementById(dict).selected = 'selected'
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('dict').addEventListener('change', save_options);
