# Visión y Alcance — CRUD Inventario

## 1. Nombre del proyecto

**CRUD Inventario — Sistema Web de Gestión de Inventarios**

## 2. Descripción del proyecto

CRUD Inventario es una aplicación web orientada a pequeñas y medianas empresas que necesitan llevar un control organizado de sus productos.

El sistema permitirá registrar, consultar, actualizar y eliminar productos mediante operaciones CRUD (**Create, Read, Update y Delete**), además de incorporar funciones de búsqueda, categorías, control de existencias y alertas de stock bajo.

La primera versión será desarrollada con tecnologías web fundamentales como HTML, CSS y JavaScript, utilizando `localStorage` para almacenar la información directamente en el navegador.

## 3. Problema identificado

Muchos pequeños negocios realizan el control de sus productos mediante cuadernos, registros manuales o archivos poco organizados.

Este tipo de gestión puede generar problemas como:

* Errores en el registro de productos.
* Dificultad para encontrar información rápidamente.
* Información duplicada.
* Desconocimiento de las cantidades disponibles.
* Falta de control sobre productos con bajo stock.
* Pérdida o desorganización de información.
* Procesos lentos de actualización del inventario.

El proyecto busca desarrollar una solución digital sencilla que permita mejorar la organización y consulta de la información del inventario.

## 4. Justificación

La implementación de un sistema web de inventarios permite centralizar y organizar la información de los productos, reduciendo algunos de los problemas asociados con los registros manuales.

Además de resolver una necesidad práctica, este proyecto será utilizado como proyecto personal de aprendizaje para aplicar conocimientos de desarrollo web, JavaScript, Git, GitHub, análisis de requisitos, diseño, pruebas y documentación de software.

El desarrollo se realizará de manera progresiva, construyendo inicialmente una versión sencilla y posteriormente evolucionando el sistema hacia una arquitectura más completa.

## 5. Objetivo general

Desarrollar un sistema web de gestión de inventarios que permita administrar productos de manera organizada mediante operaciones de registro, consulta, actualización y eliminación, facilitando el control de existencias en pequeñas y medianas empresas.

## 6. Objetivos específicos

* Implementar un sistema de registro e inicio de sesión que permita crear cuentas de usuario y acceder al sistema mediante credenciales.
* Diseñar un panel principal para acceder a las funciones del sistema.
* Permitir registrar nuevos productos.
* Mostrar los productos almacenados.
* Permitir modificar la información de productos existentes.
* Permitir eliminar productos del inventario.
* Implementar búsqueda de productos.
* Organizar productos mediante categorías.
* Controlar las cantidades disponibles.
* Identificar productos con stock bajo.
* Mantener una interfaz sencilla y fácil de utilizar.
* Organizar el código para facilitar futuras mejoras.

## 7. Usuarios del sistema

### Administrador

Usuario con acceso a las funciones principales del sistema.

Podrá:

* Registrar una cuenta
* Iniciar sesión.
* Cerrar sesión
* Registrar productos.
* Consultar productos.
* Editar productos.
* Eliminar productos.
* Buscar productos por nombre o código.
* Consultar cantidades disponibles.
* Visualizar categorías
* Visualizar alertas de stock bajo.

### Empleado

Usuario que podrá consultar información del inventario y realizar determinadas operaciones según los permisos que se definan durante la evolución del proyecto.

> En la versión 1.0 se desarrollará principalmente el flujo del administrador. La gestión completa de roles y permisos podrá evolucionar en versiones posteriores.

## 8. Alcance de la versión 1.0

La primera versión funcional del sistema incluirá:

* Registro de usuarios
* Inicio de sesión con usuarios registrados 
* cierre de sesión.
* Detección de correo electronico y nombre de usuario duplicados
* Validación de credenciales
* Protección de acceso al dashboard
* Dashboard o panel principal.
* Registro de productos.
* Listado de productos.
* Consulta de información.
* Edición de productos.
* Eliminación de productos.
* Búsqueda por nombre o código.
* Clasificación por categorías.
* Control de cantidades.
* Definición de stock mínimo.
* Alertas visuales de stock bajo.
* Validaciones básicas de formularios.
* Persistencia de información utilizando `localStorage`.
* Pruebas manuales de las funcionalidades principales.
* control de versiones git y github.

