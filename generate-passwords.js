const max_passwords = 1000
const max_length = 256

function handleForm() {
    var validationFlag = true

    var passwords = Number(document.getElementById("number-of-passwords-to-generate").value)
    var pLength = Number(document.getElementById("password-length").value)
    var limitSpecial = document.getElementById("limit-special-characters").checked

    if (!validateCount()) {
        validationFlag = false
    }

    if (!validateLength()) {
        validationFlag = false
    }

    if (validationFlag) {
        if (limitSpecial) {
            generateLimitedSpecialPasswords(passwords, pLength)
        } else {
            generatePasswords(passwords, pLength)
        }
    } else {
        enableSubmit(false)
    }
}

function validateCount() {
    var input = document.getElementById("number-of-passwords-to-generate")
    var passwords = input.value

    if (passwords > max_passwords || passwords < 1) {
        if (!document.getElementById("number-warning")) {
            var numberWarning = document.createElement("div")
            var numberWarningText = document.createTextNode(`Number of passwords must be between 1 and ${max_passwords}.`)
            numberWarning.appendChild(numberWarningText)
            numberWarning.setAttribute("class", "invalid-feedback")
            numberWarning.setAttribute("id", "number-warning")
            input.classList.add("is-invalid")
            input.parentNode.appendChild(numberWarning)
            enableSubmit(false)
        }

        return false
    } else {
        if (document.getElementById("number-warning")) {
            var warning = document.getElementById("number-warning")
            warning.parentNode.removeChild(warning)
        }

        input.classList.remove("is-invalid")
        input.classList.add("is-valid")
        enableSubmit(true)

        return true
    }
}

function validateLength() {
    var input = document.getElementById("password-length")
    var pLength = input.value

    if (pLength > max_length || pLength < 1) {
        if (!document.getElementById("length-warning")) {
            var lengthWarning = document.createElement("div")
            var warningText = document.createTextNode(`Password length must be between 1 and ${max_length}.`)
            lengthWarning.appendChild(warningText)
            lengthWarning.setAttribute("class", "invalid-feedback")
            lengthWarning.setAttribute("id", "length-warning")
            input.classList.add("is-invalid")
            input.parentNode.appendChild(lengthWarning)
            enableSubmit(false)
        }

        return false
    } else {
        if (document.getElementById("length-warning")) {
            var warning = document.getElementById("length-warning")
            warning.parentNode.removeChild(warning)
        }

        input.classList.remove("is-invalid")
        input.classList.add("is-valid")
        enableSubmit(true)

        return true
    }
}

function enableSubmit(enabled) {
    if(enabled) {
        document.getElementById("submit-button").removeAttribute("disabled")
    } else {
        document.getElementById("submit-button").setAttribute("disabled", true)
    }
}

function generatePasswords(count, length) {
    var chars = []

    for (var i=48;i<=122;i++) {
        chars.push(String.fromCharCode(i))
    }

    displayOutput(createPasswords(count, length, chars))
}

function generateLimitedSpecialPasswords(count, length) {
    var chars = [String.fromCharCode(33),String.fromCharCode(35),String.fromCharCode(42),String.fromCharCode(45),String.fromCharCode(95)]

    for (var i=48;i<=57;i++) {
        chars.push(String.fromCharCode(i))
    }

    for (var i=65;i<=90;i++) {
        chars.push(String.fromCharCode(i))
    }

    for (var i=97;i<=122;i++) {
        chars.push(String.fromCharCode(i))
    }

    displayOutput(createPasswords(count, length, chars))
}

function createPasswords(count, length, characters) {
    var passwords = []

    for (var i=0; i<count; i++) {
        passwords.push(createPassword(length, characters))
    }

    return passwords
}

function createPassword(length, characters) {
    var password = ''

    var crypto1 = new Int32Array(length)

    if (window.crypto && window.crypto.getRandomValues) {
        window.crypto.getRandomValues(crypto1)
    } else if (window.msCrypto && window.msCrypto.getRandomValues) {
        window.msCrypto.getRandomValues(crypto1)
    } else {
        console.error('window.crypto library not available. Please use a browser which supports window.crypto to use this web application.')
    }

    for (var i=0;i<length;i++) {
        password += characters[Math.abs(crypto1[i]) % characters.length]
    }

    return password
}

function displayOutput(passwords) {
    if (document.getElementById("output")) {
        var old = document.getElementById("output")
        old.parentNode.removeChild(old)
    }

    var listGroup = document.createElement("ul")
    listGroup.classList.add("list-group")
    listGroup.classList.add("mt-5")
    listGroup.setAttribute("id", "output")

    var listItem, listText

    listText = document.createTextNode("Passwords")
    listItem = document.createElement("li")
    listItem.classList.add("list-group-item")
    listItem.classList.add("font-weight-bolder")
    listItem.classList.add("active")
    listItem.appendChild(listText)
    listGroup.appendChild(listItem)

    for (var i=0;i<passwords.length;i++) {
        listText = document.createTextNode(passwords[i])
        listItem = document.createElement("li")
        listItem.classList.add("list-group-item")
        listItem.classList.add("text-monospace")
        listItem.appendChild(listText)
        listGroup.appendChild(listItem)
    }

    document.getElementById("main-container").appendChild(listGroup)
}