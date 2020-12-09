// 9-12-2020
const header = document.querySelectorAll('.levus-order-header > div');
const items = document.querySelectorAll('.levus-order-items > div');

header.forEach(head => {
    head.addEventListener('click', function(){
        const current = this;
        header.forEach(head => head.className = '');
        current.className = 'active';

        // console.log(current.dataset.head)

        items.forEach(item => {

            if(item.dataset.item.includes(current.dataset.head)){
                item.className = '';
            } else{
                item.className = 'hide';
            }

        });
    });
});