
var welcome="this is a welcome message stored inside a variable";
alert(welcome);

console.log("this is a log");
/* var age=20;
var newage =25;
alert(age+newage);
*/

var btn=document.getElementById('button');
function buttonClicked() {
console.log("button clicked");
btn.removeEventListener("click",buttonClicked);
document.getElementById("text").innerHTML="dont press again";
}
btn.addEventListener("click",buttonClicked);





var hobbies=["eating","gaming","coding","learning"]
console.log("i no longer enjoy ",hobbies.pop());
hobbies.push("swimming");
