// import { fetchBreeds, fetchCatByBreed } from './cat-api';
// import Notiflix from 'notiflix';

// const breedSelect = document.querySelector('.breed-select');
// const loader = document.querySelector('.loader');
// const catInfo = document.querySelector('.cat-info');

// const container = createAndAppendElement('div', catInfo, 'cat-container');
// const catImageElement = createAndAppendElement('img', container, 'cat-image');
// const textContainer = createAndAppendElement(
//   'div',
//   container,
//   'text-container'
// );
// const breedNameElement = createAndAppendElement('h2', textContainer);
// const descriptionElement = createAndAppendElement('p', textContainer);
// const temperamentElement = createAndAppendElement('p', textContainer);

// function createAndAppendElement(tagName, parentElement, className = '') {
//   const element = document.createElement(tagName);
//   if (className) {
//     element.className = className;
//   }
//   parentElement.appendChild(element);
//   return element;
// }

// function hideElement(element) {
//   element.style.display = 'none';
// }

// function showElement(element) {
//   element.style.display = 'block';
// }

// // function hideLoader() {
// //   hideElement(loader);
// //   breedSelect.classList.remove('hidden');
// //   catInfo.classList.remove('hidden');
// // }

// // function showLoader() {
// //   loader.style.display = 'block';
// //   breedSelect.classList.add('hidden');
// //   catInfo.classList.add('hidden');
// // }

// // function hideLoaderAndDisplayCatInfo() {
// //   hideLoader();
// //   showElement(catInfo);
// // }

// function displayCatInfo(breedId) {
//   showElement(loader);

//   clearCat();

//   fetchCatByBreed(breedId)
//     .then(catData => {
//       const { url: catImageUrl, breeds } = catData;
//       const {
//         name: catBreedName,
//         description: catDescription,
//         temperament: catTemperament,
//       } = breeds[0];

//       catImageElement.src = catImageUrl;
//       breedNameElement.textContent = `${catBreedName}`;
//       descriptionElement.textContent = `${catDescription}`;
//       temperamentElement.textContent = `Temperament: ${catTemperament}`;

//       hideLoaderAndDisplayCatInfo();
//       breedSelect.classList.remove('hidden');
//     })
//     .catch(err => {
//       hideLoader();

//       // showErrorMessage();
//       Notiflix.Notify.failure(
//         'Oops! Something went wrong! Try reloading the page!'
//       );
//     });
// }

// function populateBreedOptions() {
//   showElement(loader);

//   fetchBreeds()
//     .then(breeds => {
//       breeds.forEach(breed => {
//         const option = document.createElement('option');
//         option.value = breed.id;
//         option.textContent = breed.name;
//         breedSelect.appendChild(option);
//         breedSelect.classList.remove('hidden');
//       });

//       breedSelect.classList.remove('hidden');

//       slimSelect = new SlimSelect('#breed-select', {
//         placeholder: 'Select a breed',
//       });

//       showLoader();
//       hideLoader();
//       hideLoaderAndDisplayCatInfo();
//     })

//     .catch(err => {
//       hideElement(loader);
//       breedSelect.classList.add('hidden');
//       // showErrorMessage();
//       Notiflix.Notify.failure(
//         'Oops! Something went wrong! Try reloading the page!'
//       );
//     });
// }

// populateBreedOptions();

// breedSelect.addEventListener('change', event => {
//   const selectedBreedId = event.target.value;
//   if (selectedBreedId) {
//     displayCatInfo(selectedBreedId);
//   }
// });

// function hideErrorMessage() {}

// function clearCat() {
//   catImageElement.src = '';
//   breedNameElement.textContent = '';
//   descriptionElement.textContent = '';
//   temperamentElement.textContent = '';
// }

// // function showErrorMessage() {
// //   Notiflix.Notify.failure(
// //     'Oops! Something went wrong! Try reloading the page!'
// //   );
// // }

// Notiflix.Notify.init({
//   width: '350px',
//   position: 'center-top',
//   distance: '10px',
//   fontSize: '18px',
// });

// import SlimSelect from 'slim-select';
// import Notiflix from 'notiflix';
// import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

// const breedSelect = document.querySelector('.breed-select');
// const loader = document.querySelector('.loader');
// const catInfo = document.querySelector('.cat-info');

// const container = createAndAppendElement('div', catInfo, 'cat-container');
// const catImageElement = createAndAppendElement('img', container, 'cat-image');
// const textContainer = createAndAppendElement(
//   'div',
//   container,
//   'text-container'
// );
// const breedNameElement = createAndAppendElement('h2', textContainer);
// const descriptionElement = createAndAppendElement('p', textContainer);
// const temperamentElement = createAndAppendElement('p', textContainer);

// function createAndAppendElement(tagName, parentElement, className = '') {
//   const element = document.createElement(tagName);
//   if (className) {
//     element.className = className;
//   }
//   parentElement.appendChild(element);
//   return element;
// }

// function hideElement(element) {
//   element.style.display = 'none';
// }

// function showElement(element) {
//   element.style.display = 'block';
// }

