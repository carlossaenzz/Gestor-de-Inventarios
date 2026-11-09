# Casos de Uso — CRUD Inventario

## 1. Introducción

Los casos de uso describen la interacción entre los usuarios y el sistema CRUD Inventario para alcanzar un objetivo específico.

Cada caso de uso se relaciona con uno o varios requisitos funcionales definidos para la versión 1.0 del sistema.

---

## CU-01 — Registrar cuenta

**Requisito relacionado:** RF-01
**Actor principal:** Nuevo usuario.

**Objetivo:**
Crear una cuenta que permita posteriormente iniciar sesión en el sistema.

**Precondiciones:**
El usuario no debe tener una cuenta registrada con el mismo nombre de usuario ni con el mismo correo electrónico.

### Flujo principal

1. El usuario accede a la opción **Registrarse**.
2. El sistema muestra el formulario de registro.
3. El usuario ingresa su nombre.
4. El usuario ingresa su correo electrónico.
5. El usuario define un nombre de usuario.
6. El usuario ingresa una contraseña.
7. El usuario confirma la contraseña.
8. El usuario selecciona la opción **Registrarse**.
9. El sistema valida la información ingresada.
10. El sistema almacena la cuenta.
11. El sistema muestra un mensaje de registro exitoso.
12. El usuario es dirigido a la pantalla de inicio de sesión.

### Flujos alternativos

**A1 — Campos incompletos**
Si existen campos obligatorios vacíos, el sistema informa cuáles deben completarse y no realiza el registro.

**A2 — Contraseñas diferentes**
Si la contraseña y la confirmación no coinciden, el sistema muestra un mensaje de error.

**A3 — Usuario existente**
Si el nombre de usuario ya se encuentra registrado, el sistema solicita utilizar otro.

**A4 — Correo inválido**
Si el formato del correo electrónico no es válido, el sistema informa el error.

**A5 — Correo existente**
Si el correo electrónico ya se encuentra registrado, el sistema informa al usuario y no realiza el registro.

**Postcondición:**
La nueva cuenta queda almacenada y disponible para iniciar sesión.

---

## CU-02 — Iniciar sesión

**Requisito relacionado:** RF-02
**Actor principal:** Usuario registrado.

**Objetivo:**
Acceder al sistema utilizando credenciales válidas.

**Precondiciones:**
El usuario debe contar con una cuenta registrada.

### Flujo principal

1. El usuario accede a la pantalla de inicio de sesión.
2. El sistema muestra los campos de usuario y contraseña.
3. El usuario ingresa sus credenciales.
4. El usuario selecciona la opción **Iniciar sesión**.
5. El sistema valida los datos ingresados.
6. El sistema comprueba las credenciales almacenadas.
7. Las credenciales son correctas.
8. El sistema crea una sesión local.
9. El usuario es dirigido al dashboard.

### Flujos alternativos

**A1 — Campos vacíos**
El sistema solicita completar los campos obligatorios.

**A2 — Credenciales incorrectas**
El sistema muestra un mensaje indicando que el usuario o contraseña son incorrectos.

**Postcondición:**
Existe una sesión activa y el usuario puede acceder a las funcionalidades protegidas.

---

## CU-03 — Visualizar dashboard

**Requisito relacionado:** RF-03
**Actor principal:** Usuario autenticado.

**Objetivo:**
Acceder al panel principal del sistema.

**Precondiciones:**
Debe existir una sesión activa.

### Flujo principal

1. El usuario inicia sesión correctamente.
2. El sistema dirige al usuario al dashboard.
3. El sistema carga la información básica del inventario.
4. El sistema muestra las opciones disponibles.
5. El usuario selecciona el módulo que desea utilizar.

### Flujos alternativos

**A1 — Sesion inexistente**
Si no existe una sesión activa, el sistema impide el acceso al dashboard y dirige al usuario a la pantalla de inicio de sesión.


**Postcondición:**
El usuario puede navegar hacia las diferentes funcionalidades del sistema.

---

## CU-04 — Registrar producto

**Requisito relacionado:** RF-04
**Actor principal:** Usuario autenticado.

**Objetivo:**
Agregar un nuevo producto al inventario.

**Precondiciones:**
El usuario debe haber iniciado sesión.

### Flujo principal

1. El usuario accede al módulo de productos.
2. El usuario selecciona **Registrar producto**.
3. El sistema muestra el formulario.
4. El usuario ingresa código, nombre, categoría, precio, cantidad y stock mínimo.
5. El usuario selecciona **Guardar**.
6. El sistema valida los datos.
7. El sistema comprueba que el código no esté repetido.
8. El sistema crea el producto.
9. El producto se almacena en `localStorage`.
10. El sistema actualiza el listado.
11. El sistema muestra una confirmación.

### Flujos alternativos

**A1 — Campos obligatorios vacíos**
El sistema muestra los errores correspondientes.

**A2 — Código duplicado**
El sistema informa que ya existe un producto con ese código.

**A3 — Datos numéricos inválidos**
El sistema informa que precio, cantidad o stock mínimo contienen valores incorrectos.

**Postcondición:**
El producto queda registrado en el inventario.

---

## CU-05 — Consultar productos

**Requisito relacionado:** RF-05
**Actor principal:** Usuario autenticado.

**Objetivo:**
Consultar los productos almacenados.

**Precondiciones:**
El usuario debe haber iniciado sesión.

### Flujo principal

