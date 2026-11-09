# Diseño del Sistema — CRUD Inventario

## 1. Introducción

La etapa de diseño permite definir y refinar cómo se organizará y presentará el sistema CRUD Inventario, sirviendo como referencia durante su implementación y evolución.

El diseño se construirá progresivamente a partir de los requisitos, casos de uso e historias de usuario definidos para la versión 1.0.

Los prototipos visuales creados durante esta etapa serán considerados propuestas o exploraciones de diseño y podrán modificarse antes de desarrollar la interfaz definitiva.

---

## 2. Objetivo del diseño

Diseñar una interfaz clara, sencilla y organizada que permita al usuario acceder fácilmente a las principales funcionalidades del sistema de inventarios.

El diseño deberá facilitar especialmente las siguientes tareas:

* Registrar una cuenta.
* Iniciar sesión.
* Consultar el dashboard.
* Registrar productos.
* Consultar productos.
* Editar productos.
* Eliminar productos.
* Buscar productos.
* Consultar categorías.
* Identificar productos con bajo stock.
* Cerrar sesión.

---

## 3. Estructura general de navegación

La navegación inicial de la aplicación será:

```text
Inicio
│
├── Iniciar sesión
│       │
│       └── Dashboard
│               │
│               ├── Productos
│               │     ├── Registrar producto
│               │     ├── Consultar productos
│               │     ├── Buscar producto
│               │     ├── Editar producto
│               │     └── Eliminar producto
│               │
│               ├── Categorías
│               │
│               ├── Stock bajo
│               │
│               └── Cerrar sesión
│
└── Registrarse
        │
        └── Iniciar sesión
```

Esta estructura podrá modificarse si durante el diseño se identifica una forma más sencilla de organizar las funcionalidades.

---

## 4. Pantallas principales

### 4.1 Inicio de sesión

Permitirá que un usuario registrado ingrese al sistema mediante sus credenciales.

Elementos principales:

* Identidad visual del sistema.
* Campo de usuario o correo.
* Campo de contraseña.
* Opción para mostrar u ocultar contraseña.
* Botón de iniciar sesión.
* Enlace hacia el registro de usuario.
* Mensajes de validación.

---

### 4.2 Registro de usuario

Permitirá crear una cuenta para acceder al sistema.

Elementos principales:

* Nombre.
* Correo electrónico.
* Nombre de usuario.
* Contraseña.
* Confirmación de contraseña.
* Botón de registro.
* Enlace para regresar al inicio de sesión.
* Mensajes de validación.

---

### 4.3 Dashboard

Será la pantalla principal después del inicio de sesión.

Su objetivo será proporcionar una visión general del inventario y accesos rápidos a las funcionalidades más importantes.

Inicialmente podrá mostrar información como:

* Número total de productos.
* Productos con stock bajo.
* Número de categorías.
* Acceso al módulo de productos.
* Acceso a productos con bajo stock.
* Opción para cerrar sesión.

La información definitiva del dashboard será determinada durante el desarrollo.

---

### 4.4 Gestión de productos

Será el módulo principal del sistema.

Permitirá realizar las operaciones CRUD sobre los productos.

El módulo podrá contener:

* Botón para registrar producto.
* Campo de búsqueda.
* Listado o tabla de productos.
* Código.
* Nombre.
* Categoría.
* Precio.
* Cantidad disponible.
* Stock mínimo.
* Estado del stock.
* Acción para editar.
* Acción para eliminar.

---

### 4.5 Formulario de producto

Permitirá registrar o modificar productos.

Campos inicialmente definidos:

* Código.
* Nombre.
* Categoría.
* Precio.
* Cantidad.
* Stock mínimo.

El mismo diseño podrá reutilizarse tanto para registrar como para editar productos.

---

### 4.6 Productos con stock bajo

Permitirá visualizar rápidamente los productos cuya cantidad disponible sea igual o inferior al stock mínimo definido.

Los productos deberán contar con algún indicador visual que facilite su identificación.

---

## 5. Flujo principal del usuario

El flujo principal previsto será:

```text
Usuario
   ↓
Inicio de sesión
   ↓
Validación
   ↓
Dashboard
   ↓
Módulo de productos
   ↓
Consultar inventario
   ↓
Crear / Editar / Eliminar / Buscar
   ↓
Actualizar información
   ↓
Dashboard
```

Para un nuevo usuario:

```text
Nuevo usuario
     ↓
Registro
     ↓
Validación
     ↓
Cuenta creada
     ↓
Inicio de sesión
     ↓
Dashboard
```

---

## 6. Principios de diseño

La interfaz deberá seguir los siguientes principios:

### Claridad

Las acciones disponibles deben ser fáciles de comprender.

### Consistencia

Botones, formularios, colores, tipografía y navegación deberán mantener un estilo similar en toda la aplicación.

### Simplicidad

La interfaz deberá evitar elementos innecesarios que dificulten el uso del sistema.

### Retroalimentación

El sistema deberá informar al usuario cuando una operación:

* se realizó correctamente;
* produjo un error;
* necesita confirmación;
* requiere completar información.

### Prevención de errores

Los formularios deberán validar la información antes de almacenarla.

### Diseño adaptable

La aplicación deberá mantener una visualización adecuada al cambiar el tamaño de la pantalla.

---

## 7. Componentes de interfaz previstos

Para mantener consistencia entre las diferentes pantallas se podrán reutilizar componentes visuales como:

* Barra de navegación.
* Menú lateral.
* Botones.
* Campos de formulario.
* Tarjetas informativas.
* Tablas.
* Buscador.
* Mensajes de confirmación.
* Mensajes de error.
* Ventanas de confirmación.
* Indicadores de stock.

Aunque inicialmente serán construidos con HTML y CSS, deberán conservar una apariencia consistente en toda la aplicación.

---

## 8. Diseño responsive

La aplicación estará orientada inicialmente a computadores de escritorio, pero deberá procurar una correcta adaptación a pantallas más pequeñas.

Se tendrán en cuenta:

* Tamaño de formularios.
* Organización de tablas.
* Navegación.
* Tamaño de botones.
* Legibilidad del texto.
* Distribución de los elementos.

El diseño móvil podrá evolucionar progresivamente durante el desarrollo.

---

## 9. Prototipos

Los prototipos creados en herramientas como Figma serán utilizados como referencia visual durante el proceso de diseño.

Estos prototipos:

* no representan necesariamente la interfaz definitiva;
* pueden modificarse durante el proyecto;
* permiten experimentar con diferentes distribuciones;
* facilitan comparar alternativas antes de programar;
* deberán respetar el alcance de la versión del sistema.

Los diseños seleccionados podrán almacenarse dentro de:

`docs/05-diseño/prototipos/`

---

## 10. Decisiones pendientes

Antes de implementar la interfaz definitiva deberán definirse progresivamente aspectos como:

* Nombre visual definitivo del producto.
* Paleta de colores.
* Tipografía.
* Diseño definitivo del dashboard.
* Uso de menú lateral o navegación superior.
* Diseño de la tabla de productos.
* Diseño del formulario de registro.
* Representación visual del stock bajo.
* Comportamiento responsive definitivo.

Estas decisiones no bloquean actualmente el desarrollo de la documentación y podrán resolverse mediante prototipos.

---

## Estado del diseño

**Estado actual:** Diseño conceptual.

Actualmente se encuentra definida la estructura general de navegación y las pantallas principales del sistema.

Los diseños gráficos existentes deben considerarse propuestas iniciales y no interfaces definitivas.
