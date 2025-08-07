

async function fetchPeople() {
    console.log("[fetchPeople] Iniciando petición a SheetDB...");
    try {
        const response = await fetch(SHEETDB_API_URL);
        console.log("[fetchPeople] Status de respuesta:", response.status);
        if (!response.ok) {
            const errorText = await response.text();
            console.error("[fetchPeople] Error en la respuesta:", errorText);
            throw new Error(`Error al cargar datos: ${response.status} - ${errorText}`);
        }
        const peopleData = await response.json();
        console.log("[fetchPeople] Datos recibidos:", peopleData);
        
        // Aquí está el fix
        return Array.isArray(peopleData) ? peopleData : (peopleData.data || []);
    } catch (error) {
        console.error("[fetchPeople] Excepción:", error);
        return [];
    }
}


async function init() {
    console.log("[init] Inicializando app...");
    try {
        const response = await fetch('descriptions.json');
        if (!response.ok) throw new Error('Error cargando descriptions.json');
        const data = await response.json();
        console.log("[init] Descripciones cargadas correctamente.");

        const esenciaDescriptions = data.esenciaDescriptions;
        const karmaDescriptions = data.karmaDescriptions;
        const regaloDivinoDescriptions = data.regaloDivinoDescriptions;
        const vidasPasadasDescriptions = data.vidasPasadasDescriptions;
        const misionDescriptions = data.misionDescriptions;
        const obstaculoDescriptions = data.obstaculoDescriptions;

        const people = await fetchPeople();
        console.log("[init] Personas obtenidas:", people);

        if (people.length === 0) {
            console.warn("[init] No se encontraron personas.");
            return;
        }

        // Ordenar personas alfabéticamente
        people.sort((a, b) => a.name.localeCompare(b.name));
        console.log("[init] Personas ordenadas:", people);

        // Generar grupos únicos
        const groups = [...new Set(people.map(person => person.group || person.grupo))];
        console.log("[init] Grupos únicos encontrados:", groups);

        // Crear tabs
        const tabsContainer = document.getElementById('tabs');
        if (!tabsContainer) {
            console.error("[init] No se encontró el contenedor de tabs.");
            return;
        }
        tabsContainer.innerHTML = '';
        groups.forEach(group => {
            const tab = document.createElement('div');
            tab.className = 'tab';
            tab.innerText = group;
            tab.onclick = () => filterCards(group);
            tabsContainer.appendChild(tab);
        });
        console.log("[init] Tabs creados correctamente.");

        const cardsContainer = document.getElementById('cards-container');
        if (!cardsContainer) {
            console.error("[init] No se encontró el contenedor de tarjetas.");
            return;
        }

        function createCards(group) {
            console.log("[createCards] Mostrando grupo:", group);
            cardsContainer.innerHTML = '';
            const filtered = people.filter(person => (person.group || person.grupo) === group);
            console.log(`[createCards] Personas en grupo '${group}':`, filtered);

            filtered.forEach(person => {
                const card = document.createElement("div");
                card.classList.add("card");

                const cardHeader = document.createElement("div");
                cardHeader.classList.add("card-header");
                cardHeader.textContent = person.name + " (" + person.birthdate + ")";
                cardHeader.addEventListener("click", () => {
                    card.classList.toggle("active");
                });

                const cardContent = document.createElement("div");
                cardContent.classList.add("card-content");

                const createParagraph = (label, number, descriptionArray) => {
                    const paragraph = document.createElement("p");
                    paragraph.innerHTML = `<strong>${label}:</strong> ${number} - ${descriptionArray[number] || "Sin descripción"}`;
                    return paragraph;
                };

                const createParagraphOffset = (label, number, descriptionArray) => {
                    const paragraph = document.createElement("p");
                    paragraph.innerHTML = `<strong>${label}:</strong> ${number} - ${descriptionArray[number - 1] || "Sin descripción"}`;
                    return paragraph;
                };

                cardContent.appendChild(createParagraphOffset("Esencia", person.essence || person.esencia, esenciaDescriptions));
                cardContent.appendChild(createParagraphOffset("Karma", person.karma, karmaDescriptions));
                cardContent.appendChild(createParagraph("Regalo Divino", person.gift || person.regaloDivino, regaloDivinoDescriptions));
                cardContent.appendChild(createParagraphOffset("Vidas Pasadas", person.past_lives || person.vidasPasadas, vidasPasadasDescriptions));
                cardContent.appendChild(createParagraphOffset("Misión", person.mission || person.mision, misionDescriptions));
                cardContent.appendChild(createParagraphOffset("Obstáculo", person.obstacle || person.obstaculo, obstaculoDescriptions));

                card.appendChild(cardHeader);
                card.appendChild(cardContent);
                cardsContainer.appendChild(card);
            });
        }

        function filterCards(group) {
            console.log("[filterCards] Filtrando grupo:", group);
            document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
            const activeTab = Array.from(document.querySelectorAll('.tab')).find(tab => tab.innerText === group);
            if (activeTab) {
                activeTab.classList.add('active');
            }
            createCards(group);
        }

        if (groups.length > 0) {
            console.log("[init] Inicializando con grupo:", groups[0]);
            filterCards(groups[0]);
        } else {
            console.warn("[init] No hay grupos para mostrar.");
        }

        window.filterCards = filterCards;

    } catch (error) {
        console.error("[init] Error initializing app:", error);
    }
}

init();

window.addEventListener('peopleUpdated', () => {
    console.log("[event] Evento peopleUpdated recibido: recargando datos...");
    init();
});
