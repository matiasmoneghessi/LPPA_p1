function validatename() {
    if (username.value.length < 3 && username.value.length > 0) {
        console.log('name too short')
        usernameerror.innerHTML = 'name too short'
    } else if (username.value.length === 0) {
        console.log('name empty')
        usernameerror.innerHTML = 'name empty'
    } else {
        console.log('correct')
        usernameerror.innerHTML = ''
    }
}

function sendform() {
    validatename()
    //console.log(username.value)
}

window.onload = function () {

    username = document.getElementById('name')
    usernameerror = document.getElementById('errorname')
    sendbutton = document.getElementById('send')
    sendbutton.onclick = sendform

}
