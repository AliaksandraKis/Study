/*Задание 4
На счету пользователя есть 35500 кредитов, значение хранится в переменной credits (создай и присвой). Пользователь решает 
купить ремонтных дроидов, которые стоят по 3000 кредитов за штуку. Цена одного дроида хранится в переменной pricePerDroid 
(создай и присвой). При посещении страницы, используя prompt, необходимо спросить количество дроидов которые пользователь 
хочет купить и сохранить в переменную.
Напиши скрипт который: Если в prompt была нажата кнопка Cancel, выводит в консоль сообщение 'Отменено пользователем!'. 
В противном случае, рассчитывает общую цену заказа и сохраняет в переменной totalPrice. Проверяет сможет ли пользователь 
оплатить заказ: если сумма к оплате превышает количество кредитов на счету, выводи в консоль сообщение 'Недостаточно 
средств на счету!'. в противном случае необходимо посчитать остаток кредитов на счету и вывести сообщение 'Вы купили [число] 
дроидов, на счету осталось [число] кредитов.'.*/


let credits = 35500;
let pricePerDroid = 3000;
let message = prompt ('Сколько ремонтных дроидов хотите купить?')
let totalPrice = message * pricePerDroid;
let ost = credits - totalPrice;
if(message == null){
    console.log('Отменено пользователем!')
    }
else if (credits < totalPrice ) {
    console.log( 'Недостаточно средств на счету!')
}
else if (totalPrice < credits) {console.log (`Вы купили ${message} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
}