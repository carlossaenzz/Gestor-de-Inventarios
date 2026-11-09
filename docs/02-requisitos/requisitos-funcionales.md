# Requisitos Funcionales — CRUD Inventario

## 1. Introducción

Los requisitos funcionales describen las acciones y servicios que debe proporcionar el sistema CRUD Inventario.

Estos requisitos se derivan de las necesidades identificadas durante el proceso de elicitación y de la visión y alcance definidos para la versión 1.0 del proyecto.

Cada requisito cuenta con un identificador único que permitirá relacionarlo posteriormente con historias de usuario, casos de uso, código y pruebas.

---

# RF-01 — Registrar cuenta de usuario

**Descripción:**
El sistema deberá permitir que un nuevo usuario cree una cuenta para acceder al sistema de gestión de inventarios.

**Usuario:**
Nuevo usuario.

**Propósito:**
Permitir que una persona cree las credenciales necesarias para posteriormente iniciar sesión en el sistema.

**Prioridad:**
Alta.

**Datos iniciales de la cuenta:**

* Nombre.
* Correo electrónico.
* Nombre de usuario.
* Contraseña.
* Confirmación de contraseña.

**Criterios de aceptación:**

* El formulario deberá validar los campos obligatorios.
* El correo electrónico deberá contener un formato válido.
* El correo electronico no deberá estar registrado previamente.
* La contraseña y su confirmación deberán coincidir.
* El sistema no deberá permitir registrar una cuenta con campos obligatorios vacíos.
* Después de completar correctamente el formulario, la cuenta deberá almacenarse.
* El sistema deberá informar que el registro se realizó correctamente.
* Después del registro, el usuario deberá poder iniciar sesión con sus credenciales.

**Limitación de la versión 1.0:**
Las cuentas serán almacenadas localmente con fines de aprendizaje. Esta implementación no deberá considerarse un mecanismo de autenticación seguro para un entorno empresarial real.


## RF-02 — Iniciar sesión

**Descripción:**
El sistema deberá permitir que el usuario ingrese mediante un formulario de inicio de sesión utilizando sus credenciales.

**Usuario:**
Administrador.

**Propósito:**
Controlar el acceso al sistema antes de permitir la gestión del inventario.

**Prioridad:**
Alta.

**Criterios de aceptación:**

* El formulario deberá solicitar usuario y contraseña.
* Los campos obligatorios deberán validarse.
* El sistema deberá comprobar las credenciales ingresadas.
* Las credenciales válidas deberán permitir el acceso al sistema.
* Las credenciales incorrectas deberán mostrar un mensaje de error.
* Después de iniciar sesión correctamente, el usuario deberá ser dirigido al dashboard.
* Después de validar correctamente las credenciales, el sistema deberá crear una sesión para identificar al usuario autenticado.
* La sesión deberá crearse únicamente cuando las credenciales sean validas.

> En la versión 1.0 la autenticación será implementada con fines de aprendizaje y no representará todavía un sistema de seguridad empresarial definitivo.

---

## RF-03 — Visualizar dashboard

**Descripción:**
El sistema deberá mostrar un panel principal después de que el usuario haya iniciado sesión correctamente.

**Usuario:**
Administrador.

**Propósito:**
Proporcionar un punto central desde el cual el usuario pueda acceder a las principales funciones del inventario.

**Prioridad:**
Alta.

**Criterios de aceptación:**

* El acceso al dashboard deberá requerir una sesión activa.
* Si no existe una sesión activa, el usuario deberá se dirigido al a pantalla de inicio de sesión.
* El dashboard deberá mostrarse después de iniciar sesión.
* Deberá permitir acceder al módulo de productos.
* Deberá mostrar información básica relacionada con el inventario.
* Deberá permitir cerrar la sesión.

---

## RF-04 — Registrar productos

**Descripción:**
El sistema deberá permitir registrar nuevos productos dentro del inventario mediante un formulario.

**Usuario:**
Administrador.

**Propósito:**
Mantener actualizado el inventario con la información de los productos disponibles.

**Prioridad:**
Alta.

**Datos iniciales del producto:**

* Código.
* Nombre.
* Categoría.
* Precio.
* Cantidad.
* Stock mínimo.

**Criterios de aceptación:**

* Los campos obligatorios deberán validarse.
* El código del producto deberá ser único.
* El precio deberá contener un valor válido.
* La cantidad deberá contener un valor válido.
* El stock mínimo deberá contener un valor válido.
* El producto deberá almacenarse correctamente.
* El sistema deberá mostrar una confirmación después del registro.
* El nuevo producto deberá aparecer en el listado de productos.

---

## RF-05 — Consultar productos

**Descripción:**
El sistema deberá permitir visualizar los productos registrados en el inventario.

**Usuario:**
Administrador.

**Propósito:**
Facilitar la consulta y control de la información almacenada.

**Prioridad:**
Alta.

**Criterios de aceptación:**

* El sistema deberá mostrar un listado de productos.
* Cada producto deberá mostrar su información principal.
* La información mostrada deberá coincidir con los datos almacenados.
* El listado deberá actualizarse después de registrar, modificar o eliminar un producto.
* Los productos almacenados deberán continuar disponibles después de recargar la página mientras permanezcan guardados en `localStorage`.

