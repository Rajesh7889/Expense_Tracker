let submit=document.getElementById('submit');
    let form=document.getElementById('form');
    let para=document.querySelectorAll('.values');
    let error= document.querySelectorAll('.error');
    let records={};
     //perventing default submition..
  //empty fields check....
   function check(){
    for(let i=0;i<para.length;i++){
       if(para[i].value.trim()==''){
         error= document.querySelectorAll('.error')[i];
         para[i].style.border='solid 2px red';
         error.innerHTML='*please fill details';
         submit.disabled=true;
       }
    }
   }
   //name validation...
   function check1(){
    let name=para[0].value;
    let chk=/^[A-Za-z]+$/;
    if(name.match(chk) && name.length>2){
      error.innerHTML= '<br>';
      para[0].style.border='solid 2px green';
      submit.disabled=false;
    }else {
     error=document.querySelectorAll('.error')[0];
      error.innerHTML='*enter a valid name';
      return false;
    }
 }
 //email validation
 function check2(){
    let name=para[1].value;
    let chk=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    if(name.match(chk)){
     error.innerHTML= '<br>';
     para[1].style.border='solid 2px green';
     submit.disabled=false;
    }else {
     error=document.querySelectorAll('.error')[1];
       error.innerHTML='*enter a valid email..';
       return false;
    }
   }
//password validation...
 function check3(){
     let name=para[2].value;
     let chk =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*]).{8,}$/;
     if(name.match(chk)){
      error.innerHTML= '<br>';
      para[2].style.border='solid 2px green';
      submit.disabled=false; 
     }else {
       error=document.querySelectorAll('.error')[2];
        error.innerHTML='*atleast one of each[A-Z,a-z,0-9,a secial character(length>8)]..';
        return false;
     }
 }
 //submiting the values...
 function submition(){
       records={
             Name:para[0].value,
             email:para[1].value,
             password:para[2].value
               }; 
      let myinfo= localStorage.getItem("info");
        if(myinfo == null){
            savedinfo = [];
        }else {
            savedinfo = JSON.parse(myinfo);
        }
        savedinfo.push(records);
        console.log(savedinfo);
        localStorage.setItem("info",JSON.stringify(savedinfo));
        alert('You are registered successfully..please login now..');
        para[0].value='';
        para[1].value='';
        para[2].value='';
}
 