document.getElementById('InschrijfForm').addEventListener('submit', function(e){
e.preventDefault();
   
let name = document.getElementById("name").value;
    console.log(name);
    
let studentnummer = document.getElementById('studentnummer').value;
    console.log(studentnummer);
    
let date = document.getElementById('date').value;
    console.log(date);

let email = document.getElementById('email').value;
    console.log(email);
   
let klas = document.getElementById('klas').value;
    console.log(klas);
    
let pwd = document.getElementById('pwd').value;
    console.log(pwd);

    
});
