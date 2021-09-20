let formularioSalidaUser = document.querySelector('#formularioSalidas');
let listadoCliUser = document.querySelector('#listadoSalidas');

let salida = [];

const crearTuplaSalida = (id, cliente, fecha, cantidad, precio, tipo, total) =>{
    let item2 = {
        id: id,
        cliente: cliente,
        fecha: fecha,
        cantidad: cantidad,
        precio: precio,
        tipo: tipo,
        total: total
    }

    salida.push(item2);
    return item2;
}

const poblarLocalStorageSalida = () =>{
    localStorage.setItem('salida', JSON.stringify(salida));
    poblarTuplaSalida();
}

const poblarTuplaSalida = () =>{
    listadoCliUser.innerHTML = '';
    salida = JSON.parse(localStorage.getItem('salida'));
    if (salida === null) {
        salida = [];
    }else{
        let total = 0;
        let pagar = 0;
        salida.forEach(element2 => {
            listadoCliUser.innerHTML +=`
            <tr>
                <td>${element2.id}</td>
                <td>${element2.cliente}</td>
                <td>${element2.fecha}</td>
                <td>${element2.tipo}</td>
                <td>${element2.cantidad}</td>
                <td>Q. ${element2.precio}</td>
                <td>Q. ${pagar = element2.cantidad * element2.precio}</td>
            </tr>
            `
            total = total + pagar; 
        })
        listadoCliUser.innerHTML+=`
        <tr>
            <td colspan="6">Total</td>
            <td colspan="1">Q. ${total}</td>
        </tr>
        `
    }
}

formularioSalidaUser.addEventListener('submit', (e) => {
    e.preventDefault();
    let idCliente = document.getElementById('idCliente').value;
    let idNomCliente = document.getElementById('idNomCliente').value;
    let idFechaS = document.getElementById('idFechaS').value;
    let idCantidadS = document.getElementById('idCantidadS').value;
    let idPrecioS = document.getElementById('idPrecioS').value;
    let idTipoSalida = document.getElementById('idTipoSalida').value;

    crearTuplaSalida(idCliente, idNomCliente, idFechaS, idCantidadS, idPrecioS, idTipoSalida);
    poblarLocalStorageSalida();

    formularioSalidaUser.reset();
})

document.addEventListener('DOMContentLoaded', poblarTuplaSalida);