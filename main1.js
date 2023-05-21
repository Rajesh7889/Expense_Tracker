{
    let email=sessionStorage.getItem('email');
    let index=sessionStorage.getItem('book');
   let retrived=JSON.parse(localStorage.getItem(email));
   document.getElementById('book-name').innerHTML=`${retrived[index].book}`;
}