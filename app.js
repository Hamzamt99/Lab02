let user = prompt("PleaseEnter your Name:");
let counter = 0;

alert("Welcome to my site"+"  "+ user);
alert("Please answer yes or no for Questions below:")
function fQ1(){
let Q1 = prompt("Do i like soccer?");
switch (Q1){
    case "yes":
        alert("TRUE");
        counter++;
        break;
        case "no":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;
}}
fQ1();
function fQ2(){
let Q2 = prompt("Do you think im short?")
switch (Q2){
    case "yes":
        alert("False");
        break;
        case "no":
        alert("True");
        counter++;
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;



}}
fQ2();
function fQ3(){
let Q3 = prompt("Do you think this is my last semster?")
switch (Q3){
    case "yes":
        alert("True");
        counter++;
        break;
        case "no":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;

}}
fQ3();
function fQ4(){
let Q4 = prompt("Do you think im better than Messi?")
switch (Q4){
    case "yes":
        alert("True");
        counter++;
        break;
        case "no":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;

}}
fQ4();
function fQ5(){
let Q5 = prompt("Do you like my webpage?")
if(Q5 === null){
    Q5 = Q5.toLowerCase();
}

switch (Q5){
    case "yes":
        alert("Thanks");
        break;
        case "no":
        alert("OK");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;

}}
fQ5();
function fQ6(){
let A = prompt("you need to guess the number please answer yes/no:");
let i = 0;
for(i ;i<= 3;i++ ){
   
let Q6 = prompt("Enter a number:");

     if(Q6 == 5){
    alert("True");
    counter++;
    break;
    } else if (Q6 < 5){
        alert("Too low"); 
    } else {
        alert("Too high");
    } 
    if(i == 3){
        alert("Your attempts are over the number is 5");

    }
          
        }}
        fQ6();
        function fQ7(){
        let Team = ["Barcalona","Real madrid","Mancity","PSG","Manunited","Bayren"];
      for (let i = 0; i <6; i++) {
        let Q7 = prompt('Quess my fav team');
        if (Q7 === Team[2]) {
        alert('True');
        counter++;
        console.log(i + 1);
        break;
    } 
    else {
        alert("Wrong");
    }
    if(i == 5){
        alert("Your attempts are over the Team is Mancity");
    }
}}
fQ7();
  alert("Thanks for visit my website:"+"  "+ user);
 
      
    alert("your score is" +"  "+counter);

     
        
        
