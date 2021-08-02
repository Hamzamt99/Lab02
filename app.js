let user = prompt("PleaseEnter your Name:");

alert("Welcome to my site"+"  "+ user);
alert("Please answer yes or no for Questions below:")
let Q1 = prompt("Do i like soccer?");
switch (Q1){
    case "yes":
        alert("TRUE");
        break;
        case "no":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;
}
            
let Q2 = prompt("Do you think im short?")
switch (Q2){
    case "yes":
        alert("False");
        break;
        case "no":
        alert("True");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;



}
let Q3 = prompt("Do you think this is my last semster?")
switch (Q3){
    case "yes":
        alert("True");
        break;
        case "no":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;

}
let Q4 = prompt("Do you think im better than Messi?")
switch (Q4){
    case "yes":
        alert("True");
        break;
        case "no":
        alert("False");
        break;
        default:
            alert("Wrong answer please answer yes or no")
            break;

}

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

}
alert("Thanks for visit my webiste"+user);