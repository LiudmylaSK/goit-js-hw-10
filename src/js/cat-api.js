// // cat-api.js
import axios from 'axios';

const apiKey =
  'live_sURmKri6SjeXP6cuo9E2jgaplsGma2wJak9Pd633AyNvEIZ4ZsexcrdgZIb9chjb';
axios.defaults.headers.common['x-api-key'] = apiKey;

const API_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios.get(`${API_URL}/breeds`).then(response => response.data);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get(`${API_URL}/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0]);
}
