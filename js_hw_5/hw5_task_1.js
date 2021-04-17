// Напиши функцию-конструктор Account, которая создает 
// объект со свойствами login и email. В prototype 
// функции-конструктора добавь метод getInfo(), который 
// выводит в консоль значения полей login и email 
// объекта который его вызвал.


//Вариант 1
function Account(login, email) {
  this.login = login;
  this.email = email;
  this.getInfo = function() {
    console.log(`Login: ${this.login}; Email: ${this.email}`)
  }}
  const mango = new Account('Mangozedog', 'mango@dog.woof')
  const poly = new Account('Poly', 'poly@mail.com'); 
console.log(mango);
console.log(poly); 
  

//Вариант 2
// function Account(login, email) {
//   this.login = login;
//   this.email = email;
//   }
// Account.prototype.getInfo = function () {
//     return `Login: ${this.login}; Email: ${this.email}`
//   };
//   const mango = new Account('Mangozedog', 'mango@dog.woof')
//   const poly = new Account('Poly', 'poly@mail.com'); 
// console.log(mango.getInfo());
// console.log(poly.getInfo()); 