
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
        var textarea = document.getElementById('my-textarea');
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
  var $wrapper = $('.editor');
  var $handle = $('#grip');

  $handle.on('mousedown', function(event) {
    event.preventDefault();
    $(document).on('mousemove', resizeTextarea);
    $(document).on('mouseup', stopResizeTextarea);
  });

  function resizeTextarea(event) {
    $textarea.css('height', event.pageY - $wrapper.offset().top);
    $wrapper.css('height', event.pageY - $wrapper.offset().top + $handle.height());
  }

  function stopResizeTextarea() {
    $(document).off('mousemove', resizeTextarea);
    $(document).off('mouseup', stopResizeTextarea);
  }
});
