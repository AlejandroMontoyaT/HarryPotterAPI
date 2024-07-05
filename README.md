# Consumir la API de Personajes de Harry Potter

## Descripción
Este ejercicio consiste en consumir la API de personajes de Harry Potter y mostrar la ficha de presentación de cada uno de los personajes 
con la información más representativa. Para la elaboración de las fichas se puede hacer uso de Bootstrap, Materialize o cualquier otra librería externa. 
En caso de no usar una librería, se mostrará a forma de tabla. Además, se implementará un filtro de búsqueda para mostrar sólo las coincidencias basadas
en el texto mostrado en las fichas y un filtro de selección para mostrar fichas que cumplan con criterios predefinidos 
(Gryffindor, Hufflepuff, Ravenclaw, Slytherin).

## Requerimientos

1. Consumir la API:
    - URL de la API: [Harry Potter API](https://hp-api.onrender.com/api/characters)

2. Mostrar la ficha de presentación de cada personaje:
    - Información más representativa de cada personaje.
    - Para los personajes que no cuenten con imagen, asignar una por defecto.

3. Filtros de búsqueda:
    - Implementar una caja de texto para buscar coincidencias basadas en el texto de las fichas.
    - Utilizar un `select` para filtrar fichas según la casa a la que pertenecen (Gryffindor, Hufflepuff, Ravenclaw, Slytherin).

## Tecnologías
- JavaScript
- HTML
- CSS
- Bootstrap / Materialize (opcional)

## Instrucciones

### 1. Consumir la API
Utiliza `fetch` para obtener los datos de la API de personajes de Harry Potter:

```javascript
fetch('https://hp-api.onrender.com/api/characters')
  .then(response => response.json())
  .then(data => {
    // Procesar los datos de los personajes
    mostrarPersonajes(data);
  })
  .catch(error => console.error('Error al consumir la API:', error));