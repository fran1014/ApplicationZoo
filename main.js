

const section = document.querySelector('.flex');

function printAnimals(pList, pDom) {
  pList.forEach(animal => printOneAnimal(animal, pDom));
}

/*
article class="peligroso">
        <figure>
          <img
            src="https://elcoleccionistadeinstantes.es/wp-content/uploads/2020/03/Hipopotamos-Oasis-Park-Fuerteventura-Junio-2013-17.jpg"
            alt="hipopotamo">
          <figcaption>RAZA</figcaption>
        </figure>

        <p>Peso: 200kg</p>
      </article>
*/


function printOneAnimal(pAnimal, pDom) {
  const article = document.createElement('article');
  const figure = document.createElement('figure');
  const ul = document.createElement('ul');
  const img = document.createElement('img');
  const figcaption = document.createElement('figcaption');

  article.classList.add(getPeligrosity(pAnimal.peligrosidad))

  img.src = pAnimal.foto;
  img.alt = pAnimal.raza;

  figcaption.textContent = pAnimal.raza;
  figure.append(img, figcaption);

  ul.innerHTML = `<li>Peso: ${pAnimal.peso}kg</li>
                  <li class="${getPeligrosity(pAnimal.peligrosidad)}">Peligrosidad: ${pAnimal.peligrosidad}</li>`

  article.append(figure, ul);

  pDom.append(article);
}

function getPeligrosity(pNumber) {
  let peligrosity = "";
  switch (pNumber) {
    case 5:
      peligrosity = 'peligroso'
      break;
    case 4:
      peligrosity = 'cuidado'
      break;
    case 3:
      peligrosity = 'ojito'
      break;
    case 2:
      peligrosity = 'suavecito'
      break;
    case 1:
      peligrosity = 'docil'
      break;
  }

  return peligrosity
}

printAnimals(animales, section);
