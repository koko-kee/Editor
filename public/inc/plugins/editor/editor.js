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
    preview();
}

function preview() {
    var preview = document.getElementById('preview');
    var converter = new showdown.Converter();
    var markdownText = document.getElementById('editor').value;
    var htmlText = converter.makeHtml(markdownText);
    preview.innerHTML = htmlText;
}


// Fonction pour mettre à jour l'aperçu
function updatePreview() {
    const editor = document.getElementById('editor');
    const preview = document.getElementById('preview');
    const content = editor.innerHTML;
    const html = marked(content);
    preview.innerHTML = html;
}

// Ajout d'un écouteur d'événement pour détecter les changements dans l'éditeur
const editor = document.getElementById('editor');
editor.addEventListener('input', updatePreview);

// Initialisation de l'aperçu
updatePreview();
