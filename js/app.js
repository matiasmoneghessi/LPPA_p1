//validate name
function validateName() {
    if (userName.value.length < 3 && userName.value.length > 0) {
        console.log('Name too short')
        userNameError.innerHTML = 'Name too short'
    } else if (userName.value.length === 0) {
        console.log('Name empty')
        userNameError.innerHTML = 'Name empty'
    } else {
        userNameError.innerHTML = ''
        console.log('Name: ' + userName.value)
    }
}
//validate surname
function validateSurname() {
    if (userSurname.value.length < 3 && userSurname.value.length > 0) {
        console.log('Surname too short')
        userSurnameError.innerHTML = 'Surname too short'
    } else if (userSurname.value === "") {
        console.log('Surname empty')
        userSurnameError.innerHTML = 'Surname empty'
    } else {
        userSurnameError.innerHTML = ''
        console.log('Surename: ' + userSurname.value)
    }
}
//validate email
function validateEmail() {
    if (reg.test(userEmail.value) == false) {
        console.log('Wrong email')
        errorEmail.innerHTML = 'Wrong email'
    }
    else {
        errorEmail.innerHTML = ''
        console.log('Email: ' + userEmail.value)
    }
}
//validate age
function validateAge() {
    if (userAge.value < 1 || userAge.value > 99) {
        console.log('The age must be a number between 1 and 100')
        errorAge.innerHTML = 'The age must be a number between 1 and 100'
    }
    else if (!numbersTest.test(userAge.value)) {
        errorAge.innerHTML = "Only numbers"
        console.log('Only numbers')
    }
    else {
        errorAge.innerHTML = ''
        console.log('Age: ' + userAge.value)
    }
}
//validate sex
function validateSex() {
    if (male.checked === false && female.checked === false && other.checked === false) {
        errorSex.innerHTML = 'Please select a sex'
        console.log('Please select a sex')
    }
    else {
        errorSex.innerHTML = ''
        if (male.checked === true) {
            console.log('Sex: male')
        }
        else if (female.checked === true) {
            console.log('Sex: female')
        }
        else {
            console.log('Sex: other')
        }
    }
}
//validate interest
function validateInterest() {
    if (music.checked === false && sports.checked === false && games.checked === false && tech.checked === false) {
        errorInterest.innerHTML = 'Please select a topic'
        console.log('Please select a topic')
    }
    else {
        errorInterest.innerHTML = ''
        console.log('Topic: ')
        if (music.checked === true) {
            console.log('music')
        }
        if (sports.checked === true) {
            console.log('sports')
        }
        if (games.checked === true) {
            console.log('games')
        }
        if (tech.checked === true) {
            console.log('tech')
        }
    }
}
//validate country
function validateCountry() {
    if (choose.selected === true) {
        errorSelect.innerHTML = 'Select your country'
        console.log('Select your country')
    }
    else {
        errorSelect.innerHTML = ''
        if (arg.selected === true) {
            console.log('Country: Argentina')
        }
        if (chi.selected === true) {
            console.log('Country: Chile')
        }
        if (bra.selected === true) {
            console.log('Country: Brasil')
        }
        if (uru.selected === true) {
            console.log('Country: Uruguay')
        }
    }
}
//validate area
function validateArea() {
    if (area.value.length < 10 && area.value.length > 0) {
        console.log('Message too short')
        errorArea.innerHTML = 'Message too short'
    } else if (area.value.length === 0) {
        console.log('Message empty')
        errorArea.innerHTML = 'Message empty'
    } else {
        errorArea.innerHTML = ''
        console.log('Message: ' + area.value)
    }
}
//clear console and execute validations
function sendForm() {
    console.clear()
    validateName()
    validateSurname()
    validateEmail()
    validateAge()
    validateSex()
    validateInterest()
    validateCountry()
    validateArea()
}
//get elements by id to be used in javascript
window.onload = function () {
    numbersTest = /^([1-9]?\d|100)$/;
    userName = document.getElementById('name')
    userNameError = document.getElementById('errorName')
    userSurname = document.getElementById('surname')
    userSurnameError = document.getElementById('errorSurname')
    userEmail = document.getElementById('email')
    reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    errorEmail = document.getElementById('errorEmail')
    userAge = document.getElementById('age')
    errorAge = document.getElementById('errorAge')
    male = document.getElementById('male')
    female = document.getElementById('female')
    other = document.getElementById('other')
    errorSex = document.getElementById('errorSex')
    music = document.getElementById('music')
    sports = document.getElementById('sports')
    games = document.getElementById('games')
    tech = document.getElementById('tech')
    errorInterest = document.getElementById('errorInterest')
    dropdown = document.getElementById('dropdown')
    choose = document.getElementById('select')
    arg = document.getElementById('arg')
    chi = document.getElementById('chi')
    bra = document.getElementById('bra')
    uru = document.getElementById('uru')
    errorSelect = document.getElementById('errorSelect')
    area = document.getElementById('area')
    errorArea = document.getElementById('errorArea')
    sendButton = document.getElementById('send')
    sendButton.onclick = sendForm
}
