// Simulación de Registro
const formRegistro = document.getElementById('formRegistro');
if (formRegistro) {
    formRegistro.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const password = document.getElementById('password').value;

        const usuario = {
            nombre,
            correo,
            password
        };

        localStorage.setItem('usuario', JSON.stringify(usuario));
        alert('Usuario registrado correctamente');
    });
}

// Simulación de Inicio de Sesión
const formLogin = document.getElementById('formLogin');
if (formLogin) {
    formLogin.addEventListener('submit', function (event) {
        event.preventDefault();

        const correo = document.getElementById('loginCorreo').value;
        const password = document.getElementById('loginPassword').value;

        const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));

        if (usuarioGuardado && usuarioGuardado.correo === correo && usuarioGuardado.password === password) {
            alert('Inicio de sesión correcto');
        } else {
            alert('Correo o contraseña incorrectos');
        }
    });
}