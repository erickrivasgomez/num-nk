document.addEventListener("DOMContentLoaded", function () {
    const people = [
        {
            "name": "Ángela Alicia Cortez Lemus",
            "birthDate": "7/2/2000",
            "esencia": 7,
            "karma": 2,
            "regaloDivino": 0,
            "vidasPasadas": 2,
            "mision": 2,
            "obstaculo": 9
        },
        {
            "name": "Aracely Valdés Gutierrez",
            "birthDate": "18/4/1996",
            "esencia": 9,
            "karma": 4,
            "regaloDivino": 6,
            "vidasPasadas": 7,
            "mision": 1,
            "obstaculo": 4
        },
        {
            "name": "Consuelo Mabel Vega Gonzalez",
            "birthDate": "6/7/1996",
            "esencia": 6,
            "karma": 7,
            "regaloDivino": 6,
            "vidasPasadas": 7,
            "mision": 11,
            "obstaculo": 4
        },
        {
            "name": "Elizabeth Arreola Mondragón",
            "birthDate": "18/4/1980",
            "esencia": 9,
            "karma": 4,
            "regaloDivino": 8,
            "vidasPasadas": 9,
            "mision": 3,
            "obstaculo": 4
        },
        {
            "name": "Hilda de la Torre Ponce",
            "birthDate": "15/4/1972",
            "esencia": 5,
            "karma": 6,
            "regaloDivino": 4,
            "vidasPasadas": 10,
            "mision": 2,
            "obstaculo": 7
        },
        {
            "name": "Magdalena Sánchez Molinero",
            "birthDate": "12/11/1963",
            "esencia": 3,
            "karma": 11,
            "regaloDivino": 3,
            "vidasPasadas": 2,
            "mision": 7,
            "obstaculo": 5
        },
        {
            "name": "Magdalena Vidales Sánchez",
            "birthDate": "3/9/2000",
            "esencia": 3,
            "karma": 9,
            "regaloDivino": 0,
            "vidasPasadas": 2,
            "mision": 5,
            "obstaculo": 3
        },
        {
            "name": "María de la Salud Solórzano Villalón",
            "birthDate": "30/7/1994",
            "esencia": 3,
            "karma": 7,
            "regaloDivino": 4,
            "vidasPasadas": 5,
            "mision": 8,
            "obstaculo": 1
        },
        {
            "name": "María Fernanda Infante Soria",
            "birthDate": "11/1/1999",
            "esencia": 11,
            "karma": 1,
            "regaloDivino": 9,
            "vidasPasadas": 2,
            "mision": 4,
            "obstaculo": 3
        },
        {
            "name": "María Guadalupe Gomez Herrera",
            "birthDate": "18/9/1993",
            "esencia": 9,
            "karma": 9,
            "regaloDivino": 3,
            "vidasPasadas": 4,
            "mision": 5,
            "obstaculo": 9
        },
        {
            "name": "Martha Alicia Cortes Rodriguez",
            "birthDate": "22/4/1964",
            "esencia": 22,
            "karma": 4,
            "regaloDivino": 10,
            "vidasPasadas": 2,
            "mision": 5,
            "obstaculo": 8
        },
        {
            "name": "Miriam Graciela Sánchez Rocha",
            "birthDate": "5/10/1974",
            "esencia": 5,
            "karma": 1,
            "regaloDivino": 11,
            "vidasPasadas": 3,
            "mision": 9,
            "obstaculo": 6
        },
        {
            "name": "Mónica Reyes Gomez",
            "birthDate": "25/11/1997",
            "esencia": 7,
            "karma": 11,
            "regaloDivino": 7,
            "vidasPasadas": 8,
            "mision": 5,
            "obstaculo": 9
        },
        {
            "name": "Nancy Karina Sánchez Villalón",
            "birthDate": "28/11/1996",
            "esencia": 1,
            "karma": 11,
            "regaloDivino": 6,
            "vidasPasadas": 7,
            "mision": 6,
            "obstaculo": 3
        },
        {
            "name": "Paola Bautista Calderón",
            "birthDate": "05/Jul/2004",
            "esencia": 5,   // 5 (día de nacimiento)
            "karma": 7,     // 7 (mes de nacimiento)
            "regaloDivino": 4, // 04 (últimos dos dígitos del año)
            "vidasPasadas": 6, // 2+0+0+4 = 6
            "mision": 16, // 5+7+2+0+0+4 = 18 -> 1+6 = 7
            "obstaculo": 3  // 5 (esencia) + 7 (karma) = 12 -> 1+2 = 3
        },
        {
            "name": "Rebeca Sofía Espinal Cortes",
            "birthDate": "30/6/1996",
            "esencia": 3,
            "karma": 6,
            "regaloDivino": 6,
            "vidasPasadas": 7,
            "mision": 4,
            "obstaculo": 9
        },
        {
            "name": "Reyna Curintzita Ramos",
            "birthDate": "25/8/1976",
            "esencia": 7,
            "karma": 8,
            "regaloDivino": 4,
            "vidasPasadas": 3,
            "mision": 5,
            "obstaculo": 9
        },
        {
            "name": "Rosa María Villalón Martinez del Campo",
            "birthDate": "7/3/1968",
            "esencia": 7,
            "karma": 3,
            "regaloDivino": 8,
            "vidasPasadas": 2,
            "mision": 3,
            "obstaculo": 1
        },
        {
            "name": "Sandra Lourdes Nuñez Rodriguez",
            "birthDate": "29/2/1987",
            "esencia": 2,
            "karma": 2,
            "regaloDivino": 7,
            "vidasPasadas": 8,
            "mision": 9,
            "obstaculo": 4
        },
        {
            "name": "Verónica Gomez García",
            "birthDate": "2/1/1975",
            "esencia": 2,
            "karma": 1,
            "regaloDivino": 5,
            "vidasPasadas": 6,
            "mision": 9,
            "obstaculo": 3

        }
    ];


    // Descripciones para cada aspecto de numerología
    const esenciaDescriptions = {
        1: "Tu esencia es la de un líder nato, con enfoque en la independencia y autosuficiencia. Te esfuerzas por destacar en todo lo que haces.",
        2: "Tu esencia refleja una naturaleza pacífica y cooperativa, buscando siempre la armonía en tus relaciones y ambientes.",
        3: "La creatividad y la autoexpresión forman el núcleo de tu esencia. Tienes un espíritu optimista y expresivo.",
        4: "Tu esencia está basada en la estabilidad y el trabajo duro. Eres organizado y perseverante en la búsqueda de tus metas.",
        5: "Eres alguien aventurero, con un deseo constante de cambio y nuevas experiencias. Tu esencia es la libertad.",
        6: "Tu esencia está marcada por el cuidado y la responsabilidad, siempre buscando proteger y servir a los demás.",
        7: "Tu esencia es profunda y reflexiva. Buscas respuestas espirituales y tiendes a ser introspectivo.",
        8: "Eres una persona ambiciosa y orientada al éxito, con una gran habilidad para gestionar responsabilidades.",
        9: "Tu esencia es compasiva y humanitaria. Buscas ayudar a otros y mejorar el mundo.",
        10: "El número 10 simboliza la rueda de la vida, un ciclo completo. Tu esencia está en la transformación constante y el renacimiento.",
        11: "El 11 es un número maestro. Tu esencia está conectada a la intuición y a una visión espiritual elevada.",
        22: "El número maestro 22 te da una esencia de construcción poderosa, capaz de convertir sueños en realidad a gran escala.",
        33: "El número maestro 33 es la esencia de un maestro espiritual. Eres compasivo y estás aquí para enseñar amor incondicional."
    };

    const karmaDescriptions = {
        1: "El karma del número 1 te invita a desarrollar independencia y confianza en ti mismo.",
        2: "Tu karma está relacionado con aprender a cooperar y adaptarte a los demás, buscando la diplomacia.",
        3: "Debes aprender a expresarte con claridad y autenticidad. La comunicación es clave para equilibrar tu karma.",
        4: "El karma te lleva a construir bases sólidas y aprender la importancia del esfuerzo constante.",
        5: "Tu karma está relacionado con la adaptación al cambio y encontrar el equilibrio entre libertad y responsabilidad.",
        6: "Tienes que asumir responsabilidades en tu vida familiar o en la comunidad. El servicio es un aspecto clave de tu karma.",
        7: "Debes profundizar en tu interior y aprender a confiar en tu intuición y sabiduría espiritual.",
        8: "El karma te desafía a equilibrar el poder material con los valores espirituales y éticos.",
        9: "Tu karma está ligado a la compasión y el servicio a los demás, siempre buscando el bien común.",
        10: "Tu karma con el número 10 implica dominar el cambio constante y los ciclos en la vida.",
        11: "El karma del número 11 te llama a desarrollar tu intuición y a seguir tu propósito espiritual más elevado.",
        22: "Tu karma del 22 está en construir grandes cosas en esta vida, llevando a cabo misiones que ayuden a la humanidad.",
        33: "El karma del número 33 implica vivir de acuerdo con los principios del amor incondicional y la enseñanza espiritual."
    };

    const regaloDivinoDescriptions = {
        0: "El regalo divino del número 0 representa una conexión directa con lo infinito. Es una señal de potencial ilimitado.",
        1: "Tu regalo divino es la capacidad de liderazgo y la fuerza interior para abrir caminos nuevos.",
        2: "Tu regalo es la sensibilidad y la capacidad de trabajar bien con los demás.",
        3: "El regalo divino del número 3 te otorga la habilidad de comunicarte creativamente y de alegrar a los demás.",
        4: "Tu regalo divino es la disciplina y el enfoque en la construcción de bases duraderas.",
        5: "El regalo divino del número 5 es la versatilidad, dándote facilidad para adaptarte a los cambios.",
        6: "Tu regalo divino es un corazón compasivo y la habilidad para ayudar y nutrir a otros.",
        7: "El regalo divino del número 7 te proporciona sabiduría interior y una profunda conexión espiritual.",
        8: "Tu regalo divino es el poder de manifestar éxito material a través de esfuerzo y determinación.",
        9: "El regalo divino del número 9 es un sentido profundo de compasión por el mundo y un fuerte deseo de servir.",
        10: "Tu regalo divino es la habilidad de crear y cerrar ciclos de manera consciente y poderosa.",
        11: "Tu regalo divino es la conexión con la intuición superior y el liderazgo espiritual.",
        22: "El regalo del 22 es la capacidad de manifestar grandes sueños en la realidad y de construir estructuras duraderas.",
        33: "El regalo divino del 33 es la capacidad de inspirar y enseñar a través del amor y el ejemplo."
    };

    const vidasPasadasDescriptions = {
        1: "En vidas pasadas, desarrollaste un fuerte sentido de independencia y liderazgo.",
        2: "Tus vidas pasadas te enseñaron sobre la importancia de la cooperación y la sensibilidad hacia los demás.",
        3: "En vidas anteriores, experimentaste la autoexpresión creativa y el uso de la comunicación como herramienta.",
        4: "Aprendiste a trabajar duro y a construir bases sólidas en tus vidas anteriores.",
        5: "En vidas pasadas, experimentaste la libertad y el cambio constante, desarrollando adaptabilidad.",
        6: "Tus vidas anteriores te enseñaron sobre la responsabilidad hacia la familia y la comunidad.",
        7: "Desarrollaste una conexión profunda con lo espiritual y aprendiste a confiar en tu intuición.",
        8: "En vidas anteriores, dominaste el éxito material y el poder, equilibrando estos con valores éticos.",
        9: "Tus vidas pasadas están marcadas por el servicio y la compasión hacia los demás, buscando el bienestar de la humanidad.",
        10: "En vidas pasadas, aprendiste a adaptarte a los ciclos del universo, entendiendo que todo cambia.",
        11: "Tus vidas pasadas te conectaron con dimensiones espirituales superiores, buscando la iluminación.",
        22: "En vidas anteriores, trabajaste en misiones importantes que cambiaron el curso de la humanidad.",
        33: "En vidas pasadas, enseñaste y guiaste a otros, convirtiéndote en un maestro espiritual y faro de amor."
    };

    const misionDescriptions = {
        1: "Tu misión en esta vida es liderar, tomar iniciativas y abrir caminos nuevos.",
        2: "Tu misión es crear armonía y colaborar con los demás, siendo un mediador en conflictos.",
        3: "La autoexpresión y la creatividad son clave en tu misión. Debes inspirar a otros a través de tu optimismo.",
        4: "Tu misión es construir, organizar y mantener estabilidad en tu vida y la de los demás.",
        5: "El cambio y la aventura están en tu misión. Debes aprender a adaptarte y ayudar a otros a hacer lo mismo.",
        6: "Tu misión es proteger y cuidar de los demás, ofreciendo apoyo emocional y práctico.",
        7: "Tienes una misión de búsqueda espiritual, de sabiduría interna y de guía para los demás.",
        8: "Tu misión es alcanzar el éxito material, pero siempre con responsabilidad y ética.",
        9: "Tu misión es servir a la humanidad y utilizar tu compasión para mejorar el mundo.",
        10: "Tu misión es adaptarte a los ciclos de la vida y guiar a otros a través de los cambios.",
        11: "Tu misión es iluminar a los demás, usando tu intuición para guiarlos hacia una visión más elevada.",
        22: "Tu misión es construir grandes cosas que tengan un impacto duradero en la sociedad.",
        33: "Tu misión es enseñar a través del ejemplo y el amor incondicional, siendo un faro de inspiración espiritual."
    };

    const obstaculoDescriptions = [
        "Obstáculo de potencial no realizado. Puede enfrentar desafíos para descubrir y manifestar su verdadero potencial, sintiéndose a menudo perdido o sin dirección.",
        "Obstáculo de liderazgo y autoafirmación. Puede enfrentar desafíos para tomar la iniciativa y ser asertivo, a menudo dudando de su capacidad para liderar.",
        "Obstáculo de cooperación y sensibilidad. Puede tener dificultades para trabajar en equipo y ser demasiado sensible a las críticas, lo que afecta sus relaciones.",
        "Obstáculo de expresión y creatividad. Puede encontrar problemas para expresarse de manera efectiva y liberar su creatividad, sintiéndose a menudo incomprendido.",
        "Obstáculo de estabilidad y trabajo duro. Puede luchar con la necesidad de estructura y disciplina, encontrando difícil mantener la estabilidad en su vida.",
        "Obstáculo de libertad y adaptabilidad. Puede tener problemas para adaptarse a los cambios y puede sentirse atrapado por la rutina, anhelando la libertad.",
        "Obstáculo de responsabilidad y servicio. Puede enfrentar desafíos al asumir responsabilidades y ser de servicio a los demás, a menudo sintiéndose abrumado.",
        "Obstáculo de introspección y análisis. Puede tener dificultades para confiar en su intuición y puede ser excesivamente crítico consigo mismo, lo que lleva a la parálisis por análisis.",
        "Obstáculo de poder y materialismo. Puede luchar con el equilibrio entre el poder y la ética, y puede ser tentado por el materialismo, descuidando otros aspectos de la vida.",
        "Obstáculo de compasión y humanitarismo. Puede tener problemas para dejar ir el pasado y puede sentirse abrumado por la necesidad de ayudar a los demás, a veces a costa de sí mismo.",
        "Obstáculo de autoaceptación y confianza en uno mismo. Puede enfrentar desafíos para aceptarse a sí mismo tal como es y confiar en sus propias capacidades.",
        "Obstáculo de intuición y espiritualidad. Puede tener dificultades para confiar en su intuición y puede sentirse desconectado de su espiritualidad, buscando respuestas externas.",
        "Obstáculo de grandes logros y visión práctica. Puede luchar con la presión de alcanzar grandes metas y puede tener dificultades para convertir sus visiones en realidad práctica.",
        "Obstáculo de amor incondicional y enseñanza. Puede enfrentar desafíos para ofrecer amor incondicional y puede sentirse abrumado por la responsabilidad de enseñar y guiar a otros."
    ];

    const initialsSet = new Set();

    // Crear las tarjetas dinámicamente
    const cardsContainer = document.getElementById("cards-container");

    people.forEach(person => {
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

        cardContent.appendChild(createParagraph("Esencia", person.esencia, esenciaDescriptions));
        cardContent.appendChild(createParagraph("Karma", person.karma, karmaDescriptions));
        cardContent.appendChild(createParagraph("Regalo Divino", person.regaloDivino, regaloDivinoDescriptions));
        cardContent.appendChild(createParagraph("Vidas Pasadas", person.vidasPasadas, vidasPasadasDescriptions));
        cardContent.appendChild(createParagraph("Misión", person.mision, misionDescriptions));
        cardContent.appendChild(createParagraph("Obstáculo", person.obstaculo, obstaculoDescriptions));

        card.appendChild(cardHeader);
        card.appendChild(cardContent);

        cardsContainer.appendChild(card);

        // Agregar la inicial al set para los botones de iniciales
        initialsSet.add(person.name.charAt(0).toUpperCase());
    });

    // Crear los botones de iniciales dinámicamente
    const initialsContainer = document.getElementById("initials-container");

    initialsSet.forEach(initial => {
        const button = document.createElement("button");
        button.classList.add("initial-button");
        button.textContent = initial;
        button.addEventListener("click", () => filterCardsByInitial(initial, button));
        initialsContainer.appendChild(button);
    });

    // Función para filtrar tarjetas por nombre en la barra de búsqueda
    function filterCardsByName() {
        const searchTerm = document.getElementById("search-bar").value.toLowerCase();
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            const name = card.querySelector(".card-header").textContent.toLowerCase();
            if (name.includes(searchTerm)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });

        // Actualizar los botones de iniciales según los resultados filtrados
        updateInitials();
    }

    // Función para filtrar tarjetas por inicial
    function filterCardsByInitial(initial, button) {
        const cards = document.querySelectorAll(".card");
        let isFiltered = button.classList.contains("active");

        cards.forEach(card => {
            const name = card.querySelector(".card-header").textContent;
            if (name.startsWith(initial)) {
                card.style.display = isFiltered ? "block" : "none";
            }
        });

        button.classList.toggle("active");
    }

    // Función para expandir todas las tarjetas
    function expandAllCards() {
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => {
            card.classList.add("active");
            scrollToBottom(card);  // Desplazar hacia el fondo si se hace clic en la última tarjeta
        });
    }

    // Función para colapsar todas las tarjetas
    function collapseAllCards() {
        const cards = document.querySelectorAll(".card");
        cards.forEach(card => card.classList.remove("active"));
    }

    // Actualizar los botones de iniciales según el filtro
    function updateInitials() {
        const cards = document.querySelectorAll(".card");
        const visibleInitials = new Set();

        cards.forEach(card => {
            if (card.style.display === "block") {
                const initial = card.querySelector(".card-header").textContent.charAt(0).toUpperCase();
                visibleInitials.add(initial);
            }
        });

        const buttons = document.querySelectorAll(".initial-button");
        buttons.forEach(button => {
            if (visibleInitials.has(button.textContent)) {
                button.style.display = "inline-block";
            } else {
                button.style.display = "none";
            }
        });
    }

    // Función para desplazar hacia el fondo cuando se expande la última tarjeta
    function scrollToBottom(card) {
        if (card === cardsContainer.lastElementChild) {
            setTimeout(() => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: 'smooth'
                });
            }, 300);  // Asegurarse de esperar a la animación
        }
    }
});