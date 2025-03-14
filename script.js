

let navigation = document.getElementById('navigation')
let burger = document.getElementById('burger')

burger.addEventListener('click', function(){
if (navigation.classList.contains('activeNavigation')){
    //ნავიგაციას აქრობს
    navigation.classList.remove('activeNavigation')
    //ბურგერ მენიუდ გადააქცევს x
    burger.innerHTML= '<i class="fa-solid fa-bars"></i> '
}

else {
    //გამოიტანს ნავიგაციის მენიუს
    navigation.classList.add('activeNavigation')
    //გამოაჩენს x
    burger.innerHTML ='<i class="fas fa-times"></i>'
}

})








// serveridan wamogeba inforamciis
let currentPage =1
let totalPages

function getUsers(page ){
    fetch('https://reqres.in/api/users?page=' +page, {
        method:'GET'
    })

    .then (function(response){
        if(response.status !== 200){
            throw response.status
        }
        return response.json()

    })

    .then (function(responseData){
        let fragment =document.createDocumentFragment()
        totalPages=responseData.total_pages
         
        responseData.data.forEach(function(item){
            let li= document.createElement('li')
            li.textContent=item.first_name + " " + item.last_name ;
            let image =document.createElement('img')
            image.src=item.avatar
            fragment.appendChild(li)
            fragment.appendChild(image)

        })

        document.getElementById('ul_list').innerHTML = "";
       document.getElementById('ul_list').appendChild(fragment)

    })

  . catch (function(){
    let conteiner= document.getElementById('conteiner')
        let p = document.createElement('p')
        p.textContent='error'
        conteiner.appendChild(p)


  }) 
}




  document.getElementById('loadprev').addEventListener('click',function(){
   if(currentPage == 1){
      return 
    }
    currentPage -=1
    getUsers (currentPage)


  })

  
  document.getElementById('loadnext').addEventListener('click',function(){
   if  ( currentPage == totalPages){
      return 
    }
    currentPage +=1
    getUsers (currentPage)


  })

  getUsers(currentPage)
  




// acoreioni

let accordion = document.querySelectorAll('.accordion-conteiner')
accordion.forEach( item => {
  item.addEventListener('click',function(){
     this.classList.toggle('active')



  })

})


// registracia

let courseButton = document.querySelectorAll('.registration-course-button')
let registrationform = document.getElementById('registration-form')
let courseAbout =document.getElementById('course_about')


console.log(courseButton)

courseButton.forEach(item => {
    item.addEventListener('click',function(){
        registrationform.classList.add('activeRF')
        courseAbout.classList.add('courseAboutActivi')
    
});




})







