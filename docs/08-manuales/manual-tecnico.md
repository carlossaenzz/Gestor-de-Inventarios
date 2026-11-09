# Manual Técnico — CRUD Inventario

**Proyecto:** CRUD Inventario  
**Producto:** Sistema Web de Gestión de Inventarios  
**Versión documental:** 1.0  
**Estado:** Documentación técnica inicial / proyecto en desarrollo  
**Repositorio:** `CRUD-Inventario`

---

## 1. Introducción

Este manual técnico describe la estructura, arquitectura, tecnologías, organización interna, modelo de datos, persistencia, control de versiones, pruebas y lineamientos de mantenimiento del proyecto **CRUD Inventario**.

El proyecto está orientado a construir progresivamente un sistema web de gestión de inventarios para pequeñas y medianas empresas, utilizando inicialmente tecnologías web fundamentales y una arquitectura completamente del lado del cliente.

La versión 1.0 se desarrollará con **HTML, CSS y JavaScript**, utilizando **localStorage** como mecanismo de persistencia local.

Este documento deberá actualizarse cuando cambie la estructura del sistema, se agreguen nuevas funcionalidades o se incorpore una nueva arquitectura.

---

## 2. Objetivo del manual técnico

El objetivo de este documento es servir como referencia técnica para comprender cómo está organizado y cómo debe evolucionar el sistema.

Permite documentar:

- Tecnologías utilizadas.
- Estructura de carpetas.
- Responsabilidad de los archivos.
- Arquitectura de la versión 1.0.
- Modelo de datos.
- Persistencia mediante localStorage.
- Flujo de autenticación.
- Funcionamiento del CRUD de productos.
- Convenciones de desarrollo.
- Control de versiones con Git.
- Pruebas.
- Seguridad y limitaciones.
- Procedimiento de ejecución local.
- Mantenimiento.
- Evolución futura.

---

## 3. Descripción técnica del proyecto

CRUD Inventario es una aplicación web diseñada para administrar productos mediante las operaciones fundamentales:

- **Create:** registrar productos.
- **Read:** consultar productos.
- **Update:** actualizar productos.
- **Delete:** eliminar productos.

La versión 1.0 también contempla:

- Registro de usuario.
- Inicio de sesión.
- Dashboard.
- Búsqueda de productos.
- Categorías.
- Control de existencias.
- Stock mínimo.
- Alertas de stock bajo.
- Cierre de sesión.
- Persistencia local.

La aplicación no contará inicialmente con servidor backend ni base de datos remota.

---

# 4. Tecnologías utilizadas

## 4.1 HTML

HTML será utilizado para definir la estructura de las páginas y componentes visuales.

Entre sus responsabilidades se encuentran:

- Formularios.
- Tablas.
- Botones.
- Campos de entrada.
- Navegación.
- Contenedores.
- Textos.
- Elementos semánticos.

---

## 4.2 CSS

CSS será utilizado para controlar la presentación visual del sistema.

Permitirá definir:

- Colores.
- Tipografía.
- Distribución.
- Formularios.
- Botones.
- Dashboard.
- Tabla de productos.
- Estados visuales.
- Diseño adaptable.

Los estilos deberán mantenerse separados según la pantalla o responsabilidad correspondiente.

---

## 4.3 JavaScript

JavaScript será responsable del comportamiento y la lógica de la aplicación.

Entre sus funciones estarán:

- Manipulación del DOM.
- Validación de formularios.
- Registro de usuarios.
- Inicio de sesión.
- Gestión de sesiones.
- Registro de productos.
- Consulta.
- Edición.
- Eliminación.
- Búsqueda.
- Control de existencias.
- Cálculo de stock bajo.
- Persistencia mediante localStorage.

---

## 4.4 localStorage

`localStorage` será utilizado como mecanismo de persistencia para la versión 1.0.

Permitirá conservar información en el navegador incluso después de recargar la página.

Se utilizará para almacenar:

- Usuarios.
- Productos.
- Sesión activa.

Esta solución es adecuada para aprendizaje y prototipado, pero no debe considerarse una base de datos empresarial.

---

## 4.5 Git

Git será utilizado como sistema de control de versiones.

Permitirá:

- Registrar cambios.
- Mantener historial.
- Crear commits.
- Recuperar versiones anteriores.
- Controlar la evolución del proyecto.

