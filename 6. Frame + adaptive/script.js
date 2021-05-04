function open() {
    document.querySelector('html').classList.add('lock');
    document.querySelector('nav').classList.add('active');
    document.querySelector('.home').classList.add('lock');
    document.querySelector('.nav_lang').classList.add('active');
}

function close() {
    document.querySelector('nav').classList.remove('active');
    document.querySelector('.nav_lang').classList.remove('active');
    document.querySelector('html').classList.remove('lock');
    document.querySelector('.home').classList.remove('lock');
}

document.querySelector('.menu').addEventListener('click', open);      
document.querySelector('.menu__close').addEventListener('click', close);
document.querySelector('.nav_item1').addEventListener('click', close);

var hrefs = document.querySelectorAll('.nav_item'),
    index, href;
for (index = 0; index < hrefs.length; index++) {
    href = hrefs[index];
    href.addEventListener('click', close);
}
