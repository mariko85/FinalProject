let burger = document.getElementById('burger')
let navigation =document.getElementById('navigation')
burger.addEventListener('click', function(){
if (navigation.classList.contains('activeNavigation')){
    navigation.classList.remove('activeNavigation')
    burger.innerHTML='<i class="fa-solid fa-bars"></i> '
}
else {
    navigation.classList.add('activeNavigation')
    burger.innerHTML ='<i class="fa-regular fa-circle-xmark"></i>'
}

})