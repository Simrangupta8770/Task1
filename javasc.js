


window.onload=function(){
    const form=document.getElementById('form');
    const file=document.getElementById('file')
const piname=document.getElementById("piname");
const pname=document.getElementById("pname");
const bname=document.getElementById("bname");
const cstore=document.getElementById("cstore");
const cred=document.getElementById("cred");
const run=document.getElementById("run");
    form.addEventListener('submit',(event)=>{
    
        event.preventDefault();
        validate();
    })
  }


function setErrorMsg(input,errormsgs){
    const inputField =input.parentElement;
    const small =inputField.querySelector("small");
    small.innerText =errormsgs;

    inputField.className="input-field error";
    
}
function setSuccessMsg(input){
    const inputField =input.parentElement;
    inputField.className="input-field success";
    const small =inputField.querySelector("small");
    small.innerText ="";
}
const sendData=(sRate,count) =>{
        if(sRate===count){
            swal("Creation sucessful", "success");
            location.href='index.html';
            
        }
    }
    const successMsg =() =>{
        let formCon=document.getElementsByClassName('input-field');
        var count=formCon.length-1;
        for(var i=0 ;i<formCon.length;i++) {
            if(formCon[i].className==="input-field success"){
                var sRate=0+i;
                sendData(sRate,count);
            }
            else{
                return false;
            }
        }
    }
const format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
const spChar=(d)=>{
    if(format.test(d)){
        return true;
      } else {
        return false;
      }
}

const check=(data,field)=>{
    if(data.length<5){
        setErrorMsg(field,"length should be min 5 char");
    }
    else if(data[0]=='-'||data[0]=='_'||data[0]=='+'){
        setErrorMsg(field,"Special char not allowed");
    }
    else if(spChar(data)){
        setErrorMsg(field,"Special char not allowed");
    }else{
        setSuccessMsg(field);
    }
}
const validate=()=>{
    const pinameVal=piname.value.trim();
    const pnameVal=pname.value.trim();
    const bnameVal=bname.value.trim();
    const cstoreVal=cstore.value.trim();
    const credVal=cred.value.trim();
    const runVal=run.value.trim();
    if(file.files.length == 0 ){
        setErrorMsg(file,"no file selected");
    }else{
        setSuccessMsg(file);
    }
    check(pinameVal,piname);
    check(pnameVal,pname);
    check(bnameVal,bname);
    check(cstoreVal,cstore);
    check(credVal,cred);
    check(runVal,run);
    successMsg();
}
// const isEmail=(emailVal) =>{
//     var atsymbol =emailVal.indexOf('@');
//     if(atsymbol <1) return false;
//     var dot =emailVal.lastIndexOf('.');
//     if(dot <= atsymbol+3) return false;
//     if(dot===emailVal.length -1) return false;
//     return true;
// }

// const sendData=(usernameVal,sRate,count) =>{
//     if(sRate===count){
//         swal("Welcome "+ usernameVal , "You are logged in Successfully", "success");
//         location.href='index.html';
        
//     }
// }
// const successMsg =(usernameVal) =>{
//     let formCon=document.getElementsByClassName('form-control');
//     var count=formCon.length-1;
//     for(var i=0 ;i<formCon.length;i++) {
//         if(formCon[i].className==="form-control success"){
//             var sRate=0+i;
//             console.log(sRate);
//             sendData(usernameVal,sRate,count);
//         }
//         else{
//             return false;
//         }
//     }
// }
// //final validation

// function validate(){
//     const usernameVal=username.value.trim();
//     const numberVal=phone.value.trim();
//     const emailVal=email.value.trim();
//     const passwordVal=password.value.trim();
//     const cpasswordVal=cpassword.value.trim();
    
//     //username validate
//     if(usernameVal===""){
//         setErrorMsg(username,"username cannot be blank");
//      } else if(usernameVal.length <= 2){
//          setErrorMsg(username,"username min 3 char");
//     } else{
//          setSuccessMsg(username);
//     }
// // email VAL
//     if(emailVal===""){
//         setErrorMsg(email,"email cannot be blank");
//      } else if(emailVal.length <= 3){
//         setErrorMsg(email,"email is invalid");
//     } else if(!isEmail(emailVal)){
//         setErrorMsg(email,"invalid email");
//     } else{
//         setSuccessMsg(email);
//     }

// // phone val
//     if(numberVal===""){
//         setErrorMsg(number,"phone number cannot be blank");
//     } else if(numberVal.length!=10)
//     {
//         setErrorMsg(phone,"invalid phone no.");
//         setSuccessMsg(phone);
//     } else{
//         setSuccessMsg(phone);
//     }
// //password
//     if(passwordVal===""){
//         setErrorMsg(password,"password cannot be blank");

//     } else if(passwordVal.length<=5){
//         setErrorMsg(password,"password has to be of minimum 6 characters");

//     } else{
//         setSuccessMsg(password);


//     }


// //password
// if(cpasswordVal===""){
//     setErrorMsg(cpassword,"cpassword cannot be blank");

// } else if(passwordVal !== cpasswordVal){
//     setErrorMsg(cpassword,"recheck confirm password");

// } else{
//     setSuccessMsg(cpassword);

// }
//   successMsg(usernameVal);
// }
