function sendData(url, data, callback) {
    let promise = new Promise(
        (resolve, reject) => {
            try {
                var xhr = new XMLHttpRequest();
                xhr.open('POST', url);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.onload = () => {
                    if (xhr.status === 200) {
                        resolve(xhr.responseText);
                    } else {
                        reject(xhr.status);
                    }
                };
                xhr.onerror = (error) => {
                    reject(error);
                }
                xhr.timeout = 200;

                xhr.send(JSON.stringify(data));
            } catch (error) {
                reject(error);
            }
        }
    )

    promise.then(
        (result) => {
            console.log(result);
            callback(result);
        }
    ).catch(
        (error) => {
            console.error(error);
            callback('Fehler');
        }
    )
}

export { sendData };