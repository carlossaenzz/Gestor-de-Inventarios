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

// Obtiene el titulo del modal
const productModalTitle = document.getElementById("productModalTitle");

// Guarda temporalmente el ID del producto que se está editando
let productoEditandoId = null; // Esta variable funciona como un estado

// Verifica que el formulario exista antes de agregar el evento submit
if (productForm) {
    // Captura los datos cuando se envía el formulario
    productForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Obtiene y limpia los valores ingresados por el usuario
        const nombre = document.getElementById("productName").value.trim();
        const codigo = document.getElementById("productCode").value.trim();
        const categoria = document.getElementById("productCategory").value.trim();

        // TODO: Formatear el precio con separadores de miles en el formulario y mantener el valor numérico correcto para cálculos y localStorage.
        // Convierte los valores numéricos por que los inputs de vuelven texto
        const precio = Number(
            document.getElementById("productPrice").value
        );

        const cantidad = Number(
            document.getElementById("productQuantity").value
        );

        const stockMinimo = Number(
            document.getElementById("productMinStock").value
        );

        // Obtiene los productos almacenados
        const productos = obtenerProductos();

        // Verifica si el formulario está editando un producto existente
        // EDITAR producto existente
        if (productoEditandoId !== null) {

            // Busca la posición del producto dentro del arreglo
            const productoIndex = productos.findIndex(function (producto) {
                return producto.id === productoEditandoId;
            });

            // Actualiza el producto
            if (productoIndex !== -1) {

                productos[productoIndex] = {

                    // Esto se llama spread operator
                    // Copia las propiedades que ya tenía el producto
                    ...productos[productoIndex],
                    codigo,
                    nombre,
                    categoria,
                    precio,
                    cantidad,
                    stockMinimo,
                    fechaActualizacion: new Date().toDateString()
                };
            }

        } else {

            // Crea el objeto que representa al producto
            // CREAR producto nuevo
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

            // Agrega el producto al inicio del arreglo para mostrar primero los productos registrados más recientemente
            productos.unshift(producto);

        }

        // Guarda el arreglo completo
        guardarProductos(productos);

        // muestra el producto nuevo sin recargar la página
        mostrarProductos();

        // Limpia el formulario después de registro
        productForm.reset()

        // Restablece el estado de edición
        productoEditandoId = null;

        // Devuelve el título del modal a su estado inicial
        productModalTitle.textContent = "Nuevo producto";

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

        // TODO: Mostrar el precio con separadores de miles en la tabla.
        // const precioFormateado = new Intl.NumberFormat("es-CO").format(producto.precio);

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

// --------------------
// Edición de productos
// --------------------
// Carga en el formulario los datos del producto seleccionado
function cargarProductoParaEditar(productId) {

    // Obtiene loo productos almacenados
    const productos = obtenerProductos();

    // Busca el producto que tenga el ID seleccionado
    const productoEncontrado = productos.find(function (producto) {
        return producto.id === productId;
    });

    // Detiene la función si el producto no existe
    if (!productoEncontrado) {
        return;
    }

    // Guarda el ID para saber que el formulario está en modo edición
    productoEditandoId = productoEncontrado.id;

    // Carga los datos actuales del producto en los campos del formulario
    document.getElementById("productName").value = productoEncontrado.nombre;

    document.getElementById("productCode").value = productoEncontrado.codigo;

    document.getElementById("productCategory").value = productoEncontrado.categoria;

    document.getElementById("productPrice").value = productoEncontrado.precio;

    document.getElementById("productQuantity").value = productoEncontrado.cantidad;

    document.getElementById("productMinStock").value = productoEncontrado.stockMinimo;

    // Cambia el título para indicar que se está editando un producto
    productModalTitle.textContent = "Editar producto";

    // Abre el mismo modal utilizado para registrar productos
    productModal.showModal();

}

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

// -------------------
// Eventos de la tabla
// -------------------
// Datecta los clics realizados dentro de la tabla de productos
productsTableBody.addEventListener("click", function (event) {

    // Verifica si el elemento pulsado es un botón de editar
    if (event.target.classList.contains("dashboard__action-button--edit")) {

        // Obtiene el ID del producto seleccionado
        const productId = Number(event.target.dataset.productId);

        // Carga los datos del producto en el formulario
        cargarProductoParaEditar(productId);
    }

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
