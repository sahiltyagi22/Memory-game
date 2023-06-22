const imageArray = [
 
    {
        img : 'burger',
        src :'images/cheeseburger.png'
    },
    {
        img : 'fries',
        src :'images/fries.png'
    },
    {
        img : 'hotdog',
        src :'images/hotdog.png'
    },
    {
        img : 'ice-cream',
        src :'images/ice-cream.png'
    },
    {
        img : 'milkshake',
        src :'images/milkshake.png'
    },
    {
        img : 'pizza',
        src :'images/pizza.png'
    },
    {
        img : 'burger',
        src :'images/cheeseburger.png'
    },
    {
        img : 'fries',
        src :'images/fries.png'
    },
    {
        img : 'hotdog',
        src :'images/hotdog.png'
    },
    {
        img : 'ice-cream',
        src :'images/ice-cream.png'
    },
    {
        img : 'milkshake',
        src :'images/milkshake.png'
    },
    {
        img : 'pizza',
        src :'images/pizza.png'
    },
]
 let randomImages = imageArray.sort(()=> 0.5 - Math.random())
 
 let gridDisplay = document.querySelector('#grid')

 let result = document.querySelector("#result")

 let clickImg =[]

 let clickImgId = []

 let cardsWon = []

 let option1 = clickImgId[0]

 let option2 = clickImgId[1]



 function displayBoard (){
    for(let i =0 ; i<imageArray.length; i++){
        const card =document.createElement('img')
        
        card.setAttribute('src' , 'images/blank.png')
        card.setAttribute('data-id' , i)
        gridDisplay.append(card)
        card.addEventListener('click' , flipCard)
        
    }
 }displayBoard()




function checkMatch(){
    const cards = document.querySelectorAll('img')

//   if(clickImgId[0] == clickImgId[1]){
//     alert("you have clicked the same image")

//   }

    if(clickImg[0]== clickImg[1]){
        alert("you found a match")
        cards[clickImgId[0]].setAttribute('src' , 'images/white.png')
        cards[clickImgId[1]].setAttribute('src' , 'images/white.png')
        cards[clickImgId[0]].removeEventListener('click' , flipCard)
        cards[clickImgId[1]].removeEventListener('click' , flipCard)
        cardsWon.push(clickImg)

    }else{
        cards[clickImgId[0]].setAttribute('src' , 'images/blank.png')
        cards[clickImgId[1]].setAttribute('src' , 'images/blank.png')
        alert("sorry try again")
    }

    result.innerHTML = cardsWon.length

    clickImg=[]
    clickImgId=[]

    if(cardsWon.length == (imageArray.length/2)){
        result.innerHTML = "HEY YOU WON"
    }
}



 function flipCard(){

  const dataId=this.getAttribute('data-id')
  clickImg.push(imageArray[dataId].img)
  this.setAttribute('src' ,imageArray[dataId].src)
  clickImgId.push(dataId)
  

  console.log(clickImgId);
  
 if(clickImg.length===2){
    setTimeout(checkMatch , 500)
    
 }
 }