---

## 4.6 GitHub

GitHub será utilizado como repositorio remoto.

Permitirá:

- Respaldar el código.
- Mantener documentación.
- Visualizar historial.
- Compartir el proyecto.
- Utilizar el proyecto como parte del portafolio.

La conexión del repositorio se realizará mediante SSH.

---

## 4.7 Visual Studio Code

Visual Studio Code será el editor principal utilizado durante el desarrollo.

---

## 4.8 Live Server

Live Server podrá utilizarse para ejecutar el proyecto localmente desde Visual Studio Code y recargar automáticamente los cambios durante el desarrollo.

---

# 5. Arquitectura inicial

La versión 1.0 utilizará una arquitectura completamente del lado del cliente.

```text
Usuario
   ↓
Interfaz
HTML + CSS
   ↓
Lógica de aplicación
JavaScript
   ↓
Persistencia
localStorage
```

No existirán inicialmente:

- Backend.
- API.
- Servidor de aplicación.
- Base de datos SQL.
- Base de datos NoSQL remota.
- Autenticación empresarial.
- Sincronización entre dispositivos.

---

# 6. Estructura del proyecto

La estructura actual del proyecto es:

```text
CRUD-Inventario/
│
├── index.html
├── LICENSE
├── README.md
├── css/
│   ├── style.css
│   ├── dashboard.css
│   └── productos.css
│
├── image/
│
├── js/
│   ├── login.js
│   ├── productos.js
│   └── storage.js
│
├── pages/
│   ├── dashboard.html
│   └── productos.html
│
└── docs/
    ├── 00-documentacion-original/
    ├── 01-vision-alcance/
    ├── 02-requisitos/
    ├── 03-casos-de-uso/
    ├── 04-historias-de-usuario/
    ├── 05-diseno/
    ├── 06-modelo-datos/
    ├── 07-pruebas/
    └── 08-manuales/
```

La estructura puede evolucionar cuando aparezcan nuevas necesidades.

---

# 7. Responsabilidad de los archivos principales

## 7.1 `index.html`

Será inicialmente la página de entrada al sistema.

Su responsabilidad principal será mostrar el formulario de inicio de sesión.

También permite navegar hacia el registro de usuario.

---

## 7.2 `pages/dashboard.html`

Será la pantalla principal después del inicio de sesión.

Podrá mostrar información como:

- Total de productos.
- Productos con stock bajo.
- Número de categorías.
- Acceso al módulo de productos.
- Acceso a otras funciones.
- Opción para cerrar sesión.

---

## 7.3 `pages/productos.html`

Será la pantalla principal para administrar productos.

Permitirá:

- Registrar.
- Consultar.
- Editar.
- Eliminar.
- Buscar.
- Visualizar existencias.
- Identificar productos con stock bajo.

---

# 8. Archivos CSS

## 8.1 `css/style.css`

Contendrá los estilos generales y los relacionados principalmente con la pantalla de autenticación.

Podrá incluir:

- Tipografía.
- Variables visuales.
- Estilos generales.
- Login.
- Formularios.
- Botones.

---

## 8.2 `css/dashboard.css`

Contendrá los estilos específicos del dashboard.

---

## 8.3 `css/productos.css`

Contendrá los estilos específicos relacionados con:

- Tabla de productos.
- Formularios de producto.
- Botones de acciones.
- Indicadores de stock.
- Buscador.

---

# 9. Archivos JavaScript

## 9.1 `js/login.js`

Será responsable de la lógica relacionada con usuarios y autenticación local.

Funciones Implementadas:

- Registrar usuario.
- Validar formulario de registro.
- Verificar usuario duplicado.
- Validar credenciales.
- Iniciar sesión.
- Crear sesión local.
- Verificar sesión.
- Cerrar sesión.
- Redirigir al usuario.

---

## 9.2 `js/productos.js`

Será responsable de la lógica del inventario.

Funciones previstas:

- Crear producto.
- Validar producto.
- Comprobar código duplicado.
- Mostrar productos.
- Buscar productos.
- Seleccionar producto.
- Editar producto.
- Actualizar producto.
- Eliminar producto.
- Confirmar eliminación.
- Calcular estado del stock.
- Mostrar alertas de stock bajo.

---

