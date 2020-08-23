function getInputValue(){
    // Selecting the input element and get its value 
    var text = document.getElementById("sentence").value;
    
    // alert if the sentence dosn't have a .
    if (text[text.length-1].localeCompare('.')){alert("please enter a sentence that ends with .")}
    else{
    //display the sentence and the number of char
        document.getElementById("t").innerHTML=text;
        document.getElementById("numChar").innerHTML=text.length;
        //determine the number of words
        var x=0;
        var n=1;
        for (var i in text){
        // count the words number
        if (text[i].trim() === '' ) {n++;};
        // count the vowels number
        switch (text[i]){
            case "a": x++; break;
            case "i": x++; break;
            case "o": x++; break;
            case "y": x++; break;
            case "e": x++; break;
            case "u": x++; break;
            default:;}
        }
         // display the words number
        document.getElementById("numWords").innerHTML=n;
        // display the vowels number
        document.getElementById("numVowels").innerHTML=x;
  
    }
}