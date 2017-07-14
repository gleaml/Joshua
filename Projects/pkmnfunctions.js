var alphabet = ["a","b", "c","d","e","f","g","h",'i',"j","k","l",
"m", "n","o",'p',"q", "r","s","t","u","v","w","x","y","z" ];
function rand(num){ 
    return Math.floor( Math.random() * num);
    }
console.log(alphabet.length);
function randLetter(){
    var randIndex = rand(alphabet.length)-1;
    return(alphabet[rand(alphabet.length)]);
}




function randWord(){
    var word= "";
    for (var i=0; i<rand(99);i+=1){
        word = word + randLetter();
        }    
    return word; 

}
randWord();
// function randSentence(){
//     var sentence=[] ;
//     for (var i=0; i<rand(7);i+=1){
//         var word = randWord() 
//         sentence = sentence.push(String(word))
//     }
//     console.log(sentence);    
//     return sentence; 
// }
// randSentence()