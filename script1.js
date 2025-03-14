


// sliderConteiner

let data1 = [
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

let sliderConteiner=document.getElementById('slider')
let arrowLeftBtn=document.getElementById('arrow-left')
let arrowRightBtn=document.getElementById('arrow-right')
let sliderIndex=0

function createImg(item){

  sliderConteiner.style.backgroundImage = `url("${item.imgUrl}")`

  sliderConteiner.style.backgroundRepeat ='no-repeat' 
  sliderConteiner.style.backgroundSize = 'cover'

}
function createH2teg(item){
let h2tag =document.createElement('h2')
h2tag.textContent =item.title
h2tag.classList.add('slider-title')
return h2tag

}

function setslider(){
  sliderConteiner.innerHTML=" ";
  createImg(data1[sliderIndex])
  let title = createH2teg(data1[sliderIndex])
  let dots =createDots()

  sliderConteiner.appendChild(title)
  sliderConteiner.appendChild(dots)

  let  dotelement=dots.querySelectorAll('.dot')
   dotelement[sliderIndex].classList.add('active')
}




function arrowLeft(){
  if (sliderIndex===0){
    sliderIndex=data1.length-1
  }else{

    sliderIndex --
  }

  setslider()

}

function arrowRight(){
  if (sliderIndex === data1.length-1 ){
    sliderIndex = 0
  }
  else{
    sliderIndex ++

  }
  setslider()

}


arrowLeftBtn.addEventListener('click',arrowLeft)

arrowRightBtn.addEventListener('click', arrowRight)



function createDots(){
  let dots =document.createElement('div')
  dots.classList.add('dots')
  data1.forEach((element) =>{

    let dot=document.createElement('div')
    dot.classList.add('dot')
    dot.setAttribute('data1-id', element.id-1)
    dot.onclick =function(event){
      let id = event.target.getAttribute('data1-id')
      sliderIndex =id
      setslider()
    }
    dots.appendChild(dot)


  })
  return dots
}





setslider()




// registrationform



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


