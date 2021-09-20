// Selección de Elementos
var toggle_btn;
var big_wrapper;
var hamburger_menu;

function declare() {
  toggle_btn = document.querySelector(".toggle-btn");
  big_wrapper = document.querySelector(".big-wrapper");
  hamburger_menu = document.querySelector(".hamburger-menu");
}

const main = document.querySelector("main");

declare();
//Animaciones Formularios
const inputs = document.querySelectorAll('.input');
function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove('focus');
  }
}

inputs.forEach(input => {
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});

let dark = false;

function toggleAnimation() {
  // Clone the wrapper
  dark = !dark;
  let clone = big_wrapper.cloneNode(true);
  if (dark) {
    clone.classList.remove("light");
    clone.classList.add("dark");
  } else {
    clone.classList.remove("dark");
    clone.classList.add("light");
  }
  clone.classList.add("copy");
  main.appendChild(clone);

  document.body.classList.add("stop-scrolling");

  clone.addEventListener("animationend", () => {
    document.body.classList.remove("stop-scrolling");
    big_wrapper.remove();
    clone.classList.remove("copy");
    // Reseteo de Variables
    declare();
    events();
  });

}

function events() {
  toggle_btn.addEventListener("click", toggleAnimation);
  hamburger_menu.addEventListener("click", () => {
    big_wrapper.classList.toggle("active");
  });
}

events();

//previsulizar imagen
/*document.getElementById('file').onchange=function(e){
  let reader=new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload=function(){
    let preview=document.getElementById('preview');
    image=document.createElement('img');
    image.src=reader.result;
    image.style.width="200px";
    preview.innerHTML='';
    preview.append(image);
  }
}*/

/*
//Agregar Productos
'use strict';

//metodo
let producto = [];
// clase datosproducro
class datosProducto  {
    constructor(idId, idNombre, idPrecio){
        this.idId=idId;
        this.idNombre=idNombre;
        this.idPrecio=idPrecio;
    }
}
*/

//funcion para validar los datos
function validarCampos (){
    if(document.getElementById('idId').value == ""){
        alert('debe ingresar el ID');
        return false;
    }
    if(document.getElementById('idNombre').value == ""){
        alert('debe ingresar el Nombre del producto');
        return false;
    }
    if(document.getElementById('idPrecio').value == ""){
        alert('debe ingresar el Precio del Producto');
        return false;
    }
    if (document.getElementById('idCantidad').value == "") {
      alert('debe ingresar la cantidad del Producto');
      return false;
    }
    return true;
}

/*
//funcion para poblar el arreglo

function poblarArreglo(){
    let idId = document.getElementById('idId').value;
    let idNombre= document.getElementById('idNombre').value;
    let idPrecio= document.getElementById('idPrecio').value;

    producto.push(new datosProducto(idId,idNombre,idPrecio));
}

//mostrar datos

function mostrarDatos(){
    let rows = "";

    for (let index = 0; index < producto.length; index++) {
        
        rows += '<tr>'
        rows += '<td>' + producto[index].idId + '</td>'
        rows += '<td>' + producto [index].idNombre + '</td>'
        rows += '<td>' +' Q. ' + producto [index].idPrecio + '</td>'
        rows +='</tr>'   
    }
   document.getElementById('listado').innerHTML = rows;
}
//funcion principal
function addData(){

    //validar campos
    if(validarCampos()== false){
        return;
    }
   
    //poblar arreglo
    poblarArreglo();

   
    //mostare datos
    mostrarDatos();
}*/

//inicio de sesión
function login(){
  if (document.getElementById('user').value == "admin" && document.getElementById('password').value == "12345") {
    alert('datos ingresados correctamente');
    open("existencias.html");
  } else {
    alert('credenciales inválidas');
    alert
  }
}