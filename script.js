document.addEventListener("DOMContentLoaded", ()=>{
    const apiUrl = 'https://hp-api.onrender.com/api/characters';
    const container = document.getElementById ('container');
    const searchInput = document.getElementById('searchInput');
    const houseSelect = document.getElementById('houseSelect');
    
    let characters = [];

      async function fetch(){

        const response = await fetch(apiUrl);
        characters = await response.json();

      
      }

});