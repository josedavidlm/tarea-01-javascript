
window.onload = function() {
	var botoniniciar=document.getElementById("iniciar");
	botoniniciar.onclick=validacion;	
}


function validatePasswords(password)
{
	if (haveNumbers(password) && haveLowercase(password) && haveUppercase(password) && haveSigns(password) && password.length >= 6)
		return true;	
	return false;
}

//Verifica si una cadena de texto que se pasa como parámetro contiene por lo menos un número
function haveNumbers(text)
{
   var numbers="0123456789";
   for(i=0; i<text.length; i++){
      if (numbers.indexOf(text.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}

//Verifica si una cadena de texto que se pasa como parámetro contiene por lo menos un caracter en Minúscula
function haveLowercase(text)
{
   var letters="abcdefghyjklmnñopqrstuvwxyzáéíóú";   
   for(i=0; i<text.length; i++){
      if (letters.indexOf(text.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}

//Verifica si una cadena de texto que se pasa como parámetro contiene por lo menos un caracter en Mayúscula
function haveUppercase(text)
{
   var letters="ABCDEFGHYJKLMNÑOPQRSTUVWXYZÁÉÍÓÚ";
   for(i=0; i<text.length; i++){
      if (letters.indexOf(text.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}

//Verifica si una cadena de texto que se pasa como parámetro contiene por lo menos un signo
function haveSigns(text)
{
   //signos que se deben incluir en el texto (No contiene " , < , > , / por seguridad)
   var signs = "!\"#$%&')(*+,-_./:;>=<?@][^}{|~\\";
   for(i=0; i<text.length; i++){
      if (signs.indexOf(text.charAt(i),0)!=-1){
         return true;
      }
   }
   return false;
}


function validacion() {




	var expUsuario = /^[A-Z]{1}[a-z]{2,9}\s[A-Z]{1}[a-z]{2,9}$/;
	var expCorreo = /^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/;

	var usuarioCorreo = document.getElementById('Email').value;

	var mensajeError = document.getElementById('mensaje_error');

	var campoCorreo = document.getElementById('Email');

	
	var campoPassword = document.getElementById('Password');

	var campoRememberMe = document.getElementById('RememberMe');
	

	var mensajeblanco = "";
	mensajeError.innerHTML = mensajeblanco;

	console.log("prueba");
	console.log(campoRememberMe.checked);

	
	if (!usuarioCorreo) {
		var mensajeErrorCorreo = "Su Correo Electronico es Requerido!";
		mensajeError.innerHTML = mensajeErrorCorreo;
		campoCorreo.style.outline = "2px solid #429bee";
		campoCorreo.focus();
		return false;
	} else if (!expCorreo.test(usuarioCorreo)) {
		var mensajeInvalidoCorreo = "Su Correo Electronico es Invalido!";
		mensajeError.innerHTML = mensajeInvalidoCorreo;
		campoCorreo.style.outline = "2px solid #429bee";
		campoCorreo.focus();
		return false;
	}



	if ( !validatePasswords(campoPassword.value))
	{
		var mensajeInvalidoPassword = "La contraseña es demasiado debil\nIntroduzca mínimo 6 caracteres, al menos un número, una minúscula, una mayúscula y un símbolo";
		mensajeError.innerHTML = mensajeInvalidoPassword;
		campoPassword.style.outline = "2px solid #429bee";		
		campoPassword.focus();
		return false;
	}


	if (!campoRememberMe.checked) {
		var mensajeErrorRememberMe  = "Es necesario marca el recuadro Recuerdame!";
		mensajeError.innerHTML = mensajeErrorRememberMe;		
		campoRememberMe.focus();
		return false;
	}
	

	window.location.href = "../carrito.html";
	return true;


}

