// Задание 4
// Счетчик состоит из спана и кнопок, которые должны
//  увеличивать и уменьшать значение счетчика на 1.
// Создай переменную counterValue в которой будет 
// хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения 
// и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций 
// и обновление интерфейса

{/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */}

let counterValue = document.querySelector('#value')
let minus = document.querySelector(".minus")
let plus = document.querySelector(".plus")
let value = +counterValue.textContent
counterValue.style.backgroundColor = 'yellow'
counterValue.style.fontSize = '30px'
minus.style.backgroundColor = 'red'
plus.style.backgroundColor = 'red'
function increment (){
plus.addEventListener('click', () => {
  value +=1 
  counterValue.textContent = value
})
}
increment ()
function decrement (){
  minus.addEventListener('click', () => {
    value -=1 
    counterValue.textContent = value
  })
  }
  decrement ()


console.log(counterValue, minus, plus, value)