1. El usuario accede al módulo de productos.
2. El sistema obtiene los productos almacenados.
3. El sistema muestra el listado.
4. El usuario consulta la información disponible.

### Flujo alternativo

**A1 — Inventario vacío**
Si no existen productos, el sistema informa que todavía no hay productos registrados.

**Postcondición:**
El usuario visualiza la información actual del inventario.

---

## CU-06 — Actualizar producto

**Requisito relacionado:** RF-06
**Actor principal:** Usuario autenticado.

**Objetivo:**
Modificar la información de un producto existente.

**Precondiciones:**
El usuario debe tener una sesión activa y el producto debe existir.

### Flujo principal

1. El usuario localiza el producto.
2. El usuario selecciona **Editar**.
3. El sistema muestra los datos actuales.
4. El usuario modifica la información necesaria.
5. El usuario selecciona **Guardar cambios**.
6. El sistema valida los nuevos datos.
7. El sistema actualiza el producto.
8. La información modificada se almacena en `localStorage`.
9. El listado se actualiza.
10. El sistema muestra una confirmación.

### Flujos alternativos

**A1 — Información inválida**
El sistema informa los errores encontrados y no realiza la actualización.

**A2 — Código perteneciente a otro producto**
El sistema informa que el código ya está siendo utilizado.

**Postcondición:**
La información actualizada queda almacenada.

---

## CU-07 — Eliminar producto

**Requisito relacionado:** RF-07
**Actor principal:** Usuario autenticado.

**Objetivo:**
Eliminar un producto del inventario.

**Precondiciones:**
El producto debe estar registrado.

### Flujo principal

1. El usuario localiza el producto.
2. El usuario selecciona **Eliminar**.
3. El sistema solicita confirmación.
4. El usuario confirma la operación.
5. El sistema elimina el producto.
6. El sistema actualiza `localStorage`.
7. El listado se actualiza.
8. El sistema informa que el producto fue eliminado.

### Flujo alternativo

**A1 — Cancelar eliminación**
Si el usuario cancela la confirmación, el sistema conserva el producto.

**Postcondición:**
El producto deja de formar parte del inventario.

---

## CU-08 — Buscar productos

**Requisito relacionado:** RF-08
**Actor principal:** Usuario autenticado.

**Objetivo:**
Encontrar rápidamente un producto.

**Precondiciones:**
El usuario debe encontrarse en el módulo de productos.

### Flujo principal

1. El usuario selecciona el campo de búsqueda.
2. El usuario introduce un nombre o código.
3. El sistema compara el texto ingresado con los productos registrados.
4. El sistema muestra las coincidencias.
5. El usuario consulta el producto buscado.

### Flujos alternativos

**A1 — Sin coincidencias**
El sistema informa que no se encontraron productos.

**A2 — Búsqueda vacía**
El sistema muestra nuevamente todos los productos.

**Postcondición:**
El usuario obtiene los resultados relacionados con su búsqueda.

---

## CU-09 — Clasificar producto por categoría

**Requisito relacionado:** RF-09
**Actor principal:** Usuario autenticado.

**Objetivo:**
Organizar los productos mediante categorías.

**Precondiciones:**
El usuario debe estar registrando o editando un producto.

### Flujo principal

1. El usuario selecciona una categoría.
2. El sistema asocia la categoría con el producto.
3. El producto se guarda.
4. El sistema muestra la categoría en el listado.

**Postcondición:**
El producto queda asociado a una categoría.

---

## CU-10 — Controlar existencias

**Requisito relacionado:** RF-10
**Actor principal:** Usuario autenticado.

**Objetivo:**
Consultar y mantener actualizada la cantidad disponible de cada producto.

**Precondiciones:**
El usuario debe tener una sesión activa y el producto debe existir.

### Flujo principal

1. El sistema obtiene la cantidad almacenada.
2. El sistema muestra la existencia actual.
3. El usuario puede modificar la cantidad mediante la edición del producto.
4. El sistema valida el nuevo valor.
5. El sistema actualiza las existencias.

**Postcondición:**
La cantidad disponible del producto queda actualizada.

---

## CU-11 — Visualizar alerta de stock bajo

**Requisito relacionado:** RF-11
**Actor principal:** Usuario autenticado.

**Objetivo:**
Identificar productos que requieren reposición.

**Precondiciones:**
El producto debe tener definidos cantidad disponible y stock mínimo.

### Flujo principal

1. El sistema obtiene la cantidad disponible.
2. El sistema obtiene el stock mínimo.
3. El sistema compara ambos valores.
4. Si la cantidad es igual o inferior al stock mínimo, identifica el producto como stock bajo.
5. El sistema muestra una alerta o indicador visual.

### Flujo alternativo

**A1 — Stock suficiente**
Si la cantidad es superior al stock mínimo, no se muestra la alerta.

**Postcondición:**
El estado de stock del producto queda visible para el usuario.

---

## CU-12 — Cerrar sesión

**Requisito relacionado:** RF-12
**Actor principal:** Usuario autenticado.

**Objetivo:**
Finalizar la sesión actual.

**Precondiciones:**
Debe existir una sesión activa.

### Flujo principal

1. El usuario selecciona **Cerrar sesión**.
2. El sistema elimina la información correspondiente a la sesión activa.
3. El sistema dirige al usuario a la pantalla de inicio de sesión.
4. Las páginas protegidas dejan de estar disponibles sin autenticación.

**Postcondición:**
No existe una sesión activa.
