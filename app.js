function employee (employeeID, fullName, department, level, /*ImageURL*/ ) {
this.employeeID = employeeID ;
this.fullName = fullName ;
this.department = department ;
this.level = level ;
}

const ghazi = new employee (1000 ,"Ghazi Samer", "Administration" ,"Senior" );
const lana = new employee (1001, 'Lana Ali', 'Finance', 'Senior') ;
const tamara = new employee (1002,	'Tamara Ayoub', 'Marketing' ,'Senior');
const safi = new employee (1003,'Safi Walid','Administration',	'Mid-Senior');
const omar = new employee (1004,'Omar Zaid','Development',	'Senior');
const rana = new employee (1005,'Rana Saleh','Development','Junior');
const hadi = new employee (1006,'Hadi Ahmad','Finance','Mid-Senio');

employee.prototype.payment = function () { 
    if (this.level = "senior") {
        let max = 2000 
        let min = 1500 
        this.salary =  (( Math.random () * (max-min) + min ))
    }  else if (this.level = "mid-senior") {
        let max = 1500
        let min = 2000
        this.salary = (( Math.random () * (max-min) + min ))
    } else {
        let max = 1000
        let min = 500
        this.salary =  (( Math.random () * (max-min) + min ))
    }
  document.write ( this.salary) 
}

let section = document.getElementById ("my section");
let divEl = document.createElement ('div');
section.appendChild (divEl);
let ulEl = document.createElement ("ul");
divEl.appendChild(ulEl);
let liEl = document.createElement ("li");
ulEl.appendChild (liEl);
 

function newFunction() {
    for (var i = 0; i < 7; i++);
    console.log (liEl.innerHTML= `${this.fullName} sallary is ` +
     this.fullName.payment())
}
