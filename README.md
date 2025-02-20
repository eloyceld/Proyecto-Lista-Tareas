# Lista de Tareas con Bootstrap

Este proyecto es una aplicación web sencilla para gestionar tareas. Permite añadir y eliminar tareas dinámicamente con una interfaz estilizada usando Bootstrap.

## Uso de Bootstrap

Bootstrap es una biblioteca CSS que facilita la creación de interfaces responsivas sin necesidad de escribir mucho código CSS personalizado. En este proyecto se usan varias clases de Bootstrap:

- **Botones (`btn btn-primary`)**: Aplican estilos a los botones de agregar y borrar tareas.
- **Formularios (`form-control`, `w-50`, `mb-3`)**: Estiliza el campo de entrada y lo posiciona correctamente.
- **Diseño con Flexbox (`d-flex`, `align-items-center`, `me-2`)**: Alinea los elementos dentro de la lista de tareas.
- **Espaciado (`my-3`, `mb-3`)**: Añade márgenes para mejorar la distribución visual.

### Ejemplo de inclusión de Bootstrap en el HTML:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
```

---

## Estructura del Proyecto

El código está dividido en dos archivos principales:

1. `index.html`: Contiene la estructura y diseño de la aplicación.
2. `app.js`: Contiene la lógica para gestionar las tareas.

---

## 1. Archivo `index.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lista de Tareas</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body class="container mt-4">
    <div class="mb-3">
        <input id="nuevaTarea" type="text" class="form-control d-inline w-50" placeholder="Escribe una tarea">
        <button onclick="anadirTarea()" class="btn btn-primary">Añadir</button>
    </div>
    <hr>
    <ul id="lista" class="list-unstyled"></ul>
    <script src="app.js"></script>
</body>
</html>
```

### Explicación del código HTML
- Se incluye Bootstrap en el `<head>`.
- Se define un campo de entrada (`<input>`) con la clase `form-control` para dar estilo.
- Se agrega un botón para añadir tareas con la clase `btn btn-primary`.
- Se define una lista sin estilos (`list-unstyled`) para mostrar las tareas.
- Se carga el script `app.js` al final para manejar la lógica.

---

## 2. Archivo `app.js`

```js
function anadirTarea() {
  let input = document.getElementById("nuevaTarea");
  let tarea = input.value.trim();
  if (tarea === "") return;

  let lista = document.getElementById("lista");
  let li = document.createElement("li");
  li.className = "d-flex align-items-center my-3";

  let punto = document.createElement("span");
  punto.textContent = "• ";
  punto.className = "me-2";

  let btnBorrar = document.createElement("button");
  btnBorrar.textContent = "Borrar";
  btnBorrar.className = "btn btn-primary me-2 float-start";
  btnBorrar.onclick = function() {
    lista.removeChild(li);
  };

  let texto = document.createElement("span");
  texto.textContent = tarea;

  li.appendChild(punto);
  li.appendChild(btnBorrar);
  li.appendChild(texto);

  lista.appendChild(li);
  input.value = "";
}
```

### Explicación del código JavaScript
- **`anadirTarea()`**: Función que se ejecuta cuando el usuario hace clic en el botón "Añadir".
- **`document.getElementById("nuevaTarea")`**: Obtiene el valor del campo de entrada.
- **`trim()`**: Elimina espacios en blanco al inicio y final de la cadena.
- **Verificación de entrada vacía**: Si la entrada está vacía, la función se detiene (`return`).
- **`document.createElement("li")`**: Crea un nuevo elemento de lista `<li>`.
- **Clases CSS**: Se asignan clases Bootstrap a los elementos (`d-flex align-items-center my-3`).
- **Punto decorativo**: Se añade un punto `•` al inicio de cada tarea.
- **Botón de borrar**: Se crea un botón con clase `btn btn-primary`, que al hacer clic elimina la tarea de la lista.
- **`appendChild()`**: Se agregan los elementos (punto, botón, texto) a la lista.
- **Reiniciar el campo de entrada**: Después de añadir la tarea, el campo se vacía (`input.value = ""`).

---

## Cómo Ejecutar el Proyecto

1. **Clonar o descargar el repositorio**
2. **Abrir `index.html` en el navegador**
3. **Interacción con la aplicación:**
   - Escribir una tarea en el campo de entrada.
   - Hacer clic en "Añadir" para insertarla en la lista.
   - Usar "Borrar" para eliminar la tarea seleccionada.

---

## Conclusión

Este proyecto es ideal para aprender manipulación del DOM con JavaScript, aplicar Bootstrap para mejorar el diseño sin escribir mucho CSS y gestionar eventos para hacer aplicaciones interactivas.

