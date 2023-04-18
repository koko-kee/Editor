$(function() {
  var toolbar = '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'
               + '<button class="btn btn-sm btn-secondary" type="button" onclick="insertText(\'**\', \'**\')" title="Gras"><i class="fas fa-bold"></i></button>'
               + '<button class="btn btn-sm btn-secondary" type="button" onclick="insertText(\'_\', \'_\')" title="Italic"><i class="fas fa-italic"></i></button>'
               + '<button class="btn btn-sm btn-secondary" type="button" onclick="insertText(\'\\n>&nbsp;\', \'\\n\')" title="Quote"><i class="fas fa-quote-right"></i></button>'
               + '<button class="btn btn-sm btn-secondary" type="button" onclick="addLink()" title="InsertLink"><i class="fas fa-link"></i></button>'
               + '</div>&nbsp;'

               + '<div class="btn-group" role="group" aria-label="Button group with nested dropdown">'
               + '<button class="btn btn-sm btn-secondary" type="button" onclick="insertText(\'\\n```php\\n\', \'\\n```\\n\')" title="BlocCode"><i class="fas fa-code"></i></button>'
               + '<button class="btn btn-sm btn-secondary" type="button" onclick="insertText(\'`\', \'`\')" title="InlineCode"><i class="fas fa-terminal"></i></button>'
               + '</div>&nbsp;'

               + '<button class="btn btn-sm btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">'
               + '<i class="fas fa-smile"></i>'
               + '</button>'
               + '<div class="dropdown-menu" style="padding:5px 5px 1px 5px;">'
                + '<div class="line1 mb-1">'
                  + '<button class="btn btn-sm" type="button" onclick="insertText(\'😂\', \'\')" title="InsertLink">😂</button>'
                  + '<button class="btn btn-sm" type="button" onclick="insertText(\'😁\', \'\')" title="InsertLink">😁</button>'
                  + '<button class="btn btn-sm" type="button" onclick="insertText(\'😏\', \'\')" title="InsertLink">😏</button>'
                  + '<button class="btn btn-sm" type="button" onclick="insertText(\'😉\', \'\')" title="InsertLink">😉</button>'
                + '</div>'
                + '<div class="line2 mb-1">'
                  + '<button class="btn btn-sm" type="button" onclick="insertText(\'😎\', \'\')" title="InsertLink">😎</button>'
                  + '<button class="btn btn-sm" type="button" onclick="insertText(\'😮\', \'\')" title="InsertLink">😮</button>'
                  + '<button class="btn btn-sm" type="button" onclick="insertText(\'🤔\', \'\')" title="InsertLink">🤔</button>'
                  + '<button class="btn btn-sm" type="button" onclick="insertText(\'🫡\', \'\')" title="InsertLink">🫡</button>'
                + '</div>'
               + '</div>';
  $('#toolbar').html(toolbar);
});


/* cette partie gere l'entré du markdown dans le textarea en cliquand sur un bouton donner */
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
      insertText(linkMarkdown, "");
    }
  }
}

function resizeTextarea(event) {
  var $textarea = $('textarea');
  var $wrapper = $('#textarea-wrapper');
  var $handle = $('#grip');
  var newHeight = event.pageY - $wrapper.offset().top;
  if (newHeight >= 200) { //on ne peut pas descendre en dessous de cette taille
    $textarea.css('height', '100%');
    $wrapper.css('height', newHeight + $handle.height());
  }
}

function stopResizeTextarea() {
  $(document).off('mousemove', resizeTextarea);
  $(document).off('mouseup', stopResizeTextarea);
}

$(document).ready(function() {
  var $handle = $('#grip');

  $handle.on('mousedown', function(event) {
    event.preventDefault();
    $(document).on('mousemove', resizeTextarea);
    $(document).on('mouseup', stopResizeTextarea);
  });
});
