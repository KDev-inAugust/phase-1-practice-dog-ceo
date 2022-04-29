console.log('%c HI', 'color: firebrick')
const h = document.querySelector('h1');



//---------------Challenge 1---------------------

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(res=> res.json())
.then(
    data=> { 
        data.message.forEach(element => renderDogPhoto(element));
    }
)


function renderDogPhoto(index){
    let img = document.createElement('img');
    img.style = "height:300px";
    let photoContainer = document.getElementById("dog-image-container");
    let newPhoto =  photoContainer.appendChild(img);
    newPhoto.src=index;
}

//---------------------Challenge 2 and 4 ---------------------------
let option = document.getElementById('breed-dropdown');
let breedContainer = document.getElementById("dog-breeds");
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

fetch('https://dog.ceo/api/breeds/list/all')
.then(res => res.json())
.then(
    data=> { 
        for (let keyName in data.message )
        {renderDogBreed(keyName);}
    }
)

function renderDogBreed(index){
    option.addEventListener('change', ()=>{
    let value = option.value;
    
    if (index[0] === value){
    let li = document.createElement('li');
    
    let listItem =  breedContainer.appendChild(li);
    listItem.innerText=index;}
    })
    }
     




//-------------------Challenge 3--------------------------

const listItem = document.querySelector('ul');
let listThings = listItem.childNodes

listThings.forEach(
    addEventListener('click',(e)=>{ e.target.style="color: red";})
)

//------------------Challenge 4---------------------------

// const breedUrl = 'https://dog.ceo/api/breeds/list/all';

// fetch('https://dog.ceo/api/breeds/list/all')
// .then(res => res.json())
// .then(
//     data=> { 
//         for (let keyName in data.message )
//         {renderDogBreed(keyName);}
//     }
// )

// function renderDogBreed(index){
//     let li = document.createElement('li');
//     let breedContainer = document.getElementById("dog-breeds");
//     let listItem =  breedContainer.appendChild(li);
//     listItem.innerText=index;
// }




