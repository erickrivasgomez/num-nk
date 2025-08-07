// sheetdb-config.js
const SHEETDB_API_URL = "https://sheetdb.io/api/v1/iq7ptk9iytmbx"; 
// Reemplaza con tu endpoint real

// Toggle Sidebar Visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
}

// Utility function to reduce to a single digit, respecting master numbers
const reduceToSingleDigit = (number) => {
    const masterNumbers = [10, 11, 22, 33];
    while (number > 9 && !masterNumbers.includes(number)) {
        number = number
            .toString()
            .split("")
            .reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return number;
};

// Numerology calculation functions
const calculateEssence = (day) => reduceToSingleDigit(day);
const calculateKarma = (month) => reduceToSingleDigit(month);
const calculateDivineGift = (year) => reduceToSingleDigit(year % 100);
const calculatePastLives = (year) => reduceToSingleDigit(year.toString().split("").reduce((sum, digit) => sum + parseInt(digit), 0));
const calculateMission = (day, month, year) => reduceToSingleDigit(day + month + parseInt(year.toString().slice(0, 2)) + parseInt(year.toString().slice(2)));
const calculateObstacle = (essence, karma) => reduceToSingleDigit(essence + karma);

// Mensajes de error
const errorMessageId = "uploadErrorMessage";

function showError(message) {
    let errorDiv = document.getElementById(errorMessageId);
    if (!errorDiv) {
        errorDiv = document.createElement("div");
        errorDiv.id = errorMessageId;
        errorDiv.classList.add("errorMessageUpload"); // clase CSS para estilo
        const form = document.getElementById("numerologyForm");
        const submitBtn = form.querySelector("button[type='submit']");
        form.insertBefore(errorDiv, submitBtn);
    }
    errorDiv.textContent = message;
}


function clearError() {
    const errorDiv = document.getElementById(errorMessageId);
    if (errorDiv) {
        errorDiv.remove();
    }
}

async function calculateNumerology(event) {
    event.preventDefault();

    clearError();

    const name = document.getElementById("name").value.trim();
    const birthDate = document.getElementById("birthDate").value;
    const group = document.getElementById("group").value.trim();

    if (!name || !birthDate || !group) {
        alert("Por favor completa todos los campos.");
        return;
    }

    const [year, month, day] = birthDate.split("-").map(Number);

    const essence = calculateEssence(day);
    const karma = calculateKarma(month);
    const divineGift = calculateDivineGift(year);
    const pastLives = calculatePastLives(year);
    const mission = calculateMission(day, month, year);
    const obstacle = calculateObstacle(essence, karma);

    const numerologyResult = {
        name: name,
        birthdate: birthDate,
        group: group,
        essence: essence,
        karma: karma,
        gift: divineGift,
        past_lives: pastLives,
        mission: mission,
        obstacle: obstacle
    };

    // Mostrar resultado en JSON
    const outputContent = document.getElementById("outputContent");
    outputContent.textContent = JSON.stringify(numerologyResult, null, 4);

    // Enviar datos a SheetDB
    try {
        const response = await fetch(SHEETDB_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: numerologyResult })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error al guardar en SheetDB: ${response.status} - ${errorText}`);
        }

        // Si todo OK, cerrar sidebar
        toggleSidebar();

        // Disparar evento custom para recargar datos en frontend
        window.dispatchEvent(new Event('peopleUpdated'));

    } catch (error) {
        console.error(error);
        showError("Error al registrar la numerología");
    }
}

// Copiar resultado JSON al portapapeles
function copyToClipboard() {
    const outputContent = document.getElementById("outputContent").textContent;
    navigator.clipboard.writeText(outputContent).then(() => {
        
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}

// Exportar funciones para acceso global
window.toggleSidebar = toggleSidebar;
window.calculateNumerology = calculateNumerology;
window.copyToClipboard = copyToClipboard;
