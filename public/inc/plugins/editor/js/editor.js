function insertText(openTag, closeTag) {
    var textarea = document.getElementById('editor');
    var start = textarea.selectionStart;
    var end = textarea.selectionEnd;
    var selectedText = textarea.value.substring(start, end);
    var replacement = openTag + selectedText + closeTag;
    textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
    textarea.selectionStart = start + openTag.length;
    textarea.selectionEnd = end + openTag.length;
    textarea.focus();
}

function addLink() {
  var linkText = prompt("Entrez le texte du lien :");
  if (linkText) {
    var linkUrl = prompt("Entrez l'URL du lien :");
    if (linkUrl) {
      var linkMarkdown = "[" + linkText + "](" + linkUrl + ")";
      var textarea = document.getElementById('editor');
      var startPos = textarea.selectionStart;
      var endPos = textarea.selectionEnd;
      textarea.value = textarea.value.substring(0, startPos) + linkMarkdown + textarea.value.substring(endPos, textarea.value.length);
      textarea.selectionStart = startPos + linkMarkdown.length;
      textarea.selectionEnd = startPos + linkMarkdown.length;
      textarea.focus();
    }
  }
}

$(document).ready(function() {
  var $textarea = $('#editor');
  var $wrapper = $('#textarea-wrapper');
  var $handle = $('#grip');

  $handle.on('mousedown', function(event) {
    event.preventDefault();
    $(document).on('mousemove', resizeTextarea);
    $(document).on('mouseup', stopResizeTextarea);
  });

  function resizeTextarea(event) {
    var newHeight = event.pageY - $wrapper.offset().top;
    if (newHeight >= 200) {
      $textarea.css('height', '100%');
      $wrapper.css('height', newHeight + $handle.height());
    }
  }

  function stopResizeTextarea() {
    $(document).off('mousemove', resizeTextarea);
    $(document).off('mouseup', stopResizeTextarea);
  }
});
