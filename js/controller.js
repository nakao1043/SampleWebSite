function doPrint(){
    var inputText = document.getElementById('inputText');
    console.log(inputText.value);
    var msgArea = document.getElementById('msgArea');
    msgArea.innerText = inputText.value;
}
