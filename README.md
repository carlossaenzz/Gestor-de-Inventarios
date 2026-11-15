# 📦 Gestor de Inventarios

Sistema web para la gestión básica de inventarios desarrollado con **HTML, CSS y JavaScript Vanilla**.

El proyecto permite administrar productos desde una interfaz web sencilla, aplicando operaciones fundamentales de un sistema CRUD: **crear, consultar, actualizar y eliminar registros**.

Esta versión forma parte de mi proceso de aprendizaje en desarrollo de software y del proyecto formativo del programa **Programación de Aplicaciones y Servicios para la Nube**.

---

## 🚀 Versión

**Versión actual: 1.0 en desarrollo**

La versión 1.0 establece la base funcional del sistema de inventarios y la estructura sobre la cual se desarrollarán futuras funcionalidades.

---

## 🎯 Objetivo del proyecto

Desarrollar una aplicación web que facilite el registro, la consulta, la actualización y el control de productos, permitiendo a pequeños negocios organizar su inventario y consultar la información de sus existencias de manera sencilla y centralizada.

El proyecto también tiene como objetivo aplicar conocimientos relacionados con:

- Desarrollo web con HTML, CSS y JavaScript.
- Metodología BEM para CSS.
- Manipulación del DOM.
- Persistencia de datos con `localStorage`.
- Operaciones CRUD.
- Git y GitHub.
- Integración y despliegue continuo.

---

## ⚙️ Funcionalidades

El sistema incluye diferentes módulos y funcionalidades para la gestión del inventario.

### 👤 Autenticación

- Registro de usuarios.
- Validación de datos.
- Validación de usuarios duplicados.
- Inicio de sesión.
- Gestión de sesión con `localStorage`.
- Protección de páginas privadas.
- Cierre de sesión.

### 📦 Gestión de productos

El módulo de inventario está diseñado alrededor de las operaciones CRUD:

- **Crear:** registrar nuevos productos.
- **Leer:** consultar y visualizar productos registrados.
- **Actualizar:** modificar información de un producto.
- **Eliminar:** retirar productos del inventario.

### 📊 Panel de administración

El panel principal proporciona acceso a la información y herramientas de gestión del inventario.

Actualmente incluye:

- Gestión y listado de productos.
- Registro de nuevos productos.
- Edición de productos.
- Eliminación de productos.
- Diseño responsive.

En desarrollo:

- Resumen general del inventario.
- Alertas de stock bajo.
- Buscador de productos.
- Filtro por categorías.

---

## 🛠️ Tecnologías utilizadas

| Tecnología | Uso |
|---|---|
| HTML5 | Estructura semántica de la aplicación |
| CSS3 | Diseño y estilos de la interfaz |
| JavaScript | Lógica y comportamiento de la aplicación |
| localStorage | Persistencia local de información |
| Boxicons | Iconografía |
| Git | Control de versiones |
| GitHub | Repositorio y gestión del proyecto |
| GitHub Actions | Integración y despliegue continuo |
| GitHub Pages | Publicación de la aplicación |

El proyecto está desarrollado actualmente **sin frameworks ni backend externo**, con el objetivo de fortalecer los fundamentos de JavaScript antes de evolucionar hacia una arquitectura más avanzada.

---

## 🧱 Metodología de desarrollo

Para mantener el código organizado se utilizan algunas convenciones de desarrollo.

### HTML

Se utilizan etiquetas semánticas como:

```html
<header>
<nav>
<main>
<section>
<aside>
<footer>
```

### CSS

Las clases siguen la metodología **BEM (Block, Element, Modifier)**.

Ejemplo:

```css
.dashboard {}

.dashboard__header {}

.dashboard__card {}

.dashboard__nav-link {}

.dashboard__nav-link--active {}
```

### JavaScript

Se utiliza principalmente:

- `camelCase`.
- Funciones tradicionales.
- Nombres descriptivos.
- Separación de responsabilidades.
- Comentarios para documentar bloques importantes de lógica.

Ejemplo:

