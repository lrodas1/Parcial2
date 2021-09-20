let formularioEntradaUser = document.querySelector('#formularioEntradas');
let listradoProvUser = document.querySelector('#listadoEntradas');

let entrada = [];

const crearTuplaEntrada = (id, proveedor, fecha, cantidad, precio, tipo, total) =>{
    let item1 = {
        id: id,
        proveedor: proveedor,
        fecha: fecha,
        cantidad: cantidad,
        precio: precio,
        tipo: tipo,
        total: total
    }

    entrada.push(item1);
    return item1;
}

const poblarLocalStorageEntrada = () =>{
    localStorage.setItem('entrada', JSON.stringify(entrada));
    poblarTuplaEntrada();
}

const poblarTuplaEntrada = () =>{
    listradoProvUser.innerHTML = '';
    entrada = JSON.parse(localStorage.getItem('entrada'));
    if (entrada === null) {
        entrada = [];
    }else{
        let total = 0;
        let ingreso = 0;
        entrada.forEach(element1 => {
            listradoProvUser.innerHTML +=`
                <tr>
                    <td>${element1.id}</td>
                    <td>${element1.proveedor}</td>
                    <td>${element1.fecha}</td>
                    <td>${element1.tipo}</td>
                    <td>${element1.cantidad}</td>
                    <td>Q. ${element1.precio}</td>
                    <td>Q. ${ingreso = element1.cantidad * element1.precio}</td>
                </tr>
            `
            total = total + ingreso;
        })
        listradoProvUser.innerHTML +=`
        <tr>
            <td colspan="6">Total</td>
            <td colspan="1">Q. ${total}</td>
        </tr>
        `
    }
}

formularioEntradaUser.addEventListener('submit', (e) => {
    e.preventDefault();
    let idProveedor = document.getElementById('idProveedor').value;
    let idNomProveedor = document.getElementById('idNomProveedor').value;
    let idFecha = document.getElementById('idFecha').value;
    let idCantidadE = document.getElementById('idCantidadE').value;
    let idPrecioE = document.getElementById('idPrecioE').value;
    let idTipoEntrada = document.getElementById('idTipoEntrada').value;

    crearTuplaEntrada(idProveedor, idNomProveedor, idFecha,idCantidadE, idPrecioE, idTipoEntrada);
    poblarLocalStorageEntrada();

    formularioEntradaUser.reset();
})

document.addEventListener('DOMContentLoaded', poblarTuplaEntrada);

