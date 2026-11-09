# Requisitos No Funcionales — CRUD Inventario

## 1. Introducción

Los requisitos no funcionales establecen las características de calidad, restricciones y condiciones bajo las cuales deberá funcionar el sistema CRUD Inventario.

A diferencia de los requisitos funcionales, estos requisitos no describen directamente una operación del usuario, sino las condiciones que deberá cumplir el sistema durante su funcionamiento.

---

## RNF-01 — Usabilidad

**Descripción:**
La interfaz del sistema deberá ser sencilla, clara y comprensible para usuarios con conocimientos básicos de navegación web.

**Criterios de aceptación:**

* Las principales funciones deberán ser fáciles de identificar.
* Los formularios deberán mostrar claramente qué información debe ingresarse.
* Los botones deberán indicar claramente la acción que realizan.
* Los mensajes de confirmación y error deberán ser comprensibles.
* La navegación entre las diferentes secciones deberá ser consistente.

---

## RNF-02 — Rendimiento

**Descripción:**
El sistema deberá responder de manera rápida durante las operaciones habituales de gestión del inventario.

**Criterios de aceptación:**

* Las operaciones comunes deberán responder en un tiempo inferior a 3 segundos en condiciones normales.
* La búsqueda de productos deberá mostrar los resultados sin producir bloqueos perceptibles.
* La actualización del listado deberá realizarse inmediatamente después de una operación CRUD.

---

## RNF-03 — Persistencia

**Descripción:**
La información que requiera persistencia en la versión 1.0, principalmente usuarios y productos, deberá almacenarse localmente mediante `localStorage`.

**Criterios de aceptación:**

* Los usuarios registrados deberán permanecer disponibles después de recargar la aplicación.
* Los productos registrados deberán permanecer disponibles después de recargar la página.
* Las modificaciones deberán conservarse después de recargar la aplicación.
* Los productos eliminados no deberán reaparecer después de recargar.

---

## RNF-04 — Compatibilidad

**Descripción:**
La aplicación deberá funcionar correctamente en navegadores web modernos.

**Criterios de aceptación:**

* La aplicación deberá ejecutarse utilizando tecnologías web estándar.
* La interfaz deberá visualizarse correctamente en navegadores modernos basados en estándares web.
* Las funciones JavaScript utilizadas deberán ser compatibles con navegadores modernos.

---

## RNF-05 — Mantenibilidad

**Descripción:**
El código fuente deberá organizarse de manera que facilite su lectura, modificación y ampliación futura.

**Criterios de aceptación:**

* Las clases de HTML y CSS deberán mantener la metOdología BEM.
* HTML, CSS y JavaScript deberán mantenerse separados según su responsabilidad.
* La lógica relacionada con productos deberá organizarse en archivos JavaScript específicos.
* Los nombres de variables y funciones deberán representar claramente su propósito y utilizando la convencio cameCase.
* Se deberá evitar duplicar lógica innecesariamente.
* La estructura del proyecto deberá mantenerse organizada.
* Los comentarios deberán utilizarse cuando aporten contexto sobre la intención o responsabilidad del código, evitando repetir innecesariamente lo que ya expresa la implementación.

---

## RNF-06 — Seguridad básica

**Descripción:**
La versión 1.0 deberá restringir el acceso a las páginas principales mediante un mecanismo básico de sesión.

**Criterios de aceptación:**

* La sesión deberá crearse únicamente después de validar correctamente las credenciales del usuario.
* El usuario deberá iniciar sesión antes de acceder al sistema.
* Las páginas protegidas deberán comprobar la existencia de una sesión.
* Cerrar sesión deberá impedir continuar utilizando las páginas protegidas sin volver a autenticarse.

**Limitación conocida:**
La autenticación implementada únicamente mediante JavaScript y almacenamiento del navegador no constituye un mecanismo de seguridad adecuado para producción. La autenticación real será considerada en una versión futura con backend y almacenamiento seguro de credenciales.

---

## RNF-07 — Validación de datos

**Descripción:**
El sistema deberá validar la información ingresada antes de almacenarla.

**Criterios de aceptación:**

* Los campos obligatorios no deberán aceptar valores vacíos.
* Los campos numéricos deberán aceptar únicamente valores válidos.
* No deberán almacenarse productos con códigos duplicados.
* Los errores de validación deberán comunicarse claramente al usuario.
* No deberán registrarse usuarios con un correo electrónico o nombre de usuario ya almacenado.

---

## RNF-08 — Diseño adaptable

**Descripción:**
La interfaz deberá conservar su correcta visualización en diferentes tamaños de pantalla utilizados habitualmente.

**Criterios de aceptación:**

* La aplicación deberá visualizarse correctamente en computadores de escritorio.
* La interfaz deberá adaptarse de forma básica a pantallas de menor tamaño.
* Los elementos principales no deberán  desbordarse ni superponerse.
* La información deberá continuar siendo legible cuando cambie el tamaño de la ventana.
* El diseño podrá evolucionar posteriormente hacia una adaptación más completa para dispositivos móviles.

---

## RNF-09 — Disponibilidad local

**Descripción:**
La versión 1.0 deberá poder utilizarse localmente desde un navegador mientras los archivos de la aplicación estén disponibles.

**Criterios de aceptación:**

* Las operaciones principales del CRUD no deberán depender de un servidor backend.
* El almacenamiento de productos deberá funcionar mediante `localStorage`.
* La gestión básica del inventario no deberá requerir conexión permanente a Internet.

---

## RNF-10 — Control de versiones

**Descripción:**
El código y la documentación del proyecto deberán mantenerse bajo control de versiones utilizando Git.

**Criterios de aceptación:**

* Los cambios relevantes deberán registrarse mediante commits.
* Los mensajes de commit deberán describir el cambio realizado.
* El repositorio remoto deberá mantenerse actualizado en GitHub.
* La documentación deberá versionarse junto con el código fuente.
* Los mensajes de commit deberán escribirse en español y en modo imperativo.
* Los commits deberán procurar representar unidades de trabajo claras y coherentes.
