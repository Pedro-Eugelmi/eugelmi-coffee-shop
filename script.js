/*Header menu
---------------------------------*/

let headerOpenMenu = document.querySelector('.header-menu-open');

headerOpenMenu.addEventListener ('click', () => {
    let bg = document.querySelector('.header-open-background');
    let menu = document.querySelector('.header-open-menu');

    bg.style.display = 'block';

    menu.classList.add('active-menu');
});

let headerCloseMenu = document.querySelector('.header-open-close');

headerCloseMenu.addEventListener ('click', () => {
    let bg = document.querySelector('.header-open-background');
    let menu = document.querySelector('.header-open-menu');
    menu.classList.remove('active-menu');
    bg.style.display = 'none';
});

/*Pop up Produto
---------------------------------*/

let produto = document.querySelectorAll('.products-item');
console.log(produto);
produto.forEach((item) => {
    item.addEventListener('click',function() {
        let title = item.querySelector('span').textContent;
        console.log(title);
        let text = item.getAttribute('data-desc')
        let popup = document.querySelector('.popup-area');
        popup.style.display = 'flex';
        popup.querySelector('.popup-title').textContent = title;
        popup.querySelector('.popup-desc').textContent = text;
    });
});

document.querySelector('.close-popup').addEventListener('click', ()=> {

    document.querySelector('.popup-area').style.display = 'none';
});