---

## RF-06 — Actualizar productos

**Descripción:**
El sistema deberá permitir modificar la información de un producto existente.

**Usuario:**
Administrador.

**Propósito:**
Mantener actualizada y corregir la información del inventario.

**Prioridad:**
Alta.

**Criterios de aceptación:**

* El usuario deberá poder seleccionar un producto existente.
* El sistema deberá mostrar la información actual del producto.
* El usuario deberá poder modificar los campos permitidos.
* Los nuevos valores deberán ser validados.
* Los cambios deberán almacenarse correctamente.
* El listado deberá reflejar inmediatamente la información actualizada.
* El sistema deberá mostrar una confirmación después de guardar los cambios.

---

## RF-07 — Eliminar productos

**Descripción:**
El sistema deberá permitir eliminar productos registrados en el inventario.

**Usuario:**
Administrador.

**Propósito:**
Retirar registros incorrectos o productos que ya no deban permanecer en el inventario.

**Prioridad:**
Alta.

**Criterios de aceptación:**

* El usuario deberá poder seleccionar la opción de eliminar un producto.
* El sistema deberá solicitar confirmación antes de realizar la eliminación.
* Si el usuario cancela la operación, el producto deberá mantenerse.
* Si confirma la operación, el producto deberá eliminarse de `localStorage`.
* El producto eliminado deberá desaparecer del listado.

---

## RF-08 — Buscar productos

**Descripción:**
El sistema deberá permitir localizar productos mediante un campo de búsqueda.

**Usuario:**
Administrador.

**Propósito:**
Facilitar el acceso rápido a la información cuando existan múltiples productos registrados.

**Prioridad:**
Alta.

**Criterios de aceptación:**

* El sistema deberá disponer de un campo de búsqueda.
* Se deberá permitir buscar productos por nombre.
* Se deberá permitir buscar productos por código.
* El sistema deberá mostrar únicamente los productos que coincidan con la búsqueda.
* Cuando no existan coincidencias, deberá informarse al usuario.
* Al limpiar la búsqueda deberá mostrarse nuevamente el listado completo.

---

## RF-09 — Clasificar productos por categoría

**Descripción:**
El sistema deberá permitir asociar una categoría a cada producto.

**Usuario:**
Administrador.

**Propósito:**
Mejorar la organización de los productos registrados en el inventario.

**Prioridad:**
Media.

**Criterios de aceptación:**

* Cada producto deberá poder tener una categoría.
* La categoría deberá almacenarse junto con la información del producto.
* La categoría deberá mostrarse en la consulta del producto.
* La información de categoría deberá conservarse al editar el producto.

---

## RF-10 — Controlar existencias

**Descripción:**
El sistema deberá registrar y mostrar la cantidad disponible de cada producto.

**Usuario:**
Administrador.

**Propósito:**
Permitir conocer las existencias disponibles dentro del inventario.

**Prioridad:**
Alta.

**Criterios de aceptación:**

* Cada producto deberá almacenar una cantidad disponible.
* La cantidad deberá visualizarse en el listado.
* La cantidad deberá poder modificarse mediante la edición del producto.
* El sistema no deberá aceptar cantidades inválidas.
* La cantidad actualizada deberá conservarse en `localStorage`.

---

## RF-11 — Mostrar alertas de stock bajo

**Descripción:**
El sistema deberá identificar productos cuya cantidad disponible sea igual o inferior al stock mínimo establecido.

**Usuario:**
Administrador.

**Propósito:**
Permitir detectar productos que necesitan reposición.

**Prioridad:**
Media.

**Criterios de aceptación:**

* Cada producto deberá contar con un valor de stock mínimo.
* El sistema deberá comparar la cantidad disponible con el stock mínimo.
* Cuando la cantidad sea igual o inferior al stock mínimo, el producto deberá identificarse visualmente como producto con stock bajo.
* La alerta deberá actualizarse cuando cambie la cantidad del producto.

---

## RF-12 — Cerrar sesión

**Descripción:**
El sistema deberá permitir que el usuario finalice su sesión.

**Usuario:**
Administrador.

**Propósito:**
Finalizar el acceso al sistema y regresar a la pantalla de inicio de sesión.

**Prioridad:**
Alta.

**Criterios de aceptación:**

* El sistema deberá disponer de una opción para cerrar sesión.
* Al cerrar sesión deberá finalizarse la sesión activa.
* El usuario deberá regresar a la pantalla de inicio de sesión.
* El acceso a las páginas protegidas deberá requerir nuevamente iniciar sesión.

---

## Resumen

La versión 1.0 incluye doce requisitos funcionales principales:

**RF-01**Registrar cuenta de usuario**RF-02** Inicio de sesión · **RF-03** Dashboard · **RF-04** Registrar productos · **RF-05** Consultar productos · **RF-06** Actualizar productos · **RF-07** Eliminar productos · **RF-08** Buscar productos · **RF-09** Categorías · **RF-10** Control de existencias · **RF-11** Alertas de stock bajo · **RF-12** Cerrar sesión.

Estos requisitos constituyen la base funcional que deberá cumplir la primera versión del sistema CRUD Inventario.
