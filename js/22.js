const metodoPago = 'cheque';

switch(metodoPago) {
    case 'tarjeta':
        console.log('pagaste con tarjeta');
        break;
    case 'efectivo':
        console.log('Pagaste con efectivo');
        break;
    case 'cheque':
        console.log('El usuario paga con cheque , se revisara los fondos primero');
        break;
    default:
        console.log('Aun no has pagado');
        break;
}