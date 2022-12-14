function appendLmageElem(keyword, index){
    const imgElem = document.createElement('img');
    imgElem.src =  `https://source.upsplash.com/400*225/?${keyword}&sig=${index} `;  

    const galleryElem = document.querySelector('.gallery');
    galleryElem.appendChild(imgElem);
}
function remove() {
    const galleryElem = document.querySelector('.gallery');
    galleryElem.innerHTML = '';
}

function searchPhoto(event) {
    const keyword = event.target.value;

    if (event.key === 'Enter' && keyword !== ''){
        remove();

        for (let i =1 ;  i <= 10 ; i++) {
            appendLmageElem('keyword', i);
        }
    }
}

function run() {
    
    const inputElem = document.querySelector('input');
    inputElem.addEventListener('keydown', searchPhoto);
}


run();
