const max_passwords = 1000
const max_length = 256

function handleForm() {
    passwords = document.getElementById("number-of-passwords-to-generate").value
    pLength = document.getElementById("password-length").value
    limitSpecial = document.getElementById("limit-special-characters").value

    if (validateCount(passwords)) {
        if (validateLength(pLength)) {
            if (special(limitSpecial)) {
                generateLimitedSpecialPasswords(passwords, pLength)
            } else {
                generatePasswords(passwords, pLength)
            }
        } else {

        }
    } else {

    }
}

function validateCount(passwords) {
    if (passwords > max_passwords) {
        return false
    } else {
        return true
    }
}

function validateLength(pLength) {
    if (pLength > max_length) {
        return false
    } else {
        return true
    }
}

function generatePasswords(count, length) {

}

function generateLimitedSpecialPasswords(count, length) {

}