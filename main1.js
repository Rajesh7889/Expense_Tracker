{
    let email=sessionStorage.getItem('email');
    let index=sessionStorage.getItem('book');
   let retrived=JSON.parse(localStorage.getItem(email));
   console.log(retrived);
   document.getElementById('book-name').innerHTML=`${retrived[index].book}`;
   let title=document.getElementById('text');
   let in1=document.getElementById('in1');
   let in2=document.getElementById('in2');
   let out1=document.getElementById('out1');
   let out2=document.getElementById('out2');
   let net=document.getElementById('balance');
   let netin=document.getElementById('balance1');
   let netout=document.getElementById('balance2');
   
   //getting cashin values....
   function innput(){
    out1.disabled=true;
    title.style.visibility='visible';
    in2.style.display='block';
    in1.style.display='none';
   }

   //getting cashout value...
   function outtput(){
    in1.disabled=true;
    title.style.visibility='visible';
    out2.style.display='block';
    out1.style.display='none';
   }

   //cash in mantainence...
   function innput1(a){
    out1.disabled=false;
    title.style.visibility='hidden';
    in2.style.display='none';
    in1.style.display='block';
    if((title.value =='')){
        alert('please enter a valid number');
        return 0;
      }
    saving(a);
    display();
    title.value='';
   }

   //cash out record mantainence...
   function outtput1(a){
    in1.disabled=false;
    title.style.visibility='hidden';
    out2.style.display='none';
    out1.style.display='block';
    if((title.value =='')){
        alert('please enter a valid number');
        return 0;
      }
    saving(a);
    display();
    title.value='';
   }
   
   //saving records in a book and maintaining history....
   function saving(a){
    let now=new Date();
    let total={
        netBalance:0,
        totalIn:0,
        totalOut:0,
        date:0,
    }
      let webtask = localStorage.getItem(`${retrived[index].book}`);
             if(webtask == null){
                 taskobj = [];
                 taskobj.push(total);
                 localStorage.setItem(`${retrived[index].book}`,JSON.stringify(taskobj));
             }else {
                 taskobj = JSON.parse(webtask);
             }
             let retrivedD=JSON.parse(localStorage.getItem(`${retrived[index].book}`));
              total=retrivedD.shift();
              if(a){
                 total.netBalance= parseInt(total.netBalance)+parseInt(title.value);
                 total.totalIn=parseInt(total.totalIn)+parseInt(title.value);
              }else {
                total.netBalance= parseInt(total.netBalance)-parseInt(title.value);
                total.totalOut=parseInt(total.totalOut)+parseInt(title.value);
              }
              
              total.date=now.toLocaleString();
              taskobj.unshift(total);
         localStorage.setItem(`${retrived[index].book}`,JSON.stringify(taskobj)); 
               
   }

   //deleting specific book record.....
   function deletee(a){
    let webtask = JSON.parse(localStorage.getItem(`${retrived[index].book}`));
    let opt =confirm("this action can't be undo");
    if(opt){
      webtask.splice(a,1);
   localStorage.setItem(`${retrived[index].book}`,JSON.stringify(webtask));
   display();
    }else {
   return 0;
    }
}
   //displaying book  records...
   function display(){
    let webtask = JSON.parse(localStorage.getItem(`${retrived[index].book}`));
    net.innerHTML=webtask[0].netBalance;
    netin.innerHTML=webtask[0].totalIn;
    netout.innerHTML=webtask[0].totalOut;
    let create=document.querySelectorAll('#book-record');
    let table= `<tr><th></th><tr>`;
    create[0].innerHTML=table;
    for(let i=0;i<webtask.length-1;i++){
    table+=`<tr><td> <div id='book-box'><div>${webtask[i].date}</div>
                    <div id="books">
                    <div>
                    <div id='bok1' > Net Balance:${webtask[i].netBalance}</div>
                    <div id='bok1' > last in:${webtask[i].totalIn - webtask[i+1].totalIn}</div>
                    <div id='bok1' > last out:${webtask[i].totalOut - webtask[i+1].totalOut}</div>
                    </div>
                    <div class='edt' onclick='edit(${i})'><img id="edit" src='saved.jpg'></div>
                    <div class='edt' onclick='deletee(${i})'><img id='delete' src='delete.jpg'></div>
                    </div></div>
                    </td></tr>`;
    create[0].innerHTML=table;
    }
  }



  //editing book records......
  let edit1=document.getElementById('edit1');
  let record=document.getElementById('row3');
  function edit(a){
    edit1.style.display='block';
    record.style.display='none';
    let webtask = JSON.parse(localStorage.getItem(`${retrived[index].book}`));
    let createe=document.querySelectorAll('#book-record-edit');
let table= `<tr><th><u>Edit</u></th><tr>`;
createe[0].innerHTML=table; 
table+=`<tr><td> <div id='book-box'>
                <div id="books1">
                <div>
                <div id='bok1' > Net Balance:${webtask[a].netBalance}</div>
                <div id='bok1' > last in:<input type='text'id='inn' value='${webtask[a].totalIn - webtask[a+1].totalIn}'></div>
                <div id='bok1' > last out:<input type='text'id='ouut' value='${webtask[a].totalOut - webtask[a+1].totalOut}'></div>
                </div>
                <div class='edt' onclick='save(${a})'><img id="edit" src='saved1.jpg'></div>
                
                </div></div>
                </td></tr>`;
createe[0].innerHTML=table;

}

//saving edits......
function save(a){
  
  let webtask = JSON.parse(localStorage.getItem(`${retrived[index].book}`));
 record.style.display='block';
  edit1.style.display='none';
 let inn=document.getElementById('inn');
 let ouut=document.getElementById('ouut');
 let newin= parseInt(inn.value);
 let newout=parseInt(ouut.value);
 let lastin=webtask[a].totalIn - webtask[a+1].totalIn;
  let lastout=webtask[a].totalOut - webtask[a+1].totalOut;
  
  let newtotalout=newout-lastout;
  let newtotalin=newin-lastin;
  let newtotal=newtotalin-newtotalout;
alert(newtotal);
 webtask[a].netBalance=webtask[a].netBalance+newtotal;
  webtask[a].totalIn=webtask[a+1].totalIn+newin;
  webtask[a].totalOut=webtask[a+1].totalOut+newout;
  webtask.splice(a,1,webtask[a]);
  console.log(webtask);
  localStorage.setItem(`${retrived[index].book}`,JSON.stringify(webtask));
  
//  let netBalance= webtask[a].netBalance - (lastin +lastout);
//  let newnetBalance=netBalance+newin+newout;
//  let difference=newnetBalance-netBalance;
let b=a-1;
if(a>0){
for( b;b>=0;b--){
  webtask[b].netBalance=webtask[b].netBalance+newtotal;
 // alert( webtask[b].netBalance); alert(newtotal);
  webtask[b].totalIn=webtask[b].totalIn+newtotalin;
 // alert(webtask[b].totalIn);
  webtask[b].totalOut=webtask[b].totalOut+newtotalout;
 // alert(webtask[b].totalOut);

  webtask.splice(b,1,webtask[b]);
 // console.log(webtask);
 }}
 localStorage.setItem(`${retrived[index].book}`,JSON.stringify(webtask));
 display();
}

}