## 9.3 `js/storage.js`

Será responsable de centralizar el acceso a `localStorage`.

Su objetivo será evitar que la lógica de almacenamiento quede repetida por todo el proyecto.

Funciones previstas:

- Leer usuarios.
- Guardar usuarios.
- Leer productos.
- Guardar productos.
- Leer sesión.
- Guardar sesión.
- Eliminar sesión.
- Convertir objetos mediante JSON.

---

# 10. Modelo de datos

La versión 1.0 utiliza tres estructuras principales:

1. Usuario.
2. Producto.
3. Sesión.

La documentación completa se encuentra en:

```text
docs/06-modelo-datos/
```

---

# 11. Modelo Usuario

Estructura conceptual:

```js
const usuario = {
  id: 1,
  nombre: "Usuario",
  email: "usuario@correo.com",
  username: "usuario",
  password: "********",
  rol: "administrador",
  fechaRegistro: "2026-08-29"
};
```

## Campos

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | Number/String | Identificador único |
| `nombre` | String | Nombre del usuario |
| `email` | String | Correo |
| `username` | String | Nombre de acceso |
| `password` | String | Contraseña de la versión local |
| `rol` | String | Rol del usuario |
| `fechaRegistro` | String | Fecha de registro |

---

# 12. Modelo Producto

Estructura conceptual:

```js
const producto = {
  id: 1,
  codigo: "P001",
  nombre: "Arroz 1 kg",
  categoria: "Alimentos",
  precio: 4500,
  cantidad: 20,
  stockMinimo: 5,
  fechaCreacion: "2026-08-29",
  fechaActualizacion: null
};
```

## Campos

| Campo | Tipo | Descripción |
|---|---|---|
| `id` | Number/String | Identificador interno |
| `codigo` | String | Código único visible |
| `nombre` | String | Nombre |
| `categoria` | String | Categoría |
| `precio` | Number | Precio |
| `cantidad` | Number | Existencias |
| `stockMinimo` | Number | Mínimo recomendado |
| `fechaCreacion` | String | Fecha de creación |
| `fechaActualizacion` | String/null | Última actualización |

---

# 13. Modelo Sesión

Estructura conceptual:

```js
const sesion = {
  usuarioId: 1,
  username: "usuario",
  fechaInicio: "2026-08-29"
};
```

La sesión permitirá determinar si un usuario se encuentra autenticado.

---

# 14. Identificador interno y código del producto

`id` y `codigo` tienen responsabilidades diferentes.

## `id`

Identificador interno de la aplicación.

Ejemplo:

```text
1
2
3
```

## `codigo`

Identificador visible relacionado con el producto.

Ejemplo:

```text
P001
P002
P003
```

El código no deberá repetirse.

---

# 15. Categorías

En la versión 1.0 una categoría será almacenada directamente dentro del producto.

Ejemplo:

```js
categoria: "Alimentos"
```

No existirá todavía una entidad independiente `Categoria`.

En versiones futuras podrá implementarse un CRUD específico de categorías.

---

# 16. Estado del stock

El estado no será almacenado directamente.

Será calculado mediante:

```js
producto.cantidad <= producto.stockMinimo
```

Si se cumple:

```text
Stock bajo
```

Si no:

```text
Stock disponible
```

Esto evita duplicar información que puede calcularse a partir de datos existentes.

---

# 17. Persistencia mediante localStorage

Se utilizarán inicialmente las siguientes claves:

```text
crudInventario_usuarios
crudInventario_productos
crudInventario_sesion
```

## 17.1 Usuarios

```text
crudInventario_usuarios
```

Contendrá una colección de usuarios.

## 17.2 Productos

```text
crudInventario_productos
```

Contendrá la colección de productos.

## 17.3 Sesión

```text
crudInventario_sesion
```

Contendrá información de la sesión activa.

---

# 18. Serialización JSON

`localStorage` almacena información como texto.

Por esta razón será necesario convertir objetos y arrays.

## Guardar

```js
const datosJSON = JSON.stringify(datos);
localStorage.setItem("clave", datosJSON);
```

## Recuperar

```js
const datosJSON = localStorage.getItem("clave");
const datos = JSON.parse(datosJSON);
```

La implementación definitiva deberá incluir validaciones para manejar datos inexistentes o inválidos.

---

