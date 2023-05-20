
   let email=sessionStorage.getItem('email');
   let retrived=JSON.parse(localStorage.getItem(email));
   document.getElementById('user-name').innerHTML=`${retrived[0].Name}`;
