let openModalBtn = document.getElementById('modalSearch-open-Btn')
let modalBtn = document.getElementById('modalSearch')
let closeModalBtn = document.getElementById('modalSearch-close-btn');


openModalBtn.addEventListener('click', function(){
    modalBtn.classList.add('show')
});

closeModalBtn.addEventListener('click', function()
{
    modalBtn.classList.remove('show')

});


let openModalBtnlogin = document.getElementById('modalLogin-open-Btn')
let modalBtnlogin = document.getElementById('modalLogin')
let closeModalBtnlogin= document.getElementById('modalLogin-close-btn');


openModalBtnlogin.addEventListener('click', function(){
    modalBtnlogin.classList.add('show-login')
});

closeModalBtnlogin.addEventListener('click', function()
{
    modalBtnlogin.classList.remove('show-login')

});