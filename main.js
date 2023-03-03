

const validate = (e) => {
    e.preventDefault();
    // console.log('działam');

    let errors = false;

    let name = document.querySelector('.name');

    let errorsList = document.querySelector('.errors');

 if(errorsList.childNodes.length !== 0) {
    errorsList.innerHTML = '';
 }

    // Name 
    // co najmniej 4 znaki, bez spacji, erros po całej walidacji m, błąd wyświetlany '';

    console.log(name.value);

    if (name.value.trim() === '' || name.value.length < 4) {

        errors = true;
        name.classList.add('error');

        errorsList.innerHTML += `<li id="user-error">Nazwa powinna mieć co najmniej 4 znaki`

    } else {
        errors = false;
        name.classList.remove('error');

        let userError = document.querySelector('#user-error')
        userError.remove();


    }


    // Email
    let email = document.querySelector('.email');

    if (email.value.trim() === '') {

        errors = true;
        email.classList.add('error');

        errorsList.innerHTML += `<li id="email-error">Email nie może być pusty`

    } else {
        errors = false;
        email.classList.remove('error');

        let emailError = document.querySelector('#email-error')
        emailError.remove();


    }

    // Password


    // Repeat password



}


const button = document.querySelector('.btn-submit')
button.addEventListener('click', validate)


