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
  var $handle = $('#grip');
  var newHeight = event.pageY - $textarea.offset().top;
  if (newHeight >= 200) { //on ne peut pas descendre en dessous de cette taille
    $textarea.css('height', 'calc(' + newHeight + 'px - ' + $handle.height() + 'px)');
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

//compte le nombres de caractère du textarea
$(document).ready(function(){
  function updateCounter() {
    var cnt = $("#counter > span");
    var txt = $("textarea").val();
    var len = txt.length;
    
    $(cnt).text(len);
  }

  $('textarea').on('input', function() {
    updateCounter();
  });
});

$(function() {
  var toolbar = '<div class="btn-group" role="group">'
                + '<button class="btn btn-sm btn-secondary" type="button" onclick="insertText(\'**\', \'**\')" title="Gras"><i class="fas fa-bold"></i></button>'
                + '<button class="btn btn-sm btn-secondary" type="button" onclick="insertText(\'*\', \'*\')" title="Italic"><i class="fas fa-italic"></i></button>'
                
                + '<button class="btn btn-sm btn-secondary" type="button" onclick="insertText(\'~~\', \'~~\')" title="strike"><i class="fas fa-strikethrough"></i></button>'
                + '<button class="btn btn-sm btn-secondary" type="button" onclick="addLink()" title="InsertLink"><i class="fas fa-link"></i></button>'
                + '</div>&nbsp;'

                + '<div class="btn-group" role="group">'
                + '<button class="btn btn-sm btn-secondary" type="button" onclick="insertText(\'\\n>&nbsp;\', \'\\n\')" title="Quote"><i class="fas fa-quote-right"></i></button>'
                + '<button class="btn btn-sm btn-secondary" type="button" onclick="insertText(\'\\n```php\\n\', \'\\n```\\n\')" title="BlocCode"><i class="fas fa-code"></i></button>'
                + '<button class="btn btn-sm btn-secondary" type="button" onclick="insertText(\'`\', \'`\')" title="InlineCode"><i class="fas fa-terminal"></i></button>'
                + '</div>&nbsp;'
                
                + '<button class="btn btn-sm btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">'/*smiley btn dropdown start */
                + '<i class="fas fa-smile"></i>'
                + '</button>'/* smiley btn dropdown stop */
                
                + '<div class="dropdown-menu" style="padding:5px 5px 1px 5px;">'//dropdown
                + '<div class="line1 mb-1">'
                + '<button class="btn btn-sm" type="button" onclick="insertText(\'😂\', \'\')">😂</button>'
                + '<button class="btn btn-sm" type="button" onclick="insertText(\'😁\', \'\')">😁</button>'
                + '<button class="btn btn-sm" type="button" onclick="insertText(\'😏\', \'\')">😏</button>'
                + '<button class="btn btn-sm" type="button" onclick="insertText(\'😉\', \'\')">😉</button>'
                + '</div>'
                + '<div class="line2 mb-1">'
                + '<button class="btn btn-sm" type="button" onclick="insertText(\'😎\', \'\')">😎</button>'
                + '<button class="btn btn-sm" type="button" onclick="insertText(\'😮\', \'\')">😮</button>'
                + '<button class="btn btn-sm" type="button" onclick="insertText(\'🤔\', \'\')">🤔</button>'
                + '<button class="btn btn-sm" type="button" onclick="insertText(\'🫡\', \'\')">🫡</button>'
                + '</div>'
                + '<div class="line3 mb-1">'
                + '<button class="btn btn-sm" type="button" onclick="insertText(\'😌\', \'\')">😌</button>'
                + '<button class="btn btn-sm" type="button" onclick="insertText(\'😛\', \'\')">😛</button>'
                + '<button class="btn btn-sm" type="button" onclick="insertText(\'🤤\', \'\')">🤤</button>'
                + '<button class="btn btn-sm" type="button" onclick="insertText(\'😓\', \'\')">😓</button>'
                + '</div>'
                + '</div>'//dropdown end
                + '<div id="counter"><span>0</span> caractères</div>';
  $('#toolbar').html(toolbar);
});

//code qu va créer généré la div toolbar < textarea > grip dans cette ordre
window.onload = function() {
  // récupérer l'élément textarea
  var editor = document.getElementById("editor");

  // créer un nouvel élément div pour la toolbar
  var toolbar = document.createElement("div");
  toolbar.setAttribute("id", "toolbar");
  toolbar.setAttribute("class", "toolbar-style");

  // créer un nouvel élément div pour le grip
  var grip = document.createElement("div");
  grip.setAttribute("id", "grip");
  grip.setAttribute("class", "grip-style");

  // insérer la nouvelle div toolbar avant l'élément textarea
  if(editor != null){
    editor.parentNode.insertBefore(toolbar, editor);
  }

  if(editor != null){
    // insérer la nouvelle div grip après l'élément textarea
    editor.parentNode.insertBefore(grip, editor.nextSibling);
  }
};
