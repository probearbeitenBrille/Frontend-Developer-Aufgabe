import { sendData } from './ajax.js';

(() => {
    let form = document.getElementById('userData');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let formData = form.querySelectorAll('input');
        let json = {};
        formData.forEach((element) => {
            json[element.name] = element.value;
        });
        sendData('http://localhost:8000', json, (result) => {
            alert(result);
        });
    })
})();