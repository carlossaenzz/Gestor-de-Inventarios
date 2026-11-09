# Casos de Prueba — CRUD Inventario

## CP-01 — Registrar usuario correctamente

**Requisito:** RF-01  
**Historia:** HU-01  
**Caso de uso:** CU-01

**Precondición:**  
El usuario no debe estar registrado.

**Pasos:**

1. Abrir la pantalla de registro.
2. Completar todos los campos correctamente.
3. Ingresar contraseña y confirmación iguales.
4. Seleccionar Registrarse.

**Resultado esperado:**  
El usuario queda registrado y el sistema muestra una confirmación.

**Resultado obtenido:**  
El usuario se registró correctamente y la información quedó almacenada en localStorage

**Estado:** Aprobado.

---

## CP-02 — Intentar registrar usuario con campos vacíos

**Requisito:** RF-01

**Pasos:**

1. Abrir el formulario de registro.
2. Dejar uno o varios campos obligatorios vacíos.
3. Intentar registrarse.

**Resultado esperado:**  
El sistema impide el registro e informa qué campos deben completarse.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-03 — Contraseñas de registro diferentes

**Requisito:** RF-01

**Pasos:**

1. Completar el formulario.
2. Ingresar dos contraseñas diferentes.
3. Intentar registrarse.

**Resultado esperado:**  
El sistema informa que las contraseñas no coinciden.

**Resultado obtenido:**  
El sistema detectó que las contraseñas ingresadas no coincidían e impidió completar el registro.

**Estado:** Aprobado.

---

## CP-04 — Iniciar sesión correctamente

**Requisito:** RF-02  
**Historia:** HU-02  
**Caso de uso:** CU-02

**Precondición:**  
Debe existir un usuario registrado.

**Pasos:**

1. Abrir el login.
2. Introducir credenciales válidas.
3. Seleccionar Iniciar sesión.

**Resultado esperado:**  
El usuario accede al dashboard.

**Resultado obtenido:**  
El usuario inició sesión correctamente y fue dirigido al dashboard.

**Estado:** Aprobado.

---

## CP-05 — Iniciar sesión con credenciales incorrectas

**Requisito:** RF-02

**Resultado esperado:**  
El sistema rechaza el acceso y muestra un mensaje de error.

**Resultado obtenido:**  
El sistema rechazó las credenciales incorrectas e impidió el acceso al dashboard.

**Estado:** Pendiente.

---

## CP-06 — Registrar producto correctamente

**Requisito:** RF-04  
**Historia:** HU-04  
**Caso de uso:** CU-04

**Pasos:**

1. Acceder al módulo de productos.
2. Seleccionar Registrar producto.
3. Completar código, nombre, categoría, precio, cantidad y stock mínimo.
4. Guardar.

**Resultado esperado:**  
El producto queda almacenado y aparece en el listado.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-07 — Intentar registrar código duplicado

**Requisito:** RF-04

**Precondición:**  
Debe existir previamente un producto.

**Pasos:**

1. Intentar registrar otro producto con el mismo código.
2. Guardar.

**Resultado esperado:**  
El sistema impide el registro e informa que el código ya existe.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-08 — Consultar productos

**Requisito:** RF-05  
**Historia:** HU-05  
**Caso de uso:** CU-05

**Resultado esperado:**  
El sistema muestra correctamente todos los productos almacenados.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-09 — Actualizar producto

**Requisito:** RF-06  
**Historia:** HU-06  
**Caso de uso:** CU-06

**Pasos:**

1. Seleccionar un producto.
2. Seleccionar Editar.
3. Modificar información.
4. Guardar cambios.

**Resultado esperado:**  
La nueva información queda almacenada y visible.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-10 — Eliminar producto

**Requisito:** RF-07  
**Historia:** HU-07  
**Caso de uso:** CU-07

**Pasos:**

1. Seleccionar Eliminar.
2. Confirmar la operación.

**Resultado esperado:**  
El producto desaparece del inventario.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-11 — Cancelar eliminación

**Requisito:** RF-07

**Resultado esperado:**  
El producto permanece almacenado.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-12 — Buscar producto por nombre

**Requisito:** RF-08

**Resultado esperado:**  
El sistema muestra los productos cuyo nombre coincide con la búsqueda.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-13 — Buscar producto por código

**Requisito:** RF-08

**Resultado esperado:**  
El sistema muestra el producto correspondiente al código ingresado.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-14 — Búsqueda sin resultados

