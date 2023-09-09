let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");


//Funcion que carga la info del item seleccionado

function cargar(item){

    quitarBordes();

    
    mostrador.style.width = "65%";
    seleccion.style.width = "35%";
    seleccion.style.opacity = "1";
    item.style.border = "2px solid red";
    /*item.style.height = "180px";*/
    
    imgSeleccionada.src = item.getElementsByTagName("img")[0].src;
    modeloSeleccionado.innerHTML = item.getElementsByTagName("p")[0].innerHTML;

    
    document.getElementById("imagenproducto").value = item.getElementsByTagName("img")[0].src;

    console.log('001');    
    document.getElementById("nombreproducto").value = modeloSeleccionado.innerHTML;
    console.log(modeloSeleccionado.innerHTML);

    /*descripSeleccionada.innerHTML = "Descripción del modelo";*/
    precioSeleccionado.innerHTML = item.getElementsByTagName("span")[1].innerHTML;
    console.log('003');
    document.getElementById("precioproducto").value =precioSeleccionado.innerHTML;    
    console.log(precioSeleccionado.innerHTML);
    console.log(document.getElementById("imagenproducto").value);

}

function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for (i=0; i< items.length;i++){
        items[i].style.border= "none";
        /*items[i].style.height = "250px";*/
    }
}

function cerrar(){
mostrador.style.width = "100%";
seleccion.style.width = "0%";
seleccion.style.opacity = "0";

quitarBordes();
}
