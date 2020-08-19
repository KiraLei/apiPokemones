
const content = document.querySelector('div');
const section = document.querySelector('section');

//console.log(content)

fetch('https://pokeapi.co/api/v2/pokemon/')
.then((response)=>{  return response.json() })
.then((datos)=> {
   console.log(datos.results);
    newpokemon=[];
    imgPokemon=[];
    const pokemon = datos.results.forEach((e)=>{
       // console.log(e.name);

        let p = document.createElement('p');
        let li = document.createElement('li');

        p.textContent=e.name;
        content.appendChild(p);
            // console.log(e.url);  

   })
    
    const imgPoke = datos.results.forEach((e)=>{            
        fetch(e.url)
        .then((data)=> {return data.json()})
        .then((imgdata)=>{
           const img = imgdata.sprites.front_default;
           //fetch(img.)

           let imagen = document.createElement('img');

           imagen.src= img;
           section.appendChild(imagen);
           console.log(img)


        })
            
   })
 
  

    
    
   
});


//content.innerHTML =  `${datos}`