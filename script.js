// Lista de personas y sus resultados de numerología precargados
const people = [
    {
        fullName: "Angela Alicia Cortez Lemus",
        essence: 7,
        karma: 2,
        divineGift: 0,
        pastLives: 2000,
        mission: 9,
        obstacle: 9,
        description: {
            essence: "El número 7 en esencia indica una persona reflexiva, analítica y espiritual. Tienden a buscar la verdad más profunda y prefieren la soledad para alcanzar el entendimiento.",
            karma: "El número 2 en karma indica que esta persona puede tener lecciones relacionadas con la cooperación, la paciencia y la sensibilidad hacia los demás.",
            divineGift: "El número 0 en el regalo divino muestra un potencial ilimitado, una oportunidad para empezar de nuevo en cualquier área de su vida.",
            pastLives: "El número 2000 en vidas pasadas indica un alma que ha experimentado grandes cambios y desafíos en la vida anterior, logrando una capacidad única para adaptarse.",
            mission: "El número 9 en misión simboliza una vocación hacia el servicio humanitario, compasión y desinterés por los propios intereses.",
            obstacle: "El número 9 como obstáculo indica que los principales desafíos pueden estar relacionados con la compasión desmedida o el sacrificio personal extremo."
        }
    },
    {
        fullName: "Aracely Valdés Gutierrez",
        essence: 9,
        karma: 4,
        divineGift: 6,
        pastLives: 1996,
        mission: 11,
        obstacle: 4,
        description: {
            essence: "El número 9 en esencia representa una persona humanitaria, con una gran compasión y deseo de ayudar a los demás.",
            karma: "El número 4 en karma sugiere que esta persona debe trabajar en la estabilidad, la disciplina y el establecimiento de bases sólidas en su vida.",
            divineGift: "El número 6 en el regalo divino muestra una inclinación natural hacia la responsabilidad y el cuidado de los demás, especialmente de la familia.",
            pastLives: "El número 1996 en vidas pasadas revela una persona que ha desarrollado cualidades de responsabilidad y organización en vidas anteriores.",
            mission: "El número 11 en misión es un número maestro que representa intuición, iluminación y liderazgo espiritual.",
            obstacle: "El número 4 como obstáculo indica que los mayores desafíos podrían estar relacionados con la rigidez o la dificultad para adaptarse al cambio."
        }
    },
    {
        fullName: "Consuelo Mabel Vega Gonzalez",
        essence: 6,
        karma: 7,
        divineGift: 6,
        pastLives: 1996,
        mission: 12,
        obstacle: 13,
        description: {
            essence: "El número 6 en esencia representa una persona responsable, preocupada por el bienestar de los demás y con un fuerte sentido de comunidad.",
            karma: "El número 7 en karma indica la necesidad de desarrollar la intuición, la introspección y la fe.",
            divineGift: "El número 6 en el regalo divino sugiere que esta persona tiene un talento innato para cuidar a los demás y para crear ambientes armoniosos.",
            pastLives: "El número 1996 en vidas pasadas revela una experiencia de vida orientada al cuidado de la familia o comunidad.",
            mission: "El número 12 en misión implica un papel en la enseñanza o en la transmisión de valores elevados.",
            obstacle: "El número 13 como obstáculo muestra que puede haber lecciones relacionadas con el trabajo duro y la transformación personal."
        }
    },
    {
        fullName: "Elizabeth Arreola Mondragón",
        essence: 9,
        karma: 4,
        divineGift: 2,
        pastLives: 1980,
        mission: 5,
        obstacle: 13,
        description: {
            essence: "El número 9 en esencia simboliza una personalidad humanitaria y orientada al servicio desinteresado hacia los demás.",
            karma: "El número 4 en karma indica la necesidad de desarrollar estabilidad y bases sólidas en la vida.",
            divineGift: "El número 2 en el regalo divino refleja cualidades de cooperación, diplomacia y armonía.",
            pastLives: "El número 1980 sugiere que la persona tiene experiencia en relaciones interpersonales y el manejo de conflictos.",
            mission: "El número 5 en misión indica que la vida de esta persona está marcada por cambios y adaptabilidad.",
            obstacle: "El número 13 como obstáculo indica que los retos pueden estar relacionados con la disciplina y el trabajo."
        }
    },
    {
        fullName: "Magdalena Sánchez Molinero",
        essence: 3,
        karma: 11,
        divineGift: 3,
        pastLives: 1963,
        mission: 4,
        obstacle: 14,
        description: {
            essence: "El número 3 en esencia muestra una persona creativa, expresiva y comunicativa.",
            karma: "El número 11 en karma indica que esta persona debe desarrollar una intuición aguda y habilidades espirituales.",
            divineGift: "El número 3 en el regalo divino sugiere que esta persona posee un talento natural para la comunicación y la expresión creativa.",
            pastLives: "El número 1963 sugiere una vida anterior orientada a la estructura y a las responsabilidades organizacionales.",
            mission: "El número 4 en misión indica que esta persona debe enfocarse en la construcción de una base sólida y en el trabajo disciplinado.",
            obstacle: "El número 14 como obstáculo puede indicar retos relacionados con la autodisciplina y la necesidad de cambiar ciertos patrones."
        }
    },
    {
        fullName: "Magdalena Vidales Sánchez",
        essence: 3,
        karma: 9,
        divineGift: 2,
        pastLives: 2000,
        mission: 6,
        obstacle: 12,
        description: {
            essence: "El número 3 en esencia representa a una persona con una fuerte energía creativa y habilidades de comunicación.",
            karma: "El número 9 en karma implica lecciones relacionadas con la compasión y el servicio a los demás.",
            divineGift: "El número 2 en el regalo divino muestra que esta persona tiene una habilidad innata para la diplomacia y la mediación.",
            pastLives: "El número 2000 refleja una vida anterior enfocada en el equilibrio emocional y las relaciones.",
            mission: "El número 6 en misión indica una vida de servicio hacia la familia y la comunidad.",
            obstacle: "El número 12 como obstáculo indica que puede haber lecciones relacionadas con el autosacrificio y la sobrecarga emocional."
        }
    },

    {
        fullName: "María de la Salud Solórzano Villalón",
        essence: 3,
        karma: 7,
        divineGift: 4,
        pastLives: 1994,
        mission: 6,
        obstacle: 10,
        description: {
            essence: "El número 3 en esencia simboliza una persona con una gran capacidad creativa, sociable y expresiva.",
            karma: "El número 7 en karma indica que debe trabajar en su vida interior, desarrollando sabiduría y paciencia.",
            divineGift: "El número 4 en el regalo divino muestra habilidades naturales para organizar, construir y crear estructuras sólidas.",
            pastLives: "El número 1994 sugiere un alma que ha trabajado para encontrar equilibrio entre lo material y lo espiritual.",
            mission: "El número 6 en misión indica que la persona está llamada a ayudar a otros, particularmente en un ambiente familiar o comunitario.",
            obstacle: "El número 10 como obstáculo implica desafíos relacionados con la independencia y la autoafirmación."
        }
    },
    {
        fullName: "María Fernanda Infante Soria",
        essence: 11,
        karma: 1,
        divineGift: 9,
        pastLives: 1999,
        mission: 12,
        obstacle: 12,
        description: {
            essence: "El número 11 es un número maestro, que representa una persona intuitiva, visionaria y espiritual.",
            karma: "El número 1 en karma indica que debe aprender a ser líder, a confiar en sí misma y tomar la iniciativa.",
            divineGift: "El número 9 en regalo divino muestra un fuerte sentido de compasión y desinterés personal.",
            pastLives: "El número 1999 refleja una vida pasada marcada por una búsqueda profunda de sabiduría y sentido espiritual.",
            mission: "El número 12 en misión indica que su vida está destinada a la enseñanza y la inspiración.",
            obstacle: "El número 12 como obstáculo puede señalar desafíos en cuanto a sacrificios o dificultades para poner límites."
        }
    },
    {
        fullName: "María Guadalupe Gomez Herrera",
        essence: 9,
        karma: 9,
        divineGift: 3,
        pastLives: 1993,
        mission: 22,
        obstacle: 18,
        description: {
            essence: "El número 9 en esencia indica a una persona altruista, humanitaria y con un fuerte deseo de ayudar a otros.",
            karma: "El número 9 en karma señala lecciones relacionadas con la compasión y el servicio desinteresado.",
            divineGift: "El número 3 en regalo divino muestra habilidades innatas para la comunicación y la creatividad.",
            pastLives: "El número 1993 sugiere una vida dedicada a la búsqueda de ideales más elevados.",
            mission: "El número 22 en misión indica un rol como constructor maestro, alguien que puede lograr grandes cosas en el mundo material.",
            obstacle: "El número 18 como obstáculo implica lecciones importantes en torno al poder personal y las emociones profundas."
        }
    },
    {
        fullName: "Martha Alicia Cortes Rodriguez",
        essence: 4,
        karma: 4,
        divineGift: 6,
        pastLives: 1964,
        mission: 8,
        obstacle: 8,
        description: {
            essence: "El número 4 en esencia muestra a una persona práctica, estable y trabajadora.",
            karma: "El número 4 en karma indica que esta persona debe aprender lecciones de disciplina y constancia.",
            divineGift: "El número 6 en regalo divino refleja cualidades innatas para cuidar a otros y construir relaciones armónicas.",
            pastLives: "El número 1964 indica una vida pasada marcada por la necesidad de estructurar y organizar.",
            mission: "El número 8 en misión señala una vocación para lograr poder y éxito en el ámbito material.",
            obstacle: "El número 8 como obstáculo implica desafíos relacionados con el control y el manejo del poder."
        }
    },
    {
        fullName: "Miriam Graciela Sánchez Rocha",
        essence: 5,
        karma: 1,
        divineGift: 4,
        pastLives: 1974,
        mission: 7,
        obstacle: 6,
        description: {
            essence: "El número 5 en esencia simboliza una personalidad aventurera, libre y llena de curiosidad.",
            karma: "El número 1 en karma señala lecciones de liderazgo y autoconfianza.",
            divineGift: "El número 4 en regalo divino muestra habilidades innatas para crear estabilidad y orden.",
            pastLives: "El número 1974 refleja una vida dedicada a equilibrar el trabajo duro con el deseo de libertad.",
            mission: "El número 7 en misión indica una búsqueda de conocimiento profundo y desarrollo espiritual.",
            obstacle: "El número 6 como obstáculo señala que puede haber desafíos relacionados con las responsabilidades familiares o el autocuidado."
        }
    },
    {
        fullName: "Mónica Reyes Gomez",
        essence: 7,
        karma: 2,
        divineGift: 9,
        pastLives: 1997,
        mission: 8,
        obstacle: 9,
        description: {
            essence: "El número 7 en esencia indica una persona introspectiva, espiritual y analítica.",
            karma: "El número 2 en karma sugiere lecciones sobre la cooperación y la sensibilidad hacia los demás.",
            divineGift: "El número 9 en regalo divino muestra un talento para el servicio humanitario y la compasión.",
            pastLives: "El número 1997 indica una vida dedicada al servicio y la ayuda a otros.",
            mission: "El número 8 en misión señala que esta persona tiene un destino relacionado con la ambición y el éxito material.",
            obstacle: "El número 9 como obstáculo indica que los desafíos pueden estar relacionados con el sacrificio excesivo o la falta de límites personales."
        }
    },
    {
        fullName: "Nancy Karina Sánchez Villalón",
        essence: 9,
        karma: 11,
        divineGift: 6,
        pastLives: 1996,
        mission: 8,
        obstacle: 2,
        description: {
            essence: "El número 9 en esencia representa a una persona con gran compasión y deseo de servir a los demás.",
            karma: "El número 11 en karma es un número maestro que indica lecciones espirituales profundas.",
            divineGift: "El número 6 en regalo divino muestra un talento innato para cuidar y proteger a los demás.",
            pastLives: "El número 1996 refleja una vida de responsabilidad y trabajo duro.",
            mission: "El número 8 en misión indica un camino hacia el poder y el éxito en el ámbito material.",
            obstacle: "El número 2 como obstáculo indica desafíos en torno a la dependencia emocional y la necesidad de encontrar equilibrio en las relaciones."
        }
    },
    {
        fullName: "Rebeca Sofía Espinal Cortes",
        essence: 3,
        karma: 6,
        divineGift: 5,
        pastLives: 1996,
        mission: 4,
        obstacle: 9,
        description: {
            essence: "El número 3 en esencia representa una personalidad creativa, comunicativa y sociable.",
            karma: "El número 6 en karma señala lecciones relacionadas con la responsabilidad y el cuidado de los demás.",
            divineGift: "El número 5 en regalo divino muestra una inclinación natural hacia la libertad y la aventura.",
            pastLives: "El número 1996 indica que la persona ha trabajado en construir y cuidar de los demás en vidas anteriores.",
            mission: "El número 4 en misión indica que debe enfocarse en la construcción de una vida estable y estructurada.",
            obstacle: "El número 9 como obstáculo señala que los desafíos pueden estar relacionados con el exceso de sacrificio o la falta de límites."
        }
    },
    {
        fullName: "Reyna Curintzita Ramos",
        essence: 25,
        karma: 8,
        divineGift: 7,
        pastLives: 1976,
        mission: 9,
        obstacle: 8,
        description: {
            essence: "El número 25 en esencia representa una combinación de reflexión profunda y ambición práctica.",
            karma: "El número 8 en karma señala lecciones relacionadas con el poder y la autoridad.",
            divineGift: "El número 7 en regalo divino muestra habilidades naturales para la introspección y la búsqueda espiritual.",
            pastLives: "El número 1976 indica una vida marcada por la búsqueda de equilibrio entre lo material y lo espiritual.",
            mission: "El número 9 en misión señala una vida orientada al servicio humanitario y la compasión.",
            obstacle: "El número 8 como obstáculo indica que puede haber desafíos relacionados con el manejo del poder o el control."
        }
    },
    {
        fullName: "Rosa María Villalón Martinez del Campo",
        essence: 7,
        karma: 3,
        divineGift: 5,
        pastLives: 1968,
        mission: 7,
        obstacle: 10,
        description: {
            essence: "El número 7 en esencia refleja una persona introspectiva, analítica y con una fuerte inclinación espiritual.",
            karma: "El número 3 en karma indica lecciones relacionadas con la autoexpresión y el optimismo.",
            divineGift: "El número 5 en regalo divino muestra una inclinación natural hacia la libertad, la adaptabilidad y el cambio.",
            pastLives: "El número 1968 sugiere que esta persona ha trabajado para equilibrar la independencia y la estructura en vidas anteriores.",
            mission: "El número 7 en misión indica un camino de búsqueda espiritual y desarrollo de sabiduría interna.",
            obstacle: "El número 10 como obstáculo implica desafíos en cuanto a liderazgo, independencia y autoconfianza."
        }
    },
    {
        fullName: "Sandra Lourdes Nuñez Rodriguez",
        essence: 2,
        karma: 2,
        divineGift: 7,
        pastLives: 1987,
        mission: 10,
        obstacle: 4,
        description: {
            essence: "El número 2 en esencia representa una persona sensible, cooperativa y orientada a las relaciones personales.",
            karma: "El número 2 en karma sugiere lecciones de cooperación, paciencia y diplomacia.",
            divineGift: "El número 7 en regalo divino muestra un talento natural para la introspección y el pensamiento profundo.",
            pastLives: "El número 1987 refleja una vida pasada marcada por un equilibrio entre la ambición y el deseo de conocimiento.",
            mission: "El número 10 en misión indica un destino orientado hacia el liderazgo y la realización personal.",
            obstacle: "El número 4 como obstáculo señala que los desafíos pueden estar relacionados con la estabilidad y el orden en la vida."
        }
    },
    {
        fullName: "Verónica Gomez García",
        essence: 2,
        karma: 1,
        divineGift: 5,
        pastLives: 1975,
        mission: 6,
        obstacle: 3,
        description: {
            essence: "El número 2 en esencia simboliza una persona sensible y orientada hacia la colaboración y las relaciones armoniosas.",
            karma: "El número 1 en karma indica lecciones relacionadas con la independencia, la autoconfianza y el liderazgo.",
            divineGift: "El número 5 en regalo divino muestra una inclinación natural hacia la libertad, el cambio y la adaptabilidad.",
            pastLives: "El número 1975 sugiere una vida marcada por el equilibrio entre la libertad personal y las responsabilidades.",
            mission: "El número 6 en misión indica un camino orientado hacia el servicio a los demás, especialmente en el contexto familiar.",
            obstacle: "El número 3 como obstáculo implica desafíos en la autoexpresión y en el manejo de las emociones."
        }
    }

];

