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

 function displayBoard (){
    for(let i =0 ; i<10; i++){
        const card =document.createElement('img')
        
        card.setAttribute('src' , 'images/blank.png')
        card.setAttribute('data-id' , i)
        gridDisplay.append(card)
        
    }
 }displayBoard()