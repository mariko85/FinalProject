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

let data = [
    {
      id: 1,
      title:'title1',
      imgUrl:'https://en.getforsa.com/wp-content/uploads/2023/02/16455577799avf4LJrrO.png'
    } ,
    {
      id: 2,
      title:'title2',
      imgUrl:'https://www.focusmanifesto.com/wp-content/uploads/2023/07/10-Beginner-Video-Tips-Thumbnail.jpg' ,
    },
    {
      id: 3,
      title:'title3',
      imgUrl:'https://i.pinimg.com/736x/1e/fa/8d/1efa8dc31b74b6074ac60f77603851c1.jpg'
  
    }
  ]



let sliderconteiner=document.getElementById('slider')
let arrowleftBt =document.getElementById('arrow-left')
let arrowrightBt =document.getElementById('arrow-right')
let sliderIndex=0

function createImage(item){
  sliderconteiner.style.backgroundImage=`url(${item.imgUrl})`
  sliderconteiner.style.backgroundRepeat='no-repeat'
  sliderconteiner.style.backgroundSize='cover'
}



function createH2tag(item){
  let H2tag=document.createElement('h2')
   H2tag.textContent =item.title
   H2tag.classList.add('slider-title')
   return H2tag

}


function setSlider(){
  sliderconteiner.innerHTML=''
  createImage(data[sliderIndex])
  let title =createH2tag(data[sliderIndex])
  let dots=createDots()
  sliderconteiner.appendChild(title)
  sliderconteiner.appendChild(dots)
  
  let dotElements=dots.querySelectorAll('.dot')
  dotElements[sliderIndex].classList.add('active')



}



function arrowleft(){
  if(sliderIndex==0){
      sliderIndex=data.length-1
  }
  else{
      sliderIndex --
  }
  setSlider()
}



function arrowright(){
  if(sliderIndex === data.length-1){
      sliderIndex=0
  }
  else{
      sliderIndex ++
  }
  setSlider()
}



arrowrightBt.addEventListener('click',arrowright)
arrowleftBt.addEventListener('click',arrowleft)

// setInterval(() => {arrowright()
  
// }, 2000);



function createDots() {
  let dots =document.createElement('div')
  dots.classList.add('dots')
  data.forEach((item)=>{
   let dot=document.createElement('div')
   dot.classList.add('dot')
   dot.setAttribute('data-id', item.id-1)
   dots.onclick = function(event){
    let id = event.target.getAttribute('data-id')
    sliderIndex =id
    setSlider()

}
dots.appendChild(dot)

  })

  return dots




}


setSlider()




// let courseButton = document.querySelectorAll('.registration-course-button')
// let registrationform = document.getElementById('registration-form')
// let courseAbout =document.getElementById('course_about')


// console.log(courseButton)

// courseButton.forEach(item => {
//     item.addEventListener('click',function(){
//         registrationform.classList.add('activeRF')
//         courseAbout.classList.add('courseAboutActivi')
    
// });




// })





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

  .catch (function(){
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
  


