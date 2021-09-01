const usarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario Autenticado');
    } else {
        reject('No se puede iniciar sesion');
    }
});

usarioAutenticado
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))