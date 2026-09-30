//*Promises

const usuarioAutenticado = new Promise( (resolve, reject) => {

 const auth = false;

 if ( auth){
 resolve('Usuario Autenticado'); //* El promise se cumple
 } else {
 reject('No se puede iniciar sesion'); //*El promise no se cumple
 }

} );

//*console.log(usuarioAutenticado);

 usuarioAutenticado
 .then( resultado => console.log(resultado) )
 .catch( error => console.log(error) );

 //* En los promises existen tres valores:
 //*Fulfilled : Ya se cumplio
 //*rejected : Se ha rechazado o no se puede cumplir
 //*pending: No se ha cumplido pero tampoco se rechazo 