# 19. Flujo de registro

Flujo conceptual:

```text
Usuario abre registro
        ↓
Completa formulario
        ↓
JavaScript valida datos
        ↓
¿Datos válidos?
   │
   ├── No → mostrar error
   │
   └── Sí
        ↓
Comprobar usuario duplicado
        ↓
Crear objeto Usuario
        ↓
Agregar al array
        ↓
Guardar en localStorage
        ↓
Mostrar confirmación
        ↓
Ir al login
```

---

# 20. Flujo de inicio de sesión

```text
Usuario
   ↓
Ingresa credenciales
   ↓
JavaScript valida campos
   ↓
Busca usuario registrado
   ↓
¿Credenciales correctas?
   │
   ├── No → mensaje de error
   │
   └── Sí
        ↓
Crear sesión
        ↓
Guardar sesión
        ↓
Redirigir al dashboard
```

---

# 21. Flujo CRUD de productos

## Crear

```text
Formulario
   ↓
Validación
   ↓
Crear objeto
   ↓
Agregar al array
   ↓
Guardar
   ↓
Actualizar interfaz
```

## Consultar

```text
localStorage
   ↓
JSON.parse()
   ↓
Array de productos
   ↓
Renderizar en HTML
```

## Actualizar

```text
Seleccionar producto
   ↓
Cargar datos
   ↓
Editar
   ↓
Validar
   ↓
Actualizar array
   ↓
Guardar
   ↓
Renderizar
```

## Eliminar

```text
Seleccionar producto
   ↓
Solicitar confirmación
   ↓
Eliminar del array
   ↓
Guardar
   ↓
Actualizar interfaz
```

---

# 22. Validaciones previstas

## Usuarios

Se deberán validar:

- Campos obligatorios.
- Formato de correo.
- Usuario duplicado.
- Contraseña.
- Confirmación de contraseña.

## Productos

Se deberán validar:

- Código obligatorio.
- Código único.
- Nombre obligatorio.
- Categoría.
- Precio válido.
- Cantidad válida.
- Stock mínimo válido.
- Valores numéricos no negativos.

---

# 23. Manipulación del DOM

JavaScript interactuará con la interfaz utilizando el DOM.

Ejemplos de operaciones previstas:

- Obtener formularios.
- Leer valores de inputs.
- Escuchar eventos.
- Crear elementos.
- Actualizar tablas.
- Mostrar mensajes.
- Cambiar clases CSS.
- Mostrar indicadores de stock.

Se deberá evitar mezclar lógica innecesaria directamente dentro del HTML.

---

# 24. Manejo de eventos

Las principales interacciones se realizarán mediante eventos.

Ejemplo:

```js
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
```

Otros eventos podrán utilizarse para:

- Buscar productos.
- Editar.
- Eliminar.
- Cerrar sesión.
- Mostrar contraseña.

---

# 25. Convenciones de nombres

Se recomienda utilizar nombres descriptivos.

Correcto:

```js
guardarProductos()
buscarProducto()
validarCredenciales()
obtenerUsuarios()
```

Evitar:

```js
hacer()
dato1()
funcionX()
x()
```

Para variables y funciones JavaScript se utilizará preferiblemente `camelCase`.

Ejemplo:

```js
stockMinimo
fechaCreacion
guardarProducto
```

---

# 26. Separación de responsabilidades

La lógica deberá mantenerse organizada.

```text
login.js
    ↓
autenticación

productos.js
    ↓
inventario

storage.js
    ↓
persistencia
```

Una función debería tener una responsabilidad clara.

---

# 27. Control de versiones

El proyecto utiliza Git.

## Flujo básico

```bash
git status
git add <archivo>
git commit -m "tipo: descripcion"
git push
```

---

# 28. Convención de commits

Los mensajes de commit del proyecto se escribirán en **español**, utilizando verbos en **modo imperativo** y describiendo de forma clara la acción principal realizada.

El mensaje debe representar una unidad lógica de trabajo y evitar descripciones demasiado generales.

## Estructura recomendada

```text
Verbo + acción realizada
```

Ejemplos:

```text
Agrega validación de usuarios duplicados
Corrige cierre de sesión
Actualiza documentación de pruebas
Precisa requisitos funcionales de la versión 1.0
Reorganiza estructura de documentación
```

