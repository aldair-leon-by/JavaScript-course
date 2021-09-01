// Async / await


function descargarUltimosPedidos() {
    return new Promise(resolve => {
        console.log('Descargando pedidos... espere..');
        setTimeout(() => {
            resolve('Los pedidos fueron Descargados');
        }, 1000);
    });
}


function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando clientes... espere..');
        setTimeout(() => {
            resolve('Los clientes fueron Descargados');
        }, 2000);
    });
}

// async function app() {
//     try {
//         const resultado = await descargarNuevosClientes();
//         console.log(resultado);

//     } catch (error) {
//         console.log(error);
//     }
// }
// app();


async function _app() {
    try {
        const resultado = await Promise.all([descargarUltimosPedidos(), descargarNuevosClientes()]);
        console.log(resultado[0]);
        console.log(resultado[1]);

    } catch (error) {
        console.log(error);
    }
}
_app();