class PreviewMarked {
  constructor(input, preview) {
    this.update = function () {
      preview.innerHTML = marked.parse(input.value);
    };
    input.editor = this;
    input.addEventListener("input", this.update);
    this.update();
  }
  
}

/* cette partie gere l'entré du markdown dans le textarea en cliquand sur un bouton donner */
function insertText(openTag, closeTag) {
  var textarea = document.getElementById('editor');
  var start = textarea.selectionStart;
  var end = textarea.selectionEnd;
  var selectedText = textarea.value.substring(start, end);
  var replacement = openTag + selectedText + closeTag;
  textarea.value = textarea.value.substring(0, start) + replacement + textarea.value.substring(end);
  textarea.selectionStart = start + openTag.length + selectedText.length + closeTag.length;
  textarea.selectionEnd = textarea.selectionStart;
  textarea.focus();
}

function addLink() {
  var linkText = prompt("Entrez le texte et l'URL du lien (séparés par une virgule) :");
  if (linkText) {
    var linkParts = linkText.split(",");
    if (linkParts.length == 2) {
      var linkMarkdown = "[" + linkParts[0] + "](" + linkParts[1] + ")";
      insertText(linkMarkdown, "");
    } else {
      alert("Le texte et l'URL doivent être séparés par une virgule.");
    }
  }
}

function addImage() {
  var linkText = prompt("Entrez le nom et l'URL de l'image (séparés par une virgule) :");
  if (linkText) {
    var linkParts = linkText.split(",");
    if (linkParts.length == 2) {
      var linkMarkdown = "![" + linkParts[0] + "](" + linkParts[1] + ")";
      insertText(linkMarkdown, "");
    } else {
      alert("Le texte et l'URL doivent être séparés par une virgule.");
    }
  }
}

//compte le nombres de caractère du textarea
function updateCounter(ideditor, idcounter) {
  var cnt = document.querySelector(idcounter + " > span");
  var txt = document.getElementById(ideditor).value;
  var len = txt.length;
  cnt.textContent = len;
  
  document.getElementById(ideditor).addEventListener("input", function() {
    updateCounter(ideditor, idcounter);
  });
}

$(document).ready(function(){
});

function addToolbar(idtoolbar){
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
      + '<button class="btn btn-sm btn-secondary" type="button" onclick="addImage()" title="InsertImg"><i class="fas fa-image"></i></button>'
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
      + '&nbsp;<button class="btn btn-sm btn-secondary" type="button" id="toggle-preview"><i class="fas fa-search"></i></button>'
      + '<div id="counter"> <span>0</span> caractères</div>';
      $(idtoolbar).html(toolbar);
}

//button preview
function setupTogglePreview(idpreview) {
  var toggleButton = document.getElementById("toggle-preview");
  var previewDiv = document.getElementById(idpreview);
  
  function togglePreview() {
    if (previewDiv.style.display === "block") {
      previewDiv.style.display = "none";
    } else {
      previewDiv.style.display = "block";
    }
  }

  toggleButton.addEventListener("click", togglePreview);
}

//code qu va créer généré la div toolbar < textarea > preview dans cette ordre
window.onload = function() {
  // récupérer l'élément textarea
  var editor = document.getElementById("editor");

  // créer un nouvel élément div pour la toolbar
  var toolbar = document.createElement("div");
  toolbar.setAttribute("id", "toolbar");
  toolbar.setAttribute("class", "toolbar-style");

  var preview = document.createElement("div");
  preview.setAttribute("id", "preview");
  preview.setAttribute("class", "preview-style");

  // insérer la nouvelle div toolbar avant l'élément textarea
  if(editor != null){
    editor.parentNode.insertBefore(toolbar, editor);
  }

  if(editor != null){
    editor.parentNode.insertBefore(preview, editor.nextSibling);
  }

  addToolbar('#toolbar');
  setupTogglePreview('preview');
  updateCounter("editor", "#counter");
};

//preview marked
$(document).ready(function(){
  var $ = function (id) { return document.getElementById(id); };
  new PreviewMarked($("editor"), $("preview"));
});
