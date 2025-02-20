function anadirTarea() {
    let input = document.getElementById("nuevaTarea");
    let tarea = input.value.trim();
    if (tarea === "") return; // Si no se ingresa texto, no se añade la tarea.
  
    let lista = document.getElementById("lista");
    let li = document.createElement("li");
    li.className = "d-flex align-items-center my-3";  // Usa flex para alinear y añade márgenes verticales.
  
    // Crea el punto "•" a la izquierda de la tarea.
    let punto = document.createElement("span");
    punto.textContent = "• ";
    punto.className = "me-2";
  
    // Crea el botón "Borrar" con el mismo estilo que el botón "Añadir".
    let btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.className = "btn btn-primary me-2 float-start";
    btnBorrar.onclick = function() {
      lista.removeChild(li); // Elimina la tarea al hacer clic.
    };
  
    // Crea un span que contiene el texto de la tarea.
    let texto = document.createElement("span");
    texto.textContent = tarea;
  
    // Agrega el punto, el botón y el texto al elemento <li>.
    li.appendChild(punto);
    li.appendChild(btnBorrar);
    li.appendChild(texto);
  
    // Añade la nueva tarea a la lista.
    lista.appendChild(li);
    input.value = ""; // Limpia el campo de entrada.
  }