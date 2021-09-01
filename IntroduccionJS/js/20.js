const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo Cacin con el ID: ${id}`);
    },
    pausa: function() {
        console.log('Pausando...');
    }
}

reproductor.borrarCancion = function(id) {
    console.log(`Eliminando cancion: ${id}`);
}



console.log(reproductor);

reproductor.reproducir(3840);
reproductor.pausa();
reproductor.borrarCancion(20);