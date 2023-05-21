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
   function innput(){
    out1.disabled=true;
    title.style.visibility='visible';
    in2.style.display='block';
    in1.style.display='none';
   }
   function outtput(){
    in1.disabled=true;
    title.style.visibility='visible';
    out2.style.display='block';
    out1.style.display='none';
   
   }
   function innput1(a){
    out1.disabled=false;
    title.style.visibility='hidden';
    in2.style.display='none';
    in1.style.display='block';
    saving(a);
    display();
   }
   function outtput1(a){
    in1.disabled=false;
    title.style.visibility='hidden';
    out2.style.display='none';
    out1.style.display='block';
    saving(a);
    display();
   }
   
   function saving(a){
    let total={
        netBalance:0,
        totalIn:0,
        totalOut:0,
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
              console.log(title.value);
              if(a){
                 total.netBalance= parseInt(total.netBalance)+parseInt(title.value);
                 total.totalIn=parseInt(total.totalIn)+parseInt(title.value);
              }else {
                total.netBalance= parseInt(total.netBalance)-parseInt(title.value);
                total.totalOut=parseInt(total.totalOut)+parseInt(title.value);
              }
              taskobj.unshift(total);
         localStorage.setItem(`${retrived[index].book}`,JSON.stringify(taskobj));       
   }
   
   function display(){
    let webtask = JSON.parse(localStorage.getItem(`${retrived[index].book}`));
    net.innerHTML=webtask[0].netBalance;
    netin.innerHTML=webtask[0].totalIn;
    netout.innerHTML=webtask[0].totalOut;
    let create=document.querySelectorAll('#book-record');
    let table= `<tr><th></th><tr>`;
    create[0].innerHTML=table;
    for(let i=1;i<=webtask.length;i++){
    table+=`<tr><td> <div id='book-box'>
                    <div id="books"><div id='bok' onclick="edit(${i})"> Net Balance:${webtask[i].netBalance}</div>
                    <div class='edt' onclick='edit(${i})'><img id="edit" src='edit.jpg'></div>
                    <div class='edt' onclick='deletee(${i})'><img id='delete' src='delete.jpg'></div>
                    </div></div>
                    </td></tr>`;
    create[0].innerHTML=table;
    }
}}