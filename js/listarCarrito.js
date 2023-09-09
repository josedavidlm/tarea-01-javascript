class Producto {
    constructor(nombreproducto, cantidad, precio) {
        this.nombreproducto = nombreproducto;
        this.cantidad = cantidad;
        this.precio = precio;
        this.imagen = imagen;    
        this.subTotal = cantidad * precio;
    }
}


class UI {
    // function for UI class to add Producto to list;
    addProductoToList(Producto) {
        const list = document.getElementById('Producto-list');
        // Create table row element
        const row = document.createElement('tr');
        // Insert columns
        row.innerHTML = `
            <td>${Producto.nombreproducto}</td>
            <td><img class ="imagencarrito" src="${Producto.imagen}" alt="" ></td>
            <td>${Producto.cantidad}</td>
            <td>${Producto.precio}</td>
            <td>${Producto.subTotal}</td>
            <td><a href="#" class="delete">X</a> </td>
        `;

        list.appendChild(row);
    }

    showAlert(message, className) {
        // create div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        //Add alert text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#Producto-form');
        // Insert alert
        container.insertBefore(div, form);
        // Time out after 3 seconds
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 3000);
    }

    deleteProducto(target) {
        if (target.className === 'delete') {
            target.parentElement.parentElement.remove();
        }
    }

    clearFields() {
        document.getElementById('nombreproducto').value = '';
        document.getElementById('cantidad').value = '';
        document.getElementById('precio').value = '';
    }
}


// Local Storage class
class Store {

    // Get Productos from local storage
    static getProductos() {
        let Productos;
        if (localStorage.getItem('Productos') === null) {
            Productos = [];
        } else {
            Productos = JSON.parse(localStorage.getItem('Productos'));
        }
        return Productos;
    }

    // Display Productos in UI
    static displayProductos() {
        const Productos = Store.getProductos();

        Productos.forEach(function (Producto) {
            const ui = new UI;
            // Add Producto to list
            ui.addProductoToList(Producto);
        })
    }

    // Add Producto details to local storage
    static addProducto(Producto) {
        const Productos = Store.getProductos();
        Productos.push(Producto);

        // Store to local storage
        localStorage.setItem('Productos', JSON.stringify(Productos));
    }

    static removeProducto(precio) {
        const Productos = Store.getProductos();
        Productos.forEach(function (Producto, index) {
            if (Producto.precio === precio) {
                Productos.splice(index, 1);
            }
        });
        localStorage.setItem('Productos', JSON.stringify(Productos));
    }
}


// DOM Load event 
document.addEventListener('DOMContentLoaded', Store.displayProductos());

// Event listeners for Add Producto


// Event listener for Delete    

document.getElementById('Producto-list').addEventListener('click', function (e) {
    // Instantiate UI
    const ui = new UI();

    // Delete Producto
    ui.deleteProducto(e.target);

    // Remove from local storage using precio number
    Store.removeProducto(e.target.parentElement.previousElementSibling.textContent)

    // Show alert
    ui.showAlert('Producto Removed', 'success');

    e.preventDefault();
});
