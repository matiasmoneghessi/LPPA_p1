function validateName() {
    if (username.value.length < 3 && username.value.length > 0) {
        console.log('Name too short')
        usernameerror.innerHTML = 'Name too short'
    } else if (username.value.length === 0) {
        console.log('Name empty')
        usernameerror.innerHTML = 'Name empty'
    } else {
        console.log('Correct')
        usernameerror.innerHTML = ''
    }
}
function validateSurname() {
    if (usersurname.value.length < 3 && usersurname.value.length > 0) {
        console.log('Surname too short')
        usersurnameerror.innerHTML = 'Surname too short'
    } else if (usersurname.value === "") {
        console.log('Surname empty')
        usersurnameerror.innerHTML = 'Surname empty'
    } else {
        console.log('Correct')
        usersurnameerror.innerHTML = ''
    }
}
function validateEmail() {
    if (reg.test(useremail.value) == false) {
        console.log('Wrong email')
        erroremail.innerHTML = 'Wrong email'
    }
    else {
        console.log('Correct email')
        erroremail.innerHTML = ''
    }
}
function validateAge() {
    if (userage.value < 1 || userage.value > 99) {
        console.log('The age must be a number between 1 and 100')
        errorage.innerHTML = 'The age must be a number between 1 and 100'
    }
    else if (!numbers_test.test(userage.value)) {
        errorage.innerHTML = "Only numbers"
        console.log('Only numbers')
    }
    else {
        console.log('Valid age')
        errorage.innerHTML = ''
    }
}
function validateSex() {
    if (male.checked === false && female.checked === false && other.checked === false) {
        errorsex.innerHTML = 'Please select a sex'
        console.log('Please select a sex')
    }
    else {
        console.log('Sex selected')
        errorsex.innerHTML = ''
    }
}
function validateInterest() {
    if (music.checked === false && sports.checked === false && games.checked === false && tech.checked === false) {
        errorinterest.innerHTML = 'Please select a topic'
        console.log('Please select a topic')
    }
    else {
        console.log('Topic selected')
        errorinterest.innerHTML = ''
    }
}
function validateCountry() {
    if (choose.selected === true) {
        errorselect.innerHTML = 'Select your country'
        console.log('Select your country')
    }
    else {
        console.log('Country selected')
        errorselect.innerHTML = ''
    }
}
function validateArea() {
    if (area.value.length < 10 && area.value.length > 0) {
        console.log('Message too short')
        errorarea.innerHTML = 'Message too short'
    } else if (area.value.length === 0) {
        console.log('Message empty')
        errorarea.innerHTML = 'Message empty'
    } else {
        console.log('Correct')
        errorarea.innerHTML = ''
    }
}
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
    //console.log(userage)
}
window.onload = function () {
    numbers_test = /^([1-9]?\d|100)$/;
    username = document.getElementById('name')
    usernameerror = document.getElementById('errorname')
    usersurname = document.getElementById('surname')
    usersurnameerror = document.getElementById('errorsurname')
    useremail = document.getElementById('email')
    reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    erroremail = document.getElementById('erroremail')
    userage = document.getElementById('age')
    errorage = document.getElementById('errorage')
    male = document.getElementById('male')
    female = document.getElementById('female')
    other = document.getElementById('other')
    errorsex = document.getElementById('errorsex')
    music = document.getElementById('music')
    sports = document.getElementById('sports')
    games = document.getElementById('games')
    tech = document.getElementById('tech')
    errorinterest = document.getElementById('errorinterest')
    dropdown = document.getElementById('dropdown')
    choose = document.getElementById('select')
    arg = document.getElementById('arg')
    chi = document.getElementById('chi')
    bra = document.getElementById('bra')
    uru = document.getElementById('uru')
    errorselect = document.getElementById('errorselect')
    area = document.getElementById('area')
    errorarea = document.getElementById('errorarea')
    sendbutton = document.getElementById('send')
    sendbutton.onclick = sendForm
}
