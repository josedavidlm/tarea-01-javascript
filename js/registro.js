const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{4,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
}

const campos ={
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
}

const validarFormulario = (e) =>{ //e = evento
    switch (e.target.name){
        case "nombres":
            validarCampo(expresiones.nombre, e.target, 'nombre'); //OK
        break;

        case "email":
            validarCampo(expresiones.correo, e.target, 'correo'); //OK
        break;

        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');  //OK
        break;

        case "password":
            validarCampo(expresiones.password, e.target, 'password'); //OK
        break;

        case "password2":
            validarPassword();
        break;
    }
}
// PARA VALIDAR TODOS LOS CAMPOS EXCEPTO LA DE VALIDACIÓN DE CONTRASEÑA
const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        // usamos el metodo backtick `, template string se usa con el simbolo `${nombre}`
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }else{
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

// VALIDACIÓN DE CONTRASEÑA
const validarPassword = () =>{
    const inputPassword = document.getElementById('password');
    const inputPassword2 = document.getElementById('password2');

    if(inputPassword.value !== inputPassword2.value) // solo si la dos contraseñas no son iguales, muestra el error.
    {
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['password'] = false;
    }else{
        document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = true;
    }   
}


inputs.forEach((input) => { // la funcion se ejecutara por cada imput
    // para el keyup, es cada vez que se preciona la tecla
    input.addEventListener('keyup',validarFormulario); 
    input.addEventListener('blur',validarFormulario);
})


// para evitar que se envie el formulario 
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    const terminos = document.getElementById('terminos');

    if(campos.usuario && campos.nombre && campos.correo && campos.password && terminos.checked){
        formulario.reset();
        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(()=>{
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        },5000)
    }
    else{
        console.log('formulario enviado incompleto o correctamente')
        console.log(campos.nombre);
        console.log(campos.correo);
        console.log(campos.usuario);
        console.log(campos.password);
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        setTimeout(()=>{
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
        },5000);
    }
})

/*
if(expresiones.nombre.test(e.target.value)){
    document.getElementById('#grupo__nombre').classList.remove('formulario__grupo-incorrecto');
    document.getElementById('#grupo__nombre').classList.add('formulario__grupo-correcto');
    document.querySelector('#grupo__nombre i').classList.add('fa-check-circle');
    document.querySelector('#grupo__nombre i').classList.remove('fa-times-circle');
    document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');

}else{
    document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
    document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
    document.querySelector('#grupo__nombre i').classList.add('fa-times-circle');
    document.querySelector('#grupo__nombre i').classList.remove('fa-check-circle');
    document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
}*/