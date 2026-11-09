# Plan de Pruebas — CRUD Inventario

## 1. Objetivo del plan

Definir las actividades necesarias para verificar el funcionamiento de la versión 1.0 del sistema CRUD Inventario.

---

## 2. Alcance

El plan de pruebas cubrirá las funcionalidades definidas en los requisitos funcionales RF-01 a RF-12.

Se verificarán principalmente:

- Autenticación local.
- Gestión CRUD de productos.
- Búsqueda.
- Categorías.
- Existencias.
- Stock mínimo.
- Persistencia mediante localStorage.
- Navegación.
- Validaciones.

---

## 3. Elementos que serán probados

### Autenticación

- Registro de usuario.
- Inicio de sesión.
- Validación de credenciales.
- Cierre de sesión.
- Acceso a páginas protegidas.

### Productos

- Crear producto.
- Consultar productos.
- Editar producto.
- Eliminar producto.
- Validar código único.

### Inventario

- Cantidad disponible.
- Stock mínimo.
- Alertas de stock bajo.
- Categorías.

### Persistencia

- Guardar información.
- Recuperar información después de recargar.
- Mantener modificaciones.
- Mantener eliminaciones.

### Interfaz

- Formularios.
- Mensajes de error.
- Mensajes de confirmación.
- Navegación.
- Adaptación básica a diferentes tamaños de pantalla.

---

## 4. Tipos de prueba

### Pruebas funcionales

Permitirán verificar que cada funcionalidad realice la operación para la cual fue diseñada.

### Pruebas de validación

Permitirán comprobar el comportamiento del sistema cuando el usuario ingrese información incorrecta.

### Pruebas de persistencia

Permitirán comprobar que la información almacenada mediante localStorage permanezca después de recargar la aplicación.

### Pruebas de interfaz

Permitirán comprobar que los elementos sean visibles, comprensibles y utilizables.

### Pruebas de navegación

Permitirán comprobar que el usuario pueda desplazarse correctamente entre las diferentes pantallas.

---

## 5. Entorno de pruebas

Inicialmente las pruebas se realizarán utilizando:

- Linux Mint.
- Visual Studio Code.
- Live Server.
- Navegador web moderno.
- Herramientas de desarrollo del navegador.
- localStorage.

Posteriormente podrán realizarse pruebas en otros navegadores.

---

## 6. Criterio de aprobación

Una funcionalidad será considerada aprobada cuando:

- Cumpla los criterios de aceptación definidos.
- Produzca el resultado esperado.
- No genere errores que impidan su utilización.
- Mantenga correctamente los datos cuando corresponda.

---

## 7. Registro de errores

Cuando se encuentre un error se documentará:

- Identificador.
- Funcionalidad afectada.
- Descripción.
- Pasos para reproducirlo.
- Resultado esperado.
- Resultado obtenido.
- Evidencia.
- Estado.