let finCode =["789JKHL","6QDFSAG","8HJKLMN"];
let regex = new RegExp("[A-Z0-9]{7}");
let finData;
let userFound = false;
finData = window.prompt(" please enter finCode! ");

do  {
if(regex.test(finData)){
    for (let index = 0; index < finCode.length; index++) {
      if (finCode[index]===finData) {
        window.alert("user found: " +index);
        userFound=true;
        break;
      }
    }
 if (!userFound) 
    finData = window.prompt("user not found , try again! ");
 }
 else
 finData = window.prompt("format is not correct, try again!");
}  while(!regex.test(finData) || !userFound);  