## 9. Fuera del alcance de la versión 1.0

Inicialmente no se desarrollarán las siguientes funcionalidades:

* Facturación.
* Gestión de ventas.
* Gestión de compras.
* Gestión de clientes.
* Gestión completa de proveedores.
* Nómina.
* Reportes avanzados.
* Backend.
* APIs externas.
* Node.js.
* Bases de datos como MySQL o MongoDB
* Autenticacion mediante servidor.
* Base de datos remota.
* Sincronización entre varios computadores.
* Gestión avanzada de usuarios y permisos.
* Sistema multiempresa.
* Aplicación movil.

Estas características podrán analizarse para versiones posteriores segun la evulución del proyecto.

## 10. Tecnologías iniciales

Para la primera versión se utilizarán únicamente tecnologías conocidas y fundamentales del desarrollo web:

* **HTML:** estructura de las páginas.
* **CSS:** diseño y presentación de la interfaz.
* **JavaScript:** lógica y comportamiento del sistema.
* **localStorage:** almacenamiento inicial de los datos.
* **Git:** control de versiones.
* **GitHub:** almacenamiento y seguimiento del repositorio.
* **Visual Studio Code:** entorno de desarrollo.
* **Live Server:** ejecución local durante el desarrollo.

Convenciones del proyecto:
- Se utilizará metodoligía **BEM** para mantener una organización clara y consistente de las clases en HTML y CSS.
- Se utilizará camelCase para nombres de variables y funciones en JavaScript.
- Los mensajes de commit se escribirán en **español** y en **modo imperativo**, procurando que describan de forma clara la unidad de trabajo realizada.
- Los comentarios en el código se escribirán de forma clara y breve, Deberán explicar por qué se realiza una acción o qué responsabilidad tiene una sección del código, evitando comentarios redundantes que solo repitan lo que ya muestra el código.

## 11. Restricciones iniciales

La versión 1.0 tendrá algunas limitaciones propias de la arquitectura utilizada:

* Los datos estarán almacenados en el navegador mediante `localStorage`.
* La información no estará sincronizada entre diferentes computadores.
* El sistema inicialmente no contará con un servidor backend.
* No existirá todavía una base de datos centralizada.
* El inicio de sesión inicial será utilizado con fines de aprendizaje y no representará un sistema de autenticación empresarial definitivo.
* El sistema estará orientado principalmente al uso desde navegadores modernos de escritorio.

## 12. Evolución futura

El proyecto será desarrollado progresivamente.

Una posible evolución será:

### Versión 1.0

Aplicación CRUD utilizando HTML, CSS, JavaScript y `localStorage`.

### Versión 2.0

Incorporación de backend, API y base de datos centralizada.

### Versión 3.0

Autenticación real mediante servidor, usuarios y roles.

### Versión 4.0

Gestión de movimientos de entrada y salida de inventario.

### Versión 5.0

incorporación de proveedores, reportes, estadísticas y nuevas funcionalidades empresariales.

El alcance de cada versión podrá modificarse según los conocimientos adquiridos y las necesidades identificadas durante el desarrollo.

---

## Estado actual

**Fase:** Análisis y definición del producto.
* En desarrollo versión 1.0

El proyecto ya cuenta con una base inicial de documentación, definición de visión y alcance, requisitos, casos de uso, historias de usuario y otros elementos de análisis.

Actualmente se encuentra en desarrollo el módulo de autenticación. Ya se ha avanzado en el formulario de login y registro, validación de contraseñas, creación del objeto usuario, almacenamiento de usuarios en localStorage y validación de correo electrónico y nombre de usuario duplicados.

El siguiente paso del proyecto consiste en continuar con el inicio de sesión utilizando los usuarios almacenados, validar las credenciales, crear la sesión de usuario, proteger el acceso al dashboard e implementar el cierre de sesión.