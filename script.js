sum = document.getElementById('ptime');
d = document.getElementById('pdate')
setInterval(() =>{
   
let a;
   
     a= new Date();    
     let time; 
     let date;
     const options = { weekday: 'long',year: 'numeric',month: 'long',day: 'numeric'};

     date = a.toLocaleDateString(undefined, options);
    time = a.getHours()+" : "+a.getMinutes()+" : "+a.getSeconds();
    sum.innerHTML = time;
    d.innerHTML = date;

},1000)   