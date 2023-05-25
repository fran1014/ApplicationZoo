

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
  const p = document.createElement('p');
  const img = document.createElement('img');
  const figcaption = document.createElement('figcaption');

  img.src = pAnimal.foto;
  img.alt = pAnimal.raza;

  figcaption.textContent = pAnimal.raza;
  figure.append(img, figcaption);

  p.textContent = `Peso: ${pAnimal.peso}`

  article.append(figure, p);

  pDom.append(article);
}

printAnimals(animales, section);
