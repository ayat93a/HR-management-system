function employee (employeeID, fullName, department, level, /*ImageURL*/ ) {
this.employeeID = employeeID ;
this.fullName = fullName ;
this.department = department ;
this.level = level ;
this.salary = 0 ;
}

const ghazi = new employee (1000 ,"Ghazi Samer", "Administration" ,"senior" );
const lana = new employee (1001, 'Lana Ali', 'Finance', 'senior') ;
const tamara = new employee (1002,	'Tamara Ayoub', 'Marketing' ,'senior');
const safi = new employee (1003,'Safi Walid','Administration',	'mid-senior');
const omar = new employee (1004,'Omar Zaid','Development',	'senior');
const rana = new employee (1005,'Rana Saleh','Development','junior');
const hadi = new employee (1006,'Hadi Ahmad','Finance','mid-senior');

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

employee.prototype.render = function () {
    `${this.fullName}.payment()`;
document.write(`${this.fullName} net sallary is ${this.salary} <br>`);
}
ghazi.payment ();
lana.payment ();
tamara.payment ();
safi.payment ();
omar.payment ();
rana.payment ();
hadi.payment ();
ghazi.render () ;
lana.render();
tamara.render ();
safi.render();
omar.render ();
rana.render ();
hadi.render ();



/** 
ghazi.payment();
document.write(`${ghazi.fullName} net sallary is ${ghazi.salary}`);

lana.payment();
document.write(`${lana.fullName} net sallary is  ${lana.salary}`);
  
tamara.payment();
document.write(`${tamara.fullName} net sallary is  ${tamara.salary}`);

safi.payment();
document.write(`${safi.fullName} net sallary is  ${safi.salary}`);

omar.payment();
document.write(`${omar.fullName} net sallary is  ${omar.salary}`);

rana.payment();
document.write(`${rana.fullName} net sallary is  ${rana.salary}`);

hadi.payment();
document.write(`${hadi.fullName} net sallary is  ${hadi.salary}`);*/