// function hideLoader() {
//   hideElement(loader);
//   breedSelect.classList.remove('hidden');
//   catInfo.classList.remove('hidden');
// }

// function showLoader() {
//   loader.style.display = 'block';
//   breedSelect.classList.add('hidden');
//   catInfo.classList.add('hidden');
// }

// function hideLoaderAndDisplayCatInfo() {
//   hideLoader();
//   showElement(catInfo);
// }

// function displayCatInfo(breedId) {
//   showLoader();

//   clearCat();

//   fetchCatByBreed(breedId)
//     .then(catData => {
//       const { url: catImageUrl, breeds } = catData;
//       const {
//         name: catBreedName,
//         description: catDescription,
//         temperament: catTemperament,
//       } = breeds[0];

//       catImageElement.src = catImageUrl;
//       breedNameElement.textContent = `${catBreedName}`;
//       descriptionElement.textContent = `${catDescription}`;
//       temperamentElement.textContent = `Temperament: ${catTemperament}`;

//       hideErrorMessage();
//       hideLoaderAndDisplayCatInfo();
//     })
//     .catch(err => {
//       hideLoader();
//       showErrorMessage();
//     });
// }

// function populateBreedOptions() {
//   showLoader();

//   fetchBreeds()
//     .then(breeds => {
//       breeds.forEach(breed => {
//         const option = document.createElement('option');
//         option.value = breed.id;
//         option.textContent = breed.name;
//         breedSelect.appendChild(option);
//       });

//       hideLoader();
//       hideErrorMessage();
//     })

//     .catch(err => {
//       hideLoader();
//       showErrorMessage;
//     });
// }

// populateBreedOptions();

// breedSelect.addEventListener('change', event => {
//   const selectedBreedId = event.target.value;
//   if (selectedBreedId) {
//     displayCatInfo(selectedBreedId);
//   }
// });

// function showErrorMessage() {
//   Notiflix.Notify.failure(
//     'Oops! Something went wrong! Try reloading the page!'
//   );
// }

// function hideErrorMessage() {}

// function clearCat() {
//   catImageElement.src = '';
//   breedNameElement.textContent = '';
//   descriptionElement.textContent = '';
//   temperamentElement.textContent = '';
// }

// Notiflix.Notify.init({
//   width: '350px',
//   position: 'center-top',
//   distance: '10px',
//   fontSize: '18px',
// });

import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');

const container = createAndAppendElement('div', catInfo, 'cat-container');
const catImageElement = createAndAppendElement('img', container, 'cat-image');
const textContainer = createAndAppendElement(
  'div',
  container,
  'text-container'
);
const breedNameElement = createAndAppendElement('h2', textContainer);
const descriptionElement = createAndAppendElement('p', textContainer);
const temperamentElement = createAndAppendElement('p', textContainer);

function createAndAppendElement(tagName, parentElement, className = '') {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  parentElement.appendChild(element);
  return element;
}

function hideElement(element) {
  element.style.display = 'none';
}

function showElement(element) {
  element.style.display = 'block';
}

function hideLoader() {
  hideElement(loader);
  breedSelect.classList.remove('hidden');
  catInfo.classList.remove('hidden');
}

function showLoader() {
  loader.style.display = 'block';
  breedSelect.classList.add('hidden');
  catInfo.classList.add('hidden');
}

function hideLoaderAndDisplayCatInfo() {
  hideLoader();
  showElement(catInfo);
}

function displayCatInfo(breedId) {
  showLoader();

  clearCat();

  fetchCatByBreed(breedId)
    .then(catData => {
      const { url: catImageUrl, breeds } = catData;
      const {
        name: catBreedName,
        description: catDescription,
        temperament: catTemperament,
      } = breeds[0];

      catImageElement.src = catImageUrl;
      breedNameElement.textContent = `${catBreedName}`;
      descriptionElement.textContent = `${catDescription}`;
      temperamentElement.textContent = `Temperament: ${catTemperament}`;

      hideErrorMessage();
      hideLoaderAndDisplayCatInfo();
    })

    .catch(err => {
      hideLoader();
      showErrorMessage();
    });
}

function populateBreedOptions() {
  showLoader();

  fetchBreeds()
    .then(breeds => {
      breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
      });

      hideLoader();
    })

    .catch(err => {
      hideLoader();
      breedSelect.classList.add('hidden');
      showErrorMessage();
    });
}

populateBreedOptions();

breedSelect.addEventListener('change', event => {
  const selectedBreedId = event.target.value;
  if (selectedBreedId) {
    displayCatInfo(selectedBreedId);
  }
});

function showErrorMessage() {
  Notiflix.Notify.failure(
    'Oops! Something went wrong! Try reloading the page!'
  );
}

function hideErrorMessage() {
  Notiflix.Notify.closeAll();
}

Notiflix.Notify.init({
  width: '350px',
  position: 'center-top',
  distance: '10px',
  fontSize: '18px',
});

function clearCat() {
  catImageElement.src = '';
  breedNameElement.textContent = '';
  descriptionElement.textContent = '';
  temperamentElement.textContent = '';
}
