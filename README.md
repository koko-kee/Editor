# Editor
editeur markdown light perso 

Juste un simple editeur qui correspond a mes besoins, je suis débutant en js mais ça fonctionne, on continuear a amélioré ça.

```html
<div id="editor-area">
    <div id="toolbar">
        <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button class="btn btn-sm btn-secondary" type="button" onclick="insertText('**', '**')" title="Gras"><i class="fas fa-bold"></i></button>
            <button class="btn btn-sm btn-secondary" type="button" onclick="insertText('_', '_')" title="Italic"><i class="fas fa-italic"></i></button>
            <button class="btn btn-sm btn-secondary" type="button" onclick="insertText('> ', '')" title="Quote"><i class="fas fa-quote-right"></i></button>
            <button class="btn btn-sm btn-secondary" type="button" onclick="insertText('\n```php\n', '\n```')" title="BlocCode"><i class="fas fa-code"></i></button>
            <button class="btn btn-sm btn-secondary" type="button" onclick="insertText('`', '`')" title="InlineCode"><i class="fas fa-terminal"></i></button>
            <button class="btn btn-sm btn-secondary" type="button" onclick="addLink()" title="InsertLink"><i class="fas fa-link"></i></button>
        </div>
        <button class="btn btn-sm btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <i class="fas fa-smile"></i>
        </button>
        <div class="dropdown-menu" style="padding:5px 5px 1px 5px;">
            <div class="line1 mb-1">
                <button class="btn btn-sm btn-secondary" type="button" onclick="insertText('😂', '')" title="InsertLink">😂</button>
                <button class="btn btn-sm btn-secondary" type="button" onclick="insertText('😁', '')" title="InsertLink">😁</button>
                <button class="btn btn-sm btn-secondary" type="button" onclick="insertText('😏', '')" title="InsertLink">😏</button>
                <button class="btn btn-sm btn-secondary" type="button" onclick="insertText('😉', '')" title="InsertLink">😉</button>
            </div>
            <div class="line1 mb-1">
                <button class="btn btn-sm btn-secondary" type="button" onclick="insertText('😎', '')" title="InsertLink">😎</button>
                <button class="btn btn-sm btn-secondary" type="button" onclick="insertText('😮', '')" title="InsertLink">😮</button>
                <button class="btn btn-sm btn-secondary" type="button" onclick="insertText('🤔', '')" title="InsertLink">🤔</button>
                <button class="btn btn-sm btn-secondary" type="button" onclick="insertText('🫡', '')" title="InsertLink">🫡</button>
            </div>
        </div>
    </div>
    <div id="textarea-wrapper">
        <textarea id="editor" name="f_topic_content"></textarea>
    </div>
    <div id="grip" draggable="true"><i class="fas fa-grip-horizontal"></i></div>
    <button name="topics" type="submit" class="btn btn-danger mt-2 float-end">Envoyez <i class="fas fa-paper-plane"></i></button>
    <input type="checkbox" name="sticky" value="1"> Sticky <small style="color:#912c1a;">(Personne ne pourra répondre a par les admin) </small>
</div>
```
![Capture d'écran 2023-04-17 194950](https://user-images.githubusercontent.com/8920228/232568568-15d6e070-b86b-4137-b07b-eb1c84543215.png)

