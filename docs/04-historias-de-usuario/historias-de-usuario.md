# Historias de Usuario — CRUD Inventario

## 1. Introducción

Las historias de usuario describen las funcionalidades del sistema desde la perspectiva de las personas que utilizarán la aplicación.

Para la versión 1.0 de CRUD Inventario se utilizará la estructura:

**Como [tipo de usuario], quiero [acción], para [beneficio].**

Cada historia se relaciona con un requisito funcional y un caso de uso previamente definidos, permitiendo mantener trazabilidad entre las diferentes etapas del proyecto.

---

## HU-01 — Registrar cuenta

**Requisito relacionado:** RF-01
**Caso de uso relacionado:** CU-01
**Prioridad:** Alta
**Puntos estimados:** 5

### Historia

**Como nuevo usuario, quiero crear una cuenta para poder acceder al sistema de gestión de inventarios.**

### Criterios de aceptación

* El usuario puede acceder al formulario de registro.
* Se solicitan nombre, correo electrónico, nombre de usuario, contraseña y confirmación de contraseña.
* Los campos obligatorios son validados.
* El correo debe tener un formato válido.
* El nombre de usuario no puede estar registrado previamente.
* La contraseña y su confirmación deben coincidir.
* La cuenta se almacena correctamente.
* El sistema muestra un mensaje de registro exitoso.
* Después del registro, el usuario puede iniciar sesión.
* El correo electrónico no puede estar registrado previamente.

---

## HU-02 — Iniciar sesión

**Requisito relacionado:** RF-02
**Caso de uso relacionado:** CU-02
**Prioridad:** Alta
**Puntos estimados:** 5

### Historia

**Como usuario registrado, quiero iniciar sesión con mis credenciales para acceder al sistema de inventarios.**

### Criterios de aceptación

* El usuario puede ingresar su nombre de usuario y contraseña.
* Los campos obligatorios son validados.
* Las credenciales correctas permiten el acceso.
* Las credenciales incorrectas generan un mensaje de error.
* Después de autenticarse correctamente, el usuario es dirigido al dashboard.
* Se establece una sesión local.

---

## HU-03 — Visualizar dashboard

**Requisito relacionado:** RF-03
**Caso de uso relacionado:** CU-03
**Prioridad:** Alta
**Puntos estimados:** 3

### Historia

**Como usuario autenticado, quiero visualizar un panel principal para acceder fácilmente a las funciones del inventario.**

### Criterios de aceptación

* El dashboard se muestra después de iniciar sesión.
* El dashboard solo puede utilizarse cuando existe una sesión activa.
* Si no existe una sesión activa, el usuario es dirigido a la pantalla de inicio de sesión.
* Se muestran accesos a las principales funcionalidades.
* El usuario puede acceder al módulo de productos.
* Se muestra información básica relacionada con el inventario.
* Existe una opción para cerrar sesión.

---

## HU-04 — Registrar producto

**Requisito relacionado:** RF-04
**Caso de uso relacionado:** CU-04
**Prioridad:** Alta
**Puntos estimados:** 5

### Historia

**Como administrador, quiero registrar nuevos productos para mantener actualizado el inventario.**

### Criterios de aceptación

* El sistema muestra un formulario para registrar productos.
* Se puede ingresar código, nombre, categoría, precio, cantidad y stock mínimo.
* Los campos obligatorios son validados.
* El código del producto debe ser único.
* Precio, cantidad y stock mínimo deben contener valores válidos.
* El producto se almacena correctamente.
* El nuevo producto aparece inmediatamente en el listado.
* El sistema muestra una confirmación.

---

## HU-05 — Consultar productos

**Requisito relacionado:** RF-05
**Caso de uso relacionado:** CU-05
**Prioridad:** Alta
**Puntos estimados:** 3

### Historia

**Como administrador, quiero visualizar los productos registrados para consultar el estado actual del inventario.**

### Criterios de aceptación

* El sistema muestra un listado de productos.
* Se visualiza la información principal de cada producto.
* Los datos mostrados coinciden con los datos almacenados.
* El listado se actualiza después de registrar, editar o eliminar productos.
* Los productos permanecen disponibles después de recargar la página.
* Si no existen productos, se informa que el inventario está vacío.

---

## HU-06 — Actualizar producto

**Requisito relacionado:** RF-06
**Caso de uso relacionado:** CU-06
**Prioridad:** Alta
**Puntos estimados:** 5

### Historia

**Como administrador, quiero modificar la información de un producto para mantener los datos del inventario actualizados.**

### Criterios de aceptación

* Se puede seleccionar un producto existente.
* El sistema muestra los datos actuales del producto.
* El usuario puede modificar la información permitida.
* Los nuevos datos son validados.
* No se permite utilizar un código perteneciente a otro producto.
* Los cambios se almacenan correctamente.
* El listado muestra inmediatamente la nueva información.
* El sistema confirma la actualización.

---

## HU-07 — Eliminar producto

