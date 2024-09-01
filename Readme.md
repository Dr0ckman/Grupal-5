## Problema

El sitio web "Que se Come Hoy" desea crear un sitio en la cual pueda mostrar sus distintas
recetas. Para esto se requiere desarrollar un programa con JavaScript que interactúe con
un formulario con el objetivo de generar un botón select con las distintas recetas.
Al hacer click en el select las recetas deben visualizarse como un card de Bootstrap en el
DOM en función del nombre. Para poder trabajar el recetario se dejan los siguientes end
point:

El procedimiento de manera general para lograr lo solicitado será:

- Crear una función asíncrona que contenga la URL en una variable.
- Luego mediante el bloque de try/catch para realizar manejo de excepciones
conectarse a la URL indicada anteriormente con el método fetch, utilizando a la vez
await para que retorne directamente el valor de la promesa.
- Utilizar métodos para iterar arreglos, como por ejemplo el forEach, para poder
mostrar las categorías y la información inserta en cada categoría.

**Documentación de la API**
- https://www.themealdb.com/api.php

**Muestra todas las categorías**
- https://www.themealdb.com/api/json/v1/1/categories.php

**Muestra las recetas por nombre**
- https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

**Bajar HTML**
- https://drive.google.com/drive/folders/1TlM374IiVOUvrMJe6BsQLU8hDqlX_uTU?usp=sharing

## Requerimientos

1. Crear todo el código usando ES6. (1 puntos)
2. Utilizar el método API FETCH. (3 puntos)
3. Implementar con modularidad (1 punto)
4. Hacer uso de Promesas (3 puntos)
5. Hacer uso de control de excepción try/catch (2 puntos)
6. Utilizar métodos de iteración de arreglos (2 puntos)
7. Generar formulario para captar opciones del usuario (2 puntos)
8. Generar card con información de la receta filtrada por categoría o nombre (3
puntos)

## Requerimiento opcional
1. Generar un botón y/o opción que permita mostrar traer múltiples recetas
El trabajo debe ser subido en formato zip, rar o archivo de texto con URL del repositorio