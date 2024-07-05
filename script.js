// Se agrega un evento al documento para que se ejecute cuando todo el contenido del DOM esté cargado y listo.
document.addEventListener("DOMContentLoaded", ()=>{

    // Se define la URL de la API desde la que se obtendrán los datos de los personajes.
    const apiUrl = 'https://hp-api.onrender.com/api/characters';

    // Se obtienen referencias a los elementos del DOM que se utilizarán más adelante.
    const container = document.getElementById ('container');
    const searchInput = document.getElementById('searchInput');
    const houseSelect = document.getElementById('houseSelect');

    // Se declara un array vacío para almacenar los datos de los personajes que se obtendrán de la API.
    let characters = [];

    // Se define la URL de la imagen por defecto.
    const defaultImage = 'url_de_tu_imagen_por_defecto';

    // Función asíncrona para obtener los datos de los personajes de la API.
    async function fetchCharacters(){
        // Se realiza una petición a la API.
        const response = await fetch(apiUrl);

        // Se convierte la respuesta de la API a JSON y se almacena en el array de personajes.
        characters = await response.json();

        // Se llama a la función para mostrar los personajes en el DOM.
        displayCharacters(characters);
    }

    // Función para mostrar los datos de los personajes en el DOM.
    function displayCharacters(characters) {
        // Se limpia el contenido del contenedor de personajes.
        container.innerHTML = '';

        // Se recorre el array de personajes.
        characters.forEach(character => {
            // Se crea un nuevo elemento div para cada personaje.
            const characterCard = document.createElement('div');
            characterCard.className = 'col-md-4 character-card';

            // Se verifica si el personaje tiene una imagen, si no, se utiliza la imagen por defecto.
            const characterImage = character.image ? character.image : defaultImage;

            // Se establece el contenido HTML del div del personaje.
            characterCard.innerHTML = `
                <img src="${characterImage}" alt="${character.name}" class="character-image">
                <h3>${character.name}</h3>
                <p><strong>House:</strong> ${character.house || 'Unknown'}</p>
                <p><strong>Actor:</strong> ${character.actor || 'Unknown'}</p>
            `;

            // Se agrega el div del personaje al contenedor de personajes.
            container.appendChild(characterCard);
        });
    }

    // Función para filtrar los personajes basándose en el texto de búsqueda y la casa seleccionada.
    function filterCharacters() {
        // Se obtiene el texto de búsqueda y se convierte a minúsculas.
        const searchText = searchInput.value.toLowerCase();

        // Se obtiene la casa seleccionada.
        const selectedHouse = houseSelect.value;

        // Se filtran los personajes que coinciden con el texto de búsqueda y la casa seleccionada.
        const filteredCharacters = characters.filter(character => {
            const matchesName = character.name.toLowerCase().includes(searchText);
            const matchesHouse = selectedHouse ? character.house === selectedHouse : true;
            return matchesName && matchesHouse;
        });

        // Se muestran los personajes filtrados en el DOM.
        displayCharacters(filteredCharacters);
    }

    // Se agregan eventos a los elementos de entrada para que se filtre los personajes cada vez que se cambie el texto de búsqueda o la casa seleccionada.
    searchInput.addEventListener('input', filterCharacters);
    houseSelect.addEventListener('change', filterCharacters);

    // Se obtienen y muestran los personajes cuando se carga la página.
    fetchCharacters();
});