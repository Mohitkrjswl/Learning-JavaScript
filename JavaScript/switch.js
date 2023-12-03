// Same as if else statement 
/*statement is a control flow statement that allows you to select one of many
 code blocks to be executed. It's commonly used when
 you have a variable and want to perform different actions based on its value.*/

 let day = "Monday";
let message;

switch (day) {
  case "Monday":
    message = "It's the start of the week";
    break;
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    message = "It's a workday";
    break;
  case "Friday":
    message = "TGIF! It's Friday!";
    break;
  case "Saturday":
  case "Sunday":
    message = "It's the weekend";
    break;
  default:
    message = "Not a valid day";
}

console.log(message);
// Output: "It's the start of the week"
