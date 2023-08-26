const formulario = document.getElementById('form')

//evento
formulario.addEventListener("submit", validarFormulario);


//funcion validar el formulario al dar submit
function validarFormulario(e) {
    e.preventDefault();

    
	var expUsuario = /^[A-Z]{1}[a-z]{2,9}\s[A-Z]{1}[a-z]{2,9}$/;
	var expCorreo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;


    //ver los valores de los inputs
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    

    var usuarioNombre = document.getElementById('nombre').value;
	var usuarioCorreo = document.getElementById('email').value;
	var usuarioAsunto = document.getElementById('asunto').value;
	var usuarioMensaje = document.getElementById('mensaje').value;
	var nombreError = document.getElementById('nombre_error');
	var correoError = document.getElementById('email_error');
	var asuntoError = document.getElementById('asunto_error');
	var mensajeError = document.getElementById('mensaje_error');
	var campoNombre = document.getElementById('nombre');
	var campoCorreo = document.getElementById('email');
	var campoAsunto = document.getElementById('asunto');
	var campoMensaje = document.getElementById('mensaje');


    
	var mensajeblanco = "";
	


    mensajeError.innerHTML = mensajeblanco;


    if (!usuarioNombre) {
        var mensajeErrorNombre = "Su Nombre Completo es Requerido!";
        nombreError.innerHTML = mensajeErrorNombre;
        campoNombre.style.outline = "2px solid #f00";
        campoNombre.focus();
        return false;
    } else if (!expUsuario.test(usuarioNombre)) {
        var mensajeInvalidoNombre = "Su Nombre Completo es Invalido!";
        nombreError.innerHTML = mensajeInvalidoNombre;
        campoNombre.style.outline = "2px solid #f00";
        campoNombre.focus();
        return false;
    }
    nombreError.innerHTML = mensajeblanco;

    if (!usuarioCorreo) {
		var mensajeErrorCorreo = "Su Correo Electronico es Requerido!";
		correoError.innerHTML = mensajeErrorCorreo;
		campoCorreo.style.outline = "2px solid #f00";
        campoCorreo.focus();
		return false;
	} else if (!expCorreo.test(usuarioCorreo)) {
		var mensajeInvalidoCorreo = "Su Correo Electronico es Invalido!";
		correoError.innerHTML = mensajeInvalidoCorreo;
		campoCorreo.style.outline = "2px solid #f00";
        campoCorreo.focus();
		return false;
	}

    correoError.innerHTML = mensajeblanco;


    if (!usuarioAsunto) {
		var mensajeErrorAsunto = "El Tema del Asunto es Requerido!";
		asuntoError.innerHTML = mensajeErrorAsunto;
		campoAsunto.style.outline = "2px solid #f00";
        campoAsunto.focus();
		return false;
	} else if (!isNaN(usuarioAsunto)) {
		var mensajeNumerosAsunto = "No se permite Numeros en el Asunto!";
		asuntoError.innerHTML = mensajeNumerosAsunto;
		campoAsunto.style.outline = "2px solid #f00";
        campoAsunto.focus();
		return false;
	}


    asuntoError.innerHTML = mensajeblanco;


	if (!usuarioMensaje) {
		var mensajeErrorMensaje = "Por favor escriba su Mensaje!";
		mensajeError.innerHTML = mensajeErrorMensaje;
		campoMensaje.style.outline = "2px solid #f00";
        campoMensaje.focus();
		return false;
	} else if (usuarioMensaje.length >= 255) {
		mensajeLargo = "Su Mensaje es demasiado Largo!";
		mensajeError.innerHTML = mensajeLargo;
		campoMensaje.style.outline = "2px solid #f00";
        campoMensaje.focus();
		return false;
	} 


    mensajeError.innerHTML = mensajeblanco;


     // Lógica para validacion en JavaScript
    if (nombre == '' || email == '' || asunto == '' || mensaje == '') {
        mostrarAlerta('Complete los campos', 'error');
    } else {       
        
  

            const btn = document.getElementById('button');

            btn.value = 'Enviando...';
    

            const serviceID = 'default_service';
            const templateID = 'template_g7slbpq';

            mostrarAlerta('enviando información...', 'exito');    

            setTimeout(() => {                
                emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                btn.value = 'Enviar mensaje';
                /*alert('Mensaje enviado correctamente!');*/

                mostrarAlerta('Mensaje enviado correctamente!', 'exito');    

                }, (err) => {
                btn.value = 'Enviar mensaje';
                /*alert(JSON.stringify(err));*/

                mostrarAlerta(JSON.stringify(err), 'error');    

                });


            }, 2000);

            


                    
            setTimeout(() => {
                window.location.href = "./contactenos.html"
            }, 4000);
            
            return
             
    }
}

//Mostrar la alerta cuando agregamos datos incorrectos o vacíos
function mostrarAlerta(mensaje, tipo) {
    const alerta = document.createElement('div');
    alerta.className = `alerta ${tipo}`
    alerta.textContent = mensaje

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 2000)
}





