// 9-12-2020
"use strict";
{
    var header = document.querySelectorAll('.levus-order-header > div'),
        items = document.querySelectorAll('.levus-order-items > div');

    header.forEach(function (head) {
        head.addEventListener('click', function () {
            
        // зберігаємо значення поточної позиції
        var current = this; 
        
        // прибираємо усі класи ...
        header.forEach(function (head) {
            return head.className = '';
        }); 
        
        // ... крім поточного. поточному присвоюємо
        current.className = 'active'; 
        
            // перебираємо елементи
            items.forEach(function (item) {

                // порівнюємо елемент на співпадіння і видаляємо класс, який приховує 
                if (item.dataset.item.includes(current.dataset.head)) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });
}