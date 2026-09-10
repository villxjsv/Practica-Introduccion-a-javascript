//String - cadenas de texto 

//Una cadena puede ir 
// entre comillas dobles o simples

const superheroe = "Superman";
const superheroe2 = String("Batman");
const superheroe3 = new String("Iron Man");
const villano = 'Mojojojo';

console.log(superheroe);
console.log(superheroe2);
console.log(superheroe3);
console.log(villano);
console.log(typeof superheroe);
console.log(typeof superheroe2);
console.log(typeof superheroe3);
console.log(typeof villano);

//Metodos de las cadenas 

console.log(superheroe.length);

const tweet = "En clase de Desarrollo Movil"

//indexOf
console.log(tweet.indexOf('Desarrollo'));

//includes (retorno un boolean)
console.log(tweet.includes('Movil'));
console.log(tweet.includes('Si'));

const email = 'juliosantiagovillasecagmail.com';

if (email.indexOf('@') == -1 ) {
    console.log('correo no valido');
} else {
    console.log('correo valido');
}