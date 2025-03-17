

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
            let divliimage=document.createElement('div')
            divliimage.appendChild(li)
            divliimage.appendChild(image)
            fragment.appendChild(divliimage)

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





let courseButton = document.querySelectorAll('.registration-course-button')
let registrationform = document.getElementById('registration-form')
let courseAbout =document.getElementById('course_about')
let  closeButton=document.getElementById('closeButton')



console.log(courseButton)

courseButton.forEach(item=> {
 item.addEventListener('click',function(){
      registrationform.classList.add('activeRF')
      courseAbout.classList.add('courseAboutActivi')
 
      closeButton.addEventListener('click' , function(){
        if (registrationform.classList.contains('activeRF')  )
          registrationform.classList.remove('activeRF')
        courseAbout.classList.remove('courseAboutActivi')
          
      })

  
})


})



//registraciis validacia
document.getElementById('registration').addEventListener('submit',function(event){
  event.preventDefault()
  let errors={
  
  
  }
  
  let form = event.target
  let firstName =document.getElementById('firstName').value
  if(firstName.length <2 || firstName ==''){
    errors.firstName="დაწერეთ მომხმარებლის სახელი"
  }
  
  
  let lastName =document.getElementById('lastName').value
  if(lastName.length <2 || lastName ==''){
    errors.lastName="დაწერეთ მომხმარებლის გვარი"
  }
  
  let idNumber =document.getElementById('idNumber').value
  if(idNumber.length <11 || idNumber >11){
    errors.idNumber="დაწერეთ მომხმარებლის ID"
  }
  
  let phone =document.getElementById('phone').value
  if(phone.length <9 || phone >9 || phone == ''){
    errors.phone="დაწერეთ მომხმარებლის ტელ."
  }
  
  
  let email =document.getElementById('email').value
  if(email.length <2 || email== ''){
    errors.email="დაწერეთ მომხმარებლის მეილი"
  }
  
  
  let cours= false
  form.querySelectorAll('[name="radio-course"]').forEach(element => {
  
    if(element.checked){
      cours =true
    }
    
  })
  if(!cours){
    errors.cours = 'select your age'
  }
  
  for(let item in errors){
    let errorSpan=document.getElementById('error_'+item)
    if(errorSpan){
      errorSpan.innerText=errors[item]
    }
  }
  
  // form.querySelectorAll('.errorText').forEach(item =>{
  //   item.textContent=''
  
  // })
  
  if(Object.keys(errors).length ==0){
    form.submit()
  }
  
  })
  