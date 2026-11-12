// ------------------------
// Modal de nuevo producto
// ------------------------
// Obtiene los elementos necesarios para controlar el modal
const newProductButton = document.getElementById("newProductButton");
const productModal = document.getElementById("productModal");
const productModalClose = document.getElementById("productModalClose");
const cancelProductButton = document.getElementById("cancelProductButton");

// Verifica que los elementos exixtan antes de agregar los eventos
if (newProductButton && productModal && productModalClose && cancelProductButton) {
    // Abre el modal para registrar un nuevo producto
    newProductButton.addEventListener("click", function () {
        productModal.showModal();
    });
    // cierra el modal desde el botón x
    productModalClose.addEventListener("click", function () {
        productModal.close();
    });
    // Cierra el modal desde el botón cancelar
    cancelProductButton.addEventListener("click", function () {
        productModal.close();
    });
}

// ---------------------
// Registro de productos
// ---------------------
// Obtiene el formulario utilizado para registrar productos
const productForm = document.getElementById("productForm");

if (productForm) {
    // Captura los datos cuando se envía el formulario
    productForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtiene y limpia los valores ingresados por el usuario
        const nombre = document.getElementById("productName").value.trim();
        const codigo = document.getElementById("productCode").value.trim();
        const categoria = document.getElementById("productCategory").value.trim();

        // Convierte los valores numéricos por que los inputs devuelven texto
        const precio = Number(
            document.getElementById("productPrice").value
        );

        const cantidad = Number(
            document.getElementById("productQuantity").value
        );

        const stockMinimo = Number(
            document.getElementById("productMinStock").value
        );

        // Crea el objeto que representa al producto
        const producto = {
            id: Date.now(),
            codigo,
            nombre,
            categoria,
            precio,
            cantidad,
            stockMinimo,
            fechaCreacion: new Date().toISOString(),
            fechaActualizacion: new Date().toISOString()
        };

        // Obtiene los productos almacenados
        const productos = obtenerProductos();

        // Agrega el nuevo producto al arreglo
        productos.push(producto);

        // Guarda el arreglo completo
        guardarProductos(productos);

        // muestra el producto nuevo sin recargar la página
        mostrarProductos();

        // Limpia el formulario después de registro
        productForm.reset()

        // Cierra el modal despuesde guardar
        productModal.close();
    });
}

// --------------------
// Listado de productos
// --------------------
// Obtiene el cuerpo de la tabla dondese mostraran los productos
const productsTableBody = document.getElementById("productsTableBody");

// Muestra en la tabla los productos almacenados
function mostrarProductos() {
    const productos = obtenerProductos();

    // Limpia la tabla antesde volver a generar las filas
    productsTableBody.innerHTML = "";

    // Recorre cada producto almacenado
    productos.forEach(function (producto) {

        // Crea dinámicamente una fila <tr> por cada producto almacenado.
        // Las filas no se escriben directamente en el HTML porque no se sabe de antemano
        // cuántos productos habrá; JavaScript genera una fila según los datos de localStorage
        const fila = document.createElement("tr");

        // Inserta en la fila los datos del producto y sus botones de acción.
        // Cada botón recibe el ID del producto mediante data-product-id para poder
        // identificar qué producto se desea editar o eliminar
        fila.innerHTML = `<td>${producto.nombre}</td> <td>${producto.categoria}</td> <td>${producto.precio}</td> <td>${producto.cantidad}</td> <td>${producto.cantidad <= producto.stockMinimo ? "Stock bajo" : "Disponible"}</td> 
        <td><button class="dashboard__action-button dashboard__action-button--edit" type="button" data-product-id="${producto.id}">Editar</button>
        <button class="dashboard__action-button dashboard__action-button--delete" type="button" data-product-id="${producto.id}">Eliminar</button></td>`;

        // Agrega la fila al cuerpo de la tabla
        productsTableBody.appendChild(fila);

    });
}

// muestra los productos que ya estaban guardados cuando abres o recargas la página
mostrarProductos();

// ------------------------
// Eliminación de productos
// ------------------------
// Elimina un producto utilizando su identificador 
function eliminarProducto(productId) {

    // Obtiene todos los productos almacenados
    const productos = obtenerProductos();

    // Crea un nuevo arreglo excluyendo el producto seleccionado
    const productosActualizados = productos.filter(function (producto) {
        return producto.id !== productId;
    });

    // Guarda nuevamente el arreglo sin el producto eliminado
    guardarProductos(productosActualizados);

    // Actualiza el listado visible 
    mostrarProductos();
}

// Datecta los clics realizados dentro de la tabla de productos
productsTableBody.addEventListener("click", function (event) {

    // Verifica si el elemento pulsado es un botón de eliminar
    if (event.target.classList.contains("dashboard__action-button--delete")) {

        // Obtiene el ID almacenado en el atributo data-product-id
        const productId = Number(event.target.dataset.productId);

        // TODO: Reemplazar confirm() por el modal personalizado definido en dashboard.html.
        // Cuando se implemente:
        // 1. Obtener y guardar temporalmente el ID del producto seleccionado.
        // 2. Abrir el modal de confirmación.
        // 3. Si el usuario confirma, ejecutar eliminarProducto(productId).
        // 4. Si cancela, cerrar el modal sin eliminar el producto.

        // Solicita confirmación antes de eliminar el producto.
        // Se usa confirm() temporalmente hasta implementar el modal personalizado.
        const confirmarEliminacion = confirm(
            "¿Deseas eliminar este producto?"
        );

        if (confirmarEliminacion) {
            eliminarProducto(productId);
        }
    }
});
