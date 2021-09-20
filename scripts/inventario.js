//Varialbles---------------------------------------------------
let formularioUser =  document.querySelector('#formulario');
let listadoUser = document.querySelector('#listado');

let product = [];

//Funciones
const CrearTuplaProducto = (id, nombre, cantidad, precio) =>{
    let item = {
        id: id,
        nombre: nombre,
        cantidad: cantidad,
        precio: precio
    }
    
    product.push(item);
    return item;
}

const poblarLocalStorage = () =>{
    localStorage.setItem('producto', JSON.stringify(product));
    poblarTupla();
}

const poblarTupla = () =>{
    listadoUser.innerHTML = '';
    product = JSON.parse(localStorage.getItem('producto'));
    if (product === null) {
        product = [];
    }else{
        product.forEach(element => {
            listadoUser.innerHTML += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.nombre}</td>
                    <td>${element.cantidad}</td>
                    <td>Q. ${element.precio}</td>
                </tr>
            `
        });
    }

}

//Eventos
formularioUser.addEventListener('submit', (e) => {
    e.preventDefault(); //no deja que actualice la pagina
    let idId = document.getElementById('idId').value;
    let idNombre= document.getElementById('idNombre').value;
    let idCantidad= document.getElementById('idCantidad').value;
    let idPrecio= document.getElementById('idPrecio').value;

    console.log(product);
    CrearTuplaProducto(idId, idNombre, idCantidad, idPrecio);
    poblarLocalStorage();

    formularioUser.reset();
})

document.addEventListener('DOMContentLoaded', poblarTupla);