```javascript
function mostrarProductos() {
  // Lógica para mostrar los productos registrados.
}
```

---

## 📁 Estructura general

```text
Gestor-de-Inventarios/
│
├── assets/
│   ├── icons/
│   └── images/
│
├── css/
│   ├── login.css
│   ├── dashboard.css
│   └── registro.css
|   
│
├── js/
│   ├── storage.js
│   ├── login.js
│   ├── registro.js
│   ├── dashboard.js
|   └── productos.js
│
├── pages/
│   ├── registro.html
│   └── dashboard.html
│
├── docs/
|   ├── visión/
│   ├── requisitos/
│   ├── casos-de-uso/
│   ├── historias-de-usuario/
│   ├── diseño/
│   ├── pruebas/
│   └── manuales/
│
├── login.html
│
└── README.md
```

> La estructura puede evolucionar conforme se incorporen nuevos módulos al proyecto.

---

## 💾 Almacenamiento

Actualmente el proyecto utiliza la API `localStorage` del navegador para almacenar información.

Esto permite practicar la **persistencia de datos** sin necesidad de implementar todavía un servidor o una base de datos externa.

Limitaciones: el almacenamiento es local al navegador y al origen web. Los datos no se sincronizan entre dispositivos, la autenticación implementada es demostrativa, por lo que no debe utilizarse para proteger información sensible en producción.

Ejemplo conceptual:

```javascript
localStorage.setItem("productos", JSON.stringify(productos));
```

Los datos almacenados pueden recuperarse posteriormente mediante:

```javascript
JSON.parse(localStorage.getItem("productos"));
```

---

## 📚 Documentación

Además del código fuente, el proyecto cuenta con documentación relacionada con diferentes etapas del desarrollo de software.

La documentación se encuentra en la carpeta:

```text
/docs
```

Entre los documentos desarrollados se encuentran:

- Visión y alcance del proyecto.
- Requisitos funcionales.
- Requisitos no funcionales.
- Historias de usuario.
- Casos de uso.
- Diagramas.
- Diseño del sistema.
- Pruebas.
- Manual de usuario.
- Manual técnico.

Esta documentación permite registrar no solamente el resultado final, sino también el proceso seguido durante el desarrollo del sistema.

---

## 🌐 Aplicación web

[Acceder al Gestor de Inventarios](https://carlossaenzz.github.io/Gestor-de-Inventarios/login.html)

La aplicación se encuentra publicada mediante GitHub Pages.

## 🔄 Integración y despliegue continuo

El proyecto incorpora GitHub Actions para automatizar tareas relacionadas con la integración continua y el despliegue.

El proceso contempla la validación del proyecto mediante un workflow de CI y la publicación controlada de la aplicación en GitHub Pages mediante un workflow de CD.

---

## 🔄 Flujo general

```text
Registro
   ↓
Inicio de sesión
   ↓
Validación de usuario
   ↓
Creación de sesión
   ↓
Dashboard
   ↓
Gestión de inventario
   ↓
Crear / Consultar / Editar / Eliminar productos
```

---

## 🗺️ Evolución del proyecto

El Gestor de Inventarios está planteado para evolucionar progresivamente.

### Versión 1.0

Base del sistema:

- Autenticación.
- Sesiones.
- Dashboard.
- Gestión de productos.
- Persistencia con localStorage.
- Operaciones CRUD.

### Próximas versiones

Entre las funcionalidades que pueden incorporarse posteriormente se encuentran:

- Categorías de productos.
- Proveedores.
- Movimientos de entrada y salida.
- Historial de inventario.
- Control avanzado de stock.
- Reportes.
- Roles y permisos.
- Base de datos.
- API REST.
- Backend.
- Autenticación del lado del servidor.
- Despliegue en infraestructura cloud.
- Soporte para múltiples empresas.

---

## 👨‍💻 Autor

**Carlos Saenz** : Desarrollador de software

GitHub: [@carlossaenzz](https://github.com/carlossaenzz)

Gestor de Inventarios v1.0 — Proyecto de desarrollo web en evolución.

---
