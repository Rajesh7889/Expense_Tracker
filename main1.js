{
    let email=sessionStorage.getItem('email');
    let index=sessionStorage.getItem('book');
   let retrived=JSON.parse(localStorage.getItem(email));
   document.getElementById('book-name').innerHTML=`${retrived[index].book}`;
   let title=document.getElementById('text');
   let in1=document.getElementById('in1');
   let in2=document.getElementById('in2');
   let out1=document.getElementById('out1');
   let out2=document.getElementById('out2');
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
   function innput1(){
    out1.disabled=false;
    title.style.visibility='hidden';
    in2.style.display='none';
    in1.style.display='block';
    let rcrds={
        book:title.value,
          }
    retrived.push(rcrds);
    localStorage.setItem(`${email}`,JSON.stringify(retrived));
    title.value='';
    displaybooks();
   }
   function outtput1(){
    in1.disabled=false;
    title.style.visibility='hidden';
    out2.style.display='none';
    out1.style.display='block';
   }
   let book_entries={
                     cash_in:0,
                     cash_out:0,
                     total:function(){
                        return (this.cash_in - this.cash_out);
                     }
                     }

}