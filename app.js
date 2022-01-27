function employee( fullName, department, level, employeeID, ImageURL) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.salary = 0;
    this.employeeID = 0;
    this.ImageURL = 0
}
/*object*/
const ghazi = new employee( "Ghazi Samer", "Administration", "senior",);
const lana = new employee( 'Lana Ali', 'Finance', 'senior');
const tamara = new employee('Tamara Ayoub', 'Marketing', 'senior');
const safi = new employee('Safi Walid', 'Administration', 'mid-senior');
const omar = new employee( 'Omar Zaid', 'Development', 'senior');
const rana = new employee( 'Rana Saleh', 'Development', 'junior');
const hadi = new employee( 'Hadi Ahmad', 'Finance', 'mid-senior');

/*Uniqe unique four digits employee id number.*/
employee.prototype.createId = function () {
    this.employeeID = Math.floor(1000 + Math.random() * 9000);
    return this.employeeID;
}
this.employeeID = [ghazi.createId(), lana.createId(), tamara.createId(),
safi.createId(), omar.createId(), rana.createId(), hadi.createId()]
 //console.log(this.employeeID);
 
 //EventListener
let employeeform = document.getElementById('employeeInfo');
employeeform.addEventListener("submit", newEmployeeInfo);

function newEmployeeInfo (event) {
event.preventDefault() ;
let fullName=event.target.fullName.value;
let department=event.target.department.value;
let level=event.target.level.value;
let ImageURL=event.target.ImageUrl.value;
return (fullName,department,level,ImageURL); 
}
//salary
 employee.prototype.payment = function () {
     if (this.level == "senior") {
         let max = 2000 ;
         let min = 1500 ;
         this.salary = ((( Math.random () * (max-min) + min )) * .925) ; 
         // net salary =  the salary * .925
     }  else if (this.level == "mid-senior") {
         let max = 1500;
         let min = 2000;
         this.salary = ((( Math.random () * (max-min) + min )) *.925 );
     } else {
         let max = 1000 ;
         let min = 500;
         this.salary =  ((( Math.random () * (max-min) + min )) *.925 );
     }
 }
this.salary = [ghazi.payment (),lana.payment () ,tamara.payment () ,
    safi.payment () ,omar.payment () ,rana.payment () ,hadi.payment ()]

//console.log (ghazi)
 /*
 ghazi.payment ();
 lana.payment ();
 tamara.payment ();
 safi.payment ();
 omar.payment ();
 rana.payment ();
 hadi.payment ();*/
employee.prototype.render = function () {
     `${this.fullName}.payment()`;
 document.write(`${this.fullName} net sallary is ${this.salary} <br>`);
 }
 /*ghazi.render () ;
 lana.render();
 tamara.render ();
 safi.render();
 omar.render ();
 rana.render ();
 hadi.render ();*/

 let divElG=document.getElementById("ghazi")
 let pElG=document.createElement('p');
divElG.appendChild(pElG);
pElG.textContent = ghazi.render () ;