**Requisito relacionado:** RF-07
**Caso de uso relacionado:** CU-07
**Prioridad:** Alta
**Puntos estimados:** 3

### Historia

**Como administrador, quiero eliminar productos que ya no necesito para mantener organizado el inventario.**

### Criterios de aceptación

* El usuario puede seleccionar la opción de eliminar.
* El sistema solicita confirmación antes de realizar la operación.
* Si el usuario cancela, el producto permanece almacenado.
* Si el usuario confirma, el producto es eliminado.
* El producto desaparece del listado.
* La eliminación permanece después de recargar la aplicación.

---

## HU-08 — Buscar productos

**Requisito relacionado:** RF-08
**Caso de uso relacionado:** CU-08
**Prioridad:** Alta
**Puntos estimados:** 3

### Historia

**Como administrador, quiero buscar productos por nombre o código para encontrarlos rápidamente dentro del inventario.**

### Criterios de aceptación

* Existe un campo de búsqueda.
* Se puede buscar por nombre.
* Se puede buscar por código.
* Los resultados coincidentes se muestran al usuario.
* Si no existen resultados, el sistema informa que no se encontraron productos.
* Al limpiar la búsqueda se muestra nuevamente el listado completo.

---

## HU-09 — Clasificar productos por categoría

**Requisito relacionado:** RF-09
**Caso de uso relacionado:** CU-09
**Prioridad:** Media
**Puntos estimados:** 3

### Historia

**Como administrador, quiero asignar categorías a los productos para organizar mejor el inventario.**

### Criterios de aceptación

* Se puede seleccionar una categoría al registrar un producto.
* La categoría queda asociada al producto.
* La categoría se almacena junto con los demás datos.
* La categoría aparece en el listado de productos.
* Puede modificarse cuando se edita el producto.

---

## HU-10 — Controlar existencias

**Requisito relacionado:** RF-10
**Caso de uso relacionado:** CU-10
**Prioridad:** Alta
**Puntos estimados:** 3

### Historia

**Como administrador, quiero conocer la cantidad disponible de cada producto para controlar las existencias del inventario.**

### Criterios de aceptación

* Cada producto almacena una cantidad disponible.
* La cantidad aparece en el listado.
* La cantidad puede modificarse mediante la edición del producto.
* No se aceptan cantidades inválidas.
* La nueva cantidad se almacena correctamente.
* La información se conserva después de recargar la aplicación.

---

## HU-11 — Visualizar alertas de stock bajo

**Requisito relacionado:** RF-11
**Caso de uso relacionado:** CU-11
**Prioridad:** Media
**Puntos estimados:** 3

### Historia

**Como administrador, quiero identificar los productos con bajo stock para saber cuáles necesitan reposición.**

### Criterios de aceptación

* Cada producto tiene definido un stock mínimo.
* El sistema compara la cantidad disponible con el stock mínimo.
* Si la cantidad es igual o inferior al stock mínimo, el producto se identifica visualmente.
* Si existe stock suficiente, no se muestra la alerta.
* La alerta cambia automáticamente cuando se modifica la cantidad.

---

## HU-12 — Cerrar sesión

**Requisito relacionado:** RF-12
**Caso de uso relacionado:** CU-12
**Prioridad:** Alta
**Puntos estimados:** 2

### Historia

**Como usuario autenticado, quiero cerrar mi sesión para finalizar de manera controlada mi acceso al sistema.**

### Criterios de aceptación

* Existe una opción visible para cerrar sesión.
* Al seleccionar la opción se elimina la sesión activa.
* El usuario es dirigido nuevamente al inicio de sesión.
* Las páginas protegidas no pueden utilizarse sin volver a iniciar sesión.

---

# Matriz de trazabilidad inicial

| Requisito | Caso de uso | Historia de usuario | Funcionalidad       |
| --------- | ----------- | ------------------- | ------------------- |
| RF-01     | CU-01       | HU-01               | Registrar cuenta    |
| RF-02     | CU-02       | HU-02               | Iniciar sesión      |
| RF-03     | CU-03       | HU-03               | Dashboard           |
| RF-04     | CU-04       | HU-04               | Registrar producto  |
| RF-05     | CU-05       | HU-05               | Consultar productos |
| RF-06     | CU-06       | HU-06               | Actualizar producto |
| RF-07     | CU-07       | HU-07               | Eliminar producto   |
| RF-08     | CU-08       | HU-08               | Buscar productos    |
| RF-09     | CU-09       | HU-09               | Categorías          |
| RF-10     | CU-10       | HU-10               | Existencias         |
| RF-11     | CU-11       | HU-11               | Stock bajo          |
| RF-12     | CU-12       | HU-12               | Cerrar sesión       |

---

## Estado

Las historias de usuario corresponden al alcance definido para la versión 1.0 del sistema.

Podrán actualizarse durante el desarrollo cuando se identifiquen nuevas necesidades o sea necesario modificar el alcance del producto.
