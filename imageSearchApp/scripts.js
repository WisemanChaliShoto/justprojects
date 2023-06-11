const accessKey = 'QBYB-gPotZfIw0C1W4G0GbDl_qd9W1QhBuT_pXsDCV8';

const formEl = document.querySelector('form');
const inputEl = document.getElementById('search-input');
const searchResults = document.querySelector('.search-results');
const showMore = document.getElementById('show-more-button');

 let inputData = '';
 let page = 1;

 const searchImages = async () => {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`

    const response = await fetch(url)
    const data = await response.json()

    const results = data.results

    if (page === 1 )
 }
