const boton = document.querySelector('#boton');

boton.addEventListener('click', function() {
    Notification.requestPermission()
        .then(resultado => console.log(resultado))
});

if (Notification.permission == 'granted') {
    new Notification('El Bicho CR7', {
        icon: 'img/elbicho.jpg',
        body: 'SIUUUUUUU'
    })
}