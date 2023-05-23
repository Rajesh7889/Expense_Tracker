
   {
      let email=sessionStorage.getItem('email');
   let retrived=JSON.parse(localStorage.getItem(email));
   document.getElementById('user-name').innerHTML=`${retrived[0].Name}`;
   let title=document.getElementById('text');
   let btn=document.getElementById('button');
   let btn1=document.getElementById('button1');
   function cr(){
      title.style.visibility='visible';
      btn1.style.display='block';
      btn.style.display='none';
      
   }
   function create(){
     
      title.style.visibility='hidden';
      btn1.style.display='none';
      btn.style.display='block';
      let rcrds={
          book:title.value,
            }
      retrived.push(rcrds);
      localStorage.setItem(`${email}`,JSON.stringify(retrived));
      title.value='';
      displaybooks();
      
   }

   function displaybooks(){
      let create=document.querySelectorAll('#book-containor');
      let table= `<tr><th></th><tr>`;
      create[0].innerHTML=table;
      for(let i=1;i<=retrived.length;i++){
      table+=`<tr><td> <div id='book-box'>
                      <div id="books"><div id='bok' onclick="details(${i})">${retrived[i].book}</div>
                     
                      <div class='edt' onclick='deletee(${i})'><img id='delete' src='delete.jpg'></div>
                      </div></div>
                      </td></tr>`;
                    //  <div class='edt' onclick='edit(${i})'><img id="edit" src='edit.jpg'></div>
      create[0].innerHTML=table;
      }
   }
   function deletee(a){
       let opt =confirm("this action can't be undo");
       if(opt){
         retrived.splice(a,1);
      localStorage.setItem(`${email}`,JSON.stringify(retrived));
      displaybooks();
       }else {
      return 0;
       }
   }
   function details(a){
      sessionStorage.setItem('book',`${a}`);
      window.location.href='book.html'; 
    }

}
   