**Requisito:** RF-08

**Resultado esperado:**  
El sistema informa que no existen coincidencias.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-15 — Asignar categoría

**Requisito:** RF-09

**Resultado esperado:**  
La categoría queda asociada y visible en el producto.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-16 — Actualizar cantidad

**Requisito:** RF-10

**Resultado esperado:**  
La nueva cantidad queda almacenada correctamente.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-17 — Detectar stock bajo

**Requisito:** RF-11  
**Historia:** HU-11  
**Caso de uso:** CU-11

**Datos de prueba:**

Cantidad: `3`  
Stock mínimo: `5`

**Resultado esperado:**  
El producto se identifica visualmente como producto con stock bajo.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-18 — Stock suficiente

**Requisito:** RF-11

**Datos de prueba:**

Cantidad: `10`  
Stock mínimo: `5`

**Resultado esperado:**  
El producto no presenta alerta de stock bajo.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-19 — Persistencia después de recargar

**Requisito:** RNF-03

**Pasos:**

1. Registrar un producto.
2. Recargar la página.
3. Consultar nuevamente el inventario.

**Resultado esperado:**  
El producto continúa almacenado y visible.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-20 — Cerrar sesión

**Requisito:** RF-12

**Pasos:**

1. Iniciar sesión.
2. Seleccionar Cerrar sesión.

**Resultado esperado:**  
La sesión termina y el usuario regresa al login.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.

---

## CP-21 — Intentar acceder sin sesión

**Requisito:** RF-12 / RNF-06

**Pasos:**

1. Cerrar sesión.
2. Intentar acceder directamente al dashboard.

**Resultado esperado:**  
El sistema impide el acceso y dirige al usuario al inicio de sesión.

**Resultado obtenido:**  
El sistema detectó que no existía una sesión activa e impidió el acceso al `dashboard`, redirigiendo al usuario al inicio de sesión.

**Estado:** Aprobado.

## CP-22 — Intentar registrar nombre de usuario duplicado

**Requisito:** RF-01  
**Historia:** HU-01  
**Caso de uso:** CU-01  

**Precondición:**  
Debe existir previamente un usuario registrado con el mismo nombre de usuario.

**Pasos:**

1. Abrir la pantalla de registro.
2. Completar correctamente los campos obligatorios.
3. Ingresar un nombre de usuario que ya se encuentre registrado.
4. Ingresar una contraseña y confirmación válidas.
5. Seleccionar **Registrarse**.

**Resultado esperado:**  
El sistema impide crear la cuenta e informa que el nombre de usuario ya se encuentra registrado.

**Resultado obtenido:**  
El sistema detectó que el nombre de usuario ya se encontraba registrado e impidió crear una nueva cuenta con el mismo `username`.

**Estado:** Pendiente.

---

## CP-23 — Intentar registrar correo electrónico duplicado

**Requisito:** RF-01  
**Historia:** HU-01  
**Caso de uso:** CU-01  

**Precondición:**  
Debe existir previamente un usuario registrado con el mismo correo electrónico.

**Pasos:**

1. Abrir la pantalla de registro.
2. Completar correctamente los campos obligatorios.
3. Ingresar un correo electrónico que ya se encuentre registrado.
4. Utilizar un nombre de usuario diferente.
5. Ingresar una contraseña y confirmación válidas.
6. Seleccionar **Registrarse**.

**Resultado esperado:**  
El sistema impide crear la cuenta e informa que el correo electrónico ya se encuentra registrado.

**Resultado obtenido:**  
El sistema detectó que el correo electrónico ya se encontraba registrado e impidió crear una nueva cuenta utilizando el mismo correo.

**Estado:** Aprobado.

---

## CP-24 — Intentar registrar correo electrónico con formato inválido

**Requisito:** RF-01  
**Historia:** HU-01  
**Caso de uso:** CU-01  

**Precondición:**  
El usuario se encuentra en la pantalla de registro.

**Pasos:**

1. Completar los campos obligatorios del formulario.
2. Ingresar un correo electrónico con formato inválido.
3. Ingresar un nombre de usuario disponible.
4. Ingresar una contraseña y confirmación válidas.
5. Seleccionar **Registrarse**.

**Resultado esperado:**  
El sistema impide completar el registro e informa que el correo electrónico ingresado no tiene un formato válido.

**Resultado obtenido:**  
Pendiente.

**Estado:** Pendiente.