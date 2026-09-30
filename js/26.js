//*Promises

const usuarioAutenticado = new Promise( (resolve, reject) => {

        const auth = false;

        if ( auth){
            resolve('Usuario Autenticado'); //* El promise se cumple
        } else {
            reject('No se puede iniciar sesion'); //*El promise no se cumple
        }

} );

console.log(usuarioAutenticado);