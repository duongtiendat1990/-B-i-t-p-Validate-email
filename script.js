function checkEmail() {
    let patt =/^[A-Za-z0-9]+[@[A-Za-z0-9]+(\.[A-Za-z0-9]+)(?:\.[A-Za-z0-9]+)?$/;
    let address = document.getElementById('email').value;
    let result = patt.test(address);
    if (result) document.getElementById('result').innerText = 'The e-mail address is valid';
    else document.getElementById('result').innerText = 'The e-mail address is not valid';
}