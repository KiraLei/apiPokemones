const content = document.querySelector("div");
//console.log(content)
fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((response) => response.json())
  .then((datos) => {
    // console.log(datos.results);
    datos.results.forEach((e) => {
      //console.log(e.name);
      fetch(e.url)
        .then((data) => {
          return data.json(); // hay dos formas sin return el simplificado o con return
        })
        .then((e) => {
          const img = e.sprites.front_default;
          const name = e.name.charAt(0).toUpperCase()+ e.name.slice(1);
          const type =e.types[0].type.name.charAt(0).toUpperCase()+e.types[0].type.name.slice(1);
          const experience= e.base_experience;
          const abilities =e.abilities[0].ability.name.charAt(0).toUpperCase()+ e.abilities[0].ability.name.slice(1);
         // console.log(type);
          let imagen = document.createElement("img");
          let typ = document.createElement("p");
          let p = document.createElement("p");
          let exp = document.createElement("p");
          let abi = document.createElement("p");
        
          let div = document.createElement("div");
          div.className='card';
          imagen.src = img;
          div.append( imagen, p,typ, exp,abi);
          content.append(div);
          //console.log(img)

          p.textContent = 'Nombre: ' + name;
          typ.textContent ='Tipo: '+ type;
          exp.textContent ='Experiencia: '+ experience;
          abi.textContent ='Habilidad: '+ abilities;
          // content.appendChild(p);
          // console.log(e.url);
        });
    });
  });
