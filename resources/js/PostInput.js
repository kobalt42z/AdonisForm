class PostInput {

    render() {
        const textArea = document.getElementById("editor");
        const currentPosition = textArea.selectionStart;
        const before = textArea.value.substring(0, currentPosition);
        const after = textArea.value.substring(currentPosition, textArea.value.length);
        textArea.value = before + text; + after;
        textArea.selectionStart = textArea.selectionEnd = currentPosition + text.length;
        return textArea;
    }

    save(blockContent) {
        console.log(blockContent.value);
    }
}
//! tocheck !!!