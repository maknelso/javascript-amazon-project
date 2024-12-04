const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => { // event we want to listen for ('load')
    console.log(xhr.response);
}); 

xhr.open('GET', 'https://supersimplebackend.dev/hello');
xhr.send(); // async - does not wait for it to finish and immediately goes to the next line