## Verbos utilizados

### `Agrega`

Se utiliza cuando se incorpora contenido, funcionalidad o archivos nuevos.

Ejemplos:

```text
Agrega formulario de registro
Agrega validación de correo duplicado
Agrega casos de prueba de autenticación
```

### `Corrige`

Se utiliza cuando se soluciona un error o comportamiento incorrecto.

Ejemplos:

```text
Corrige validación de credenciales
Corrige redirección al dashboard
Corrige iconos del formulario de login
```

### `Actualiza`

Se utiliza cuando información o contenido existente se lleva a un estado más reciente.

Ejemplos:

```text
Actualiza manual de usuario
Actualiza documentación de pruebas
Actualiza estado del proyecto
```

### `Precisa`

Se utiliza cuando se mejora la claridad, exactitud o nivel de detalle de información ya existente.

Ejemplos:

```text
Precisa requisitos funcionales de la versión 1.0
Precisa casos de uso
Precisa la visión y alcance del proyecto
```

### `Reorganiza`

Se utiliza cuando se modifica la estructura, ubicación u orden de archivos o contenido sin cambiar necesariamente su propósito.

Ejemplos:

```text
Reorganiza estructura de documentación
Reorganiza archivos del módulo de autenticación
```

## Reglas generales

* Escribir el mensaje en español.
* Utilizar modo imperativo.
* Describir la acción principal realizada.
* Evitar mensajes demasiado generales como `cambios`, `actualización` o `varias cosas`.
* Agrupar en un mismo commit cambios que formen parte de una misma unidad lógica de trabajo.
* Evitar crear un commit por cada línea o modificación pequeña.
* Revisar los cambios con `git status` y `git diff` antes de crear el commit.

## Ejemplo de flujo

```bash
git status
git diff
git add .
git commit -m "Actualiza manuales al estado actual del proyecto"
git push
```


---

# 30. Ejecución local

## Opción recomendada durante el desarrollo

1. Abrir el proyecto en Visual Studio Code.
2. Abrir `index.html`.
3. Ejecutar mediante Live Server.
4. Utilizar el navegador para realizar las pruebas.

También podrá abrirse directamente el HTML cuando la funcionalidad utilizada no dependa de características de servidor local.

---

# 31. Herramientas del navegador

Las Developer Tools serán utilizadas para:

- Revisar errores JavaScript.
- Inspeccionar HTML.
- Revisar estilos CSS.
- Consultar localStorage.
- Depurar funciones.
- Analizar valores de variables.

En navegadores basados en Chromium:

```text
F12
```

o:

```text
Ctrl + Shift + I
```

---

# 32. Revisión de localStorage

Desde las herramientas del navegador podrá verificarse la información almacenada.

Ruta aproximada:

```text
Developer Tools
→ Application
→ Storage
→ Local Storage
```

Deberán poder identificarse las claves del proyecto.

---

# 33. Pruebas

Las pruebas están documentadas en:

```text
docs/07-pruebas/
```

El proyecto utilizará inicialmente pruebas manuales funcionales.

Cada funcionalidad deberá comprobarse contra sus requisitos y criterios de aceptación.

---

# 34. Estados de prueba

Los estados utilizados serán:

- Pendiente.
- Aprobado.
- Fallido.
- Bloqueado.

Los resultados no deberán marcarse como aprobados hasta haber ejecutado realmente la prueba correspondiente.

---

# 35. Registro de errores

Cuando se encuentre un error deberá documentarse:

- Identificador.
- Funcionalidad.
- Descripción.
- Pasos para reproducir.
- Resultado esperado.
- Resultado obtenido.
- Evidencia.
- Estado.

---

# 36. Seguridad de la versión 1.0

La versión inicial tendrá limitaciones importantes.

No deberá considerarse adecuada para gestionar credenciales o información empresarial sensible en producción.

Entre sus limitaciones:

- Los datos se almacenan localmente.
- localStorage puede inspeccionarse desde el navegador.
- No existe servidor.
- No existe autenticación segura.
- No existe autorización real por roles.
- No existe cifrado empresarial.
- Los datos pueden perderse si el usuario elimina el almacenamiento del navegador.

---

# 37. Contraseñas

Durante la versión educativa no deberán utilizarse contraseñas personales o reales.

La implementación futura con backend deberá utilizar mecanismos seguros de almacenamiento de contraseñas y nunca guardar contraseñas directamente como texto plano.

---

# 38. Sesiones

La sesión de la versión 1.0 será únicamente una representación local.

Servirá para aprender:

- Autenticación.
- Condicionales.
- Persistencia.
- Navegación protegida.

No deberá considerarse equivalente a una sesión segura de servidor.

---

# 39. Compatibilidad

La aplicación estará orientada inicialmente a navegadores modernos.

Se deberá procurar utilizar:

- HTML estándar.
- CSS compatible.
- JavaScript moderno ampliamente soportado.

Las pruebas iniciales se realizarán principalmente en el navegador utilizado durante el desarrollo.

---

# 40. Diseño adaptable

La aplicación estará orientada inicialmente a escritorio.

Sin embargo, deberá mantenerse una estructura que pueda adaptarse progresivamente a:

- Tablets.
- Pantallas pequeñas.
- Dispositivos móviles.

Los prototipos visuales no se consideran definitivos hasta ser seleccionados para implementación.

---

# 41. Documentación del proyecto

La documentación está organizada de la siguiente manera:

```text
docs/
├── 00-documentacion-original/
├── 01-vision-alcance/
├── 02-requisitos/
├── 03-casos-de-uso/
├── 04-historias-de-usuario/
├── 05-diseno/
├── 06-modelo-datos/
├── 07-pruebas/
└── 08-manuales/
```

Cada documento deberá actualizarse cuando cambie una decisión importante relacionada con su contenido.

---

# 42. Trazabilidad

El proyecto busca mantener relación entre:

```text
Necesidad
   ↓
Requisito
   ↓
Caso de uso
   ↓
Historia de usuario
   ↓
Diseño
   ↓
Código
   ↓
Prueba
```

Esta relación permite comprender por qué existe cada funcionalidad.

---

# 43. Documentación original

Los documentos realizados previamente durante el proceso de formación se conservan como referencia dentro de:

```text
docs/00-documentacion-original/
```

Estos documentos representan antecedentes del proyecto y no necesariamente la especificación vigente.

La documentación actual dentro de las demás carpetas representa la evolución personal del sistema.

---

# 44. Diagrama del modelo de datos

El modelo lógico de datos se encuentra dentro de:

```text
docs/06-modelo-datos/diagramas/
```

Se recomienda conservar:

```text
modelo-datos-v1.drawio
modelo-datos-v1.png
```

El archivo `.drawio` constituye la fuente editable y el archivo `.png` permite visualizarlo fácilmente desde la documentación.

---

# 45. Instalación del proyecto

Mientras la versión 1.0 permanezca como aplicación frontend, no será necesario un proceso de instalación complejo.

Procedimiento general:

```bash
git clone git@github.com:carlossaenzz/CRUD-Inventario.git
cd CRUD-Inventario
code .
```

Después podrá ejecutarse `index.html` mediante Live Server.

---

# 46. Dependencias

La versión 1.0 evitará inicialmente dependencias complejas.

Las tecnologías principales serán nativas del navegador.

Si se utilizan bibliotecas externas visuales, deberán documentarse en:

- README principal.
- Este manual técnico.
- Código correspondiente.

---

# 47. Respaldo

GitHub funcionará como respaldo remoto del código y documentación.

Los cambios importantes deberán enviarse mediante:

```bash
git push
```

No se deben almacenar dentro del repositorio:

- Contraseñas.
- Tokens.
- Claves privadas SSH.
- Credenciales.
- Información sensible.

---

# 48. Mantenimiento

Cuando se modifique una funcionalidad deberá revisarse:

1. Código afectado.
2. Requisito relacionado.
3. Caso de uso.
4. Historia de usuario.
5. Pruebas.
6. Manual de usuario.
7. Manual técnico.

No todos los cambios requerirán modificar todos los documentos, pero deberá evaluarse su impacto.

---

# 49. Procedimiento general para agregar una funcionalidad

```text
Identificar necesidad
       ↓
Crear o modificar requisito
       ↓
Actualizar caso de uso
       ↓
Actualizar historia
       ↓
Diseñar interfaz
       ↓
Actualizar modelo de datos si aplica
       ↓
Implementar código
       ↓
Probar
       ↓
Documentar
       ↓
Commit
       ↓
Push
```

---

# 50. Solución de problemas técnicos

## JavaScript no se ejecuta

Revisar:

- Ruta del archivo `.js`.
- Etiqueta `<script>`.
- Consola del navegador.
- Errores de sintaxis.

---

## CSS no aparece

Revisar:

- Ruta del archivo CSS.
- Etiqueta `<link>`.
- Nombre del archivo.
- Caché del navegador.

---

## localStorage no guarda

Revisar:

- Nombre de la clave.
- Uso de `JSON.stringify`.
- Consola.
- Tipo de dato recibido.
- Developer Tools.

---

## JSON.parse genera error

Comprobar que exista información antes de convertirla.

Ejemplo conceptual:

```js
const datosGuardados = localStorage.getItem("clave");

if (datosGuardados) {
  const datos = JSON.parse(datosGuardados);
}
```

---

## Git no detecta archivos

Ejecutar:

```bash
git status
```

Después agregar los archivos correspondientes mediante:

```bash
git add <archivo>
```

---

## GitHub solicita credenciales HTTPS

El repositorio está configurado para utilizar SSH.

Comprobar:

```bash
git remote -v
```

Debe utilizar una dirección similar a:

```text
git@github.com:carlossaenzz/CRUD-Inventario.git
```

---

# 51. Limitaciones actuales

La versión inicial presenta las siguientes limitaciones técnicas:

- Persistencia únicamente local.
- No existe servidor.
- No existe base de datos remota.
- No hay sincronización.
- No existe multiusuario real.
- No existe multiempresa.
- No existe recuperación segura de contraseña.
- No existen reportes avanzados.
- No existe gestión completa de roles.
- No existe historial de movimientos de inventario.

Estas limitaciones son conocidas y forman parte del alcance definido.

---

# 52. Evolución futura

Una posible evolución del sistema será:

## Versión 1.0

- HTML.
- CSS.
- JavaScript.
- localStorage.
- Registro local.
- Login local.
- CRUD de productos.
- Búsqueda.
- Categorías básicas.
- Alertas de stock.

## Versión 2.0

- Backend.
- API.
- Base de datos.
- Persistencia centralizada.

## Versión 3.0

- Autenticación real.
- Roles.
- Permisos.
- Gestión segura de usuarios.

## Versión 4.0

- Entradas de inventario.
- Salidas.
- Historial de movimientos.
- Auditoría básica.

## Versión 5.0

Posibles módulos:

- Proveedores.
- Compras.
- Reportes.
- Estadísticas.
- Sistema multiempresa.

El roadmap podrá modificarse según las necesidades y conocimientos adquiridos.

---

# 53. Estado actual del proyecto

El proyecto se encuentra actualmente en fase de definición, documentación y preparación para la implementación de la versión 1.0.

Se encuentran definidos:

- Visión y alcance.
- Requisitos.
- Casos de uso.
- Historias de usuario.
- Diseño conceptual.
- Modelo de datos.
- Plan inicial de pruebas.
- Estructura de manuales.

La implementación funcional deberá desarrollarse progresivamente y las secciones de este manual deberán actualizarse cuando las decisiones planificadas se conviertan en comportamiento real del sistema.

---

# 54. Regla de actualización del manual

Este documento es un **documento vivo**.

Deberá actualizarse cuando ocurran cambios relevantes como:

- Nueva tecnología.
- Nueva carpeta.
- Nuevo archivo importante.
- Cambio del modelo de datos.
- Cambio de arquitectura.
- Nueva funcionalidad.
- Nueva dependencia.
- Cambio del procedimiento de ejecución.
- Incorporación de backend.
- Incorporación de base de datos.

La documentación técnica debe reflejar el funcionamiento real del proyecto y no únicamente su diseño inicial.

---

## Conclusión

El manual técnico establece una guía inicial para construir, comprender y mantener el proyecto CRUD Inventario.

La arquitectura de la versión 1.0 se ha mantenido deliberadamente sencilla para permitir comprender primero los fundamentos de HTML, CSS, JavaScript, objetos, arrays, DOM, eventos, JSON, localStorage, Git y GitHub.

Conforme el sistema evolucione, este documento deberá acompañar dicha evolución y registrar las decisiones técnicas relevantes del proyecto.