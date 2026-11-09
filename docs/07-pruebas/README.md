# Pruebas — CRUD Inventario

## 1. Introducción

La etapa de pruebas tiene como objetivo verificar que el sistema CRUD Inventario funcione de acuerdo con los requisitos definidos para la versión 1.0.

Las pruebas permitirán identificar errores, validar el comportamiento de las funcionalidades y comprobar que las operaciones realizadas por el usuario produzcan los resultados esperados.

En esta etapa se documentarán tanto las pruebas planificadas como los resultados obtenidos durante la implementación.

---

## 2. Objetivo

Comprobar que las principales funcionalidades del sistema funcionen correctamente y cumplan los requisitos establecidos.

Entre las funcionalidades que deberán verificarse se encuentran:

- Registro de usuario.
- Inicio de sesión.
- Dashboard.
- Registro de productos.
- Consulta de productos.
- Actualización de productos.
- Eliminación de productos.
- Búsqueda.
- Categorías.
- Control de existencias.
- Alertas de stock bajo.
- Cierre de sesión.
- Persistencia mediante localStorage.

---

## 3. Estrategia inicial de pruebas

Para la versión 1.0 se realizarán principalmente pruebas funcionales manuales.

Estas pruebas consistirán en ejecutar determinadas acciones desde la interfaz y comprobar si el resultado obtenido corresponde con el resultado esperado.

También se realizarán pruebas relacionadas con:

- Validación de formularios.
- Persistencia de datos.
- Navegación.
- Sesión de usuario.
- Compatibilidad básica.
- Diseño adaptable.
- Manejo de errores.

---

## 4. Estados de una prueba

Cada caso de prueba podrá tener uno de los siguientes estados:

- **Pendiente:** todavía no ha sido ejecutado.
- **Aprobado:** el resultado obtenido corresponde con el esperado.
- **Fallido:** se detectó un comportamiento incorrecto.
- **Bloqueado:** la prueba no puede ejecutarse debido a otro problema.

---

## 5. Evidencias

Las capturas de pantalla u otras evidencias generadas durante las pruebas se almacenarán en:

`docs/07-pruebas/evidencias/`

Estas evidencias permitirán documentar errores encontrados y comprobar posteriormente las correcciones realizadas.

---

## 6. Estado actual

**Estado:** planificación completada y ejecución progresiva de pruebas.

El plan y los casos de prueba de la versión 1.0 se encuentran definidos.

Las pruebas serán ejecutadas progresivamente conforme las funcionalidades estén implementadas. Actualmente pueden verificarse las funcionalidades relacionadas con registro de usuarios, inicio de sesión, validación de credenciales, manejo de sesión, protección del dashboard y cierre de sesión.

Las pruebas relacionadas con gestión de productos, búsquedas, categorías, existencias y stock bajo permanecerán pendientes hasta que dichas funcionalidades sean desarrolladas.

Los resultados obtenidos y las evidencias correspondientes se registrarán durante la ejecución de cada prueba.