document.addEventListener("DOMContentLoaded", function () {

    // Fetch the descriptions data from the JSON file
    fetch('descriptions.json')
        .then(response => response.json())
        .then(data => {
            const esenciaDescriptions = data.esenciaDescriptions;
            const karmaDescriptions = data.karmaDescriptions;
            const regaloDivinoDescriptions = data.regaloDivinoDescriptions;
            const vidasPasadasDescriptions = data.vidasPasadasDescriptions;
            const misionDescriptions = data.misionDescriptions;
            const obstaculoDescriptions = data.obstaculoDescriptions;

            // Fetch the people data from the JSON file
            fetch('people.json')
                .then(response => response.json())
                .then(peopleData => {
                    const people = peopleData.sort((a, b) => a.name.localeCompare(b.name));

                    // Generate unique groups
                    const groups = [...new Set(people.map(person => person.grupo))];

                    // Create tabs
                    const tabsContainer = document.getElementById('tabs');
                    groups.forEach(group => {
                        const tab = document.createElement('div');
                        tab.className = 'tab';
                        tab.innerText = group;
                        tab.onclick = () => filterCards(group);
                        tabsContainer.appendChild(tab);
                    });

                    // Create cards
                    const cardsContainer = document.getElementById('cards-container');
                    function createCards(group) {
                        cardsContainer.innerHTML = '';
                        people.filter(person => person.grupo === group).forEach(person => {
                            const card = document.createElement("div");
                            card.classList.add("card");

                            const cardHeader = document.createElement("div");
                            cardHeader.classList.add("card-header");
                            cardHeader.textContent = person.name + " (" + person.birthDate + ")";
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

                            cardContent.appendChild(createParagraphOffset("Esencia", person.esencia, esenciaDescriptions));
                            cardContent.appendChild(createParagraphOffset("Karma", person.karma , karmaDescriptions));
                            cardContent.appendChild(createParagraph("Regalo Divino", person.regaloDivino, regaloDivinoDescriptions));
                            cardContent.appendChild(createParagraphOffset("Vidas Pasadas", person.vidasPasadas, vidasPasadasDescriptions));
                            cardContent.appendChild(createParagraphOffset("Misión", person.mision, misionDescriptions));
                            cardContent.appendChild(createParagraphOffset("Obstáculo", person.obstaculo, obstaculoDescriptions));

                            card.appendChild(cardHeader);
                            card.appendChild(cardContent);

                            cardsContainer.appendChild(card);
                        });
                    }

                    // Filter cards by group
                    function filterCards(group) {
                        document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
                        const activeTab = Array.from(document.querySelectorAll('.tab')).find(tab => tab.innerText === group);
                        if (activeTab) {
                            activeTab.classList.add('active');
                        }
                        createCards(group);
                    }

                    // Initialize with the first group
                    if (groups.length > 0) {
                        filterCards(groups[0]);
                    }
                })
                .catch(error => console.error('Error fetching people data:', error));
        })
        .catch(error => console.error('Error fetching descriptions data:', error));

});
