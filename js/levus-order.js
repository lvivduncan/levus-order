// 9-12-2020
{
    const header = document.querySelectorAll('.levus-order-header > div'),
          items = document.querySelectorAll('.levus-order-items > div');

    header.forEach(head => {
        head.addEventListener('click', function(){

            // зберігаємо значення поточної позиції
            const current = this;

            // прибираємо усі класи ...
            header.forEach(head => head.className = '');

            // ... крім поточного. поточному присвоюємо
            current.className = 'active';

            // перебираємо елементи
            items.forEach(item => {
                
                // порівнюємо елемент на співпадіння і видаляємо класс, який приховує 
                if(item.dataset.item.includes(current.dataset.head)){
                    item.className = '';
                } else{
                    item.className = 'hide';
                }

            });
        });
    });
}