// Función que genera las secciones desplegables con la información de cada persona
function loadAccordion() {
    const container = document.getElementById('accordionContainer');

    people.forEach(person => {
        // Crear el botón de acordeón
        const button = document.createElement('button');
        button.classList.add('accordion');
        button.textContent = person.fullName;
        container.appendChild(button);

        // Crear el panel que contiene los resultados de numerología y descripciones
        const panel = document.createElement('div');
        panel.classList.add('panel');
        panel.innerHTML = `
            <h3>Resultados:</h3>
            <ul>
                <li><strong>Esencia:</strong> ${person.essence} - ${person.description.essence}</li>
                <li><strong>Karma:</strong> ${person.karma} - ${person.description.karma}</li>
                <li><strong>Regalo Divino:</strong> ${person.divineGift} - ${person.description.divineGift}</li>
                <li><strong>Vidas Pasadas:</strong> ${person.pastLives} - ${person.description.pastLives}</li>
                <li><strong>Misión:</strong> ${person.mission} - ${person.description.mission}</li>
                <li><strong>Obstáculo:</strong> ${person.obstacle} - ${person.description.obstacle}</li>
            </ul>
        `;
        container.appendChild(panel);

        // Lógica de abrir/cerrar el acordeón
        button.addEventListener('click', function () {
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            panel.style.display = panel.style.display === "block" ? "none" : "block";
        });
    });
}

// Cargar el acordeón automáticamente al cargar la página
window.onload = loadAccordion;
