document.addEventListener("DOMContentLoaded", function() {

    const kittyButton = document.querySelector('.summon-cats')
    

    kittyButton.addEventListener('click', () => {
        const kittyRequest = axios.get('http://bitkittens.herokuapp.com')
        kittyRequest.then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log('ERROR!')
        })
    })
});
