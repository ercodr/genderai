const display = document.getElementById('scr-txt');
const nameField = document.getElementById('search-input');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    guess();

});

async function guess(params) {
    fetch(`https://api.genderize.io?name=${nameField.value}`)

    .then( res => res.json())

    .then( value => {

        if( parseFloat(value.probability) <= 0.6){
            display.textContent = `Haven't heard of ${nameField.value}, Chances you're either a "male" or a "female" is ${ parseFloat(value.probability)*100 }%`    
        } else {
            display.textContent = `Chances you're a ${value.gender} is ${ parseFloat(value.probability)*100 }%`
        } 

    })
    
    .catch( error => {
        
        display.innerHTML = `${error} <br><br> <h6>check your internet connection!</h6>`;
    
    })
}