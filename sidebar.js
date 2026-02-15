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
// Exportar funciones para acceso global
window.toggleSidebar = toggleSidebar;
window.calculateNumerology = calculateNumerology;
window.copyToClipboard = copyToClipboard;

/* --- BULK ADD LOGIC --- */

let parsedBulkData = [];

function parseBulkInput(text) {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    const results = [];
    
    // Regex para fechas DD/MM/YYYY o DD-MM-YYYY o D/M/YYYY
    // Captura: Group 1=Day, Group 2=Month, Group 3=Year
    const dateRegex = /\b(\d{1,2})[./-](\d{1,2})[./-](\d{2,4})\b/;

    lines.forEach(line => {
        const match = line.match(dateRegex);
        let name, dateStr, originalDateStr, status;
        let day, month, year;

        if (match) {
            // Fecha encontrada
            originalDateStr = match[0];
            name = line.replace(originalDateStr, '').trim(); // El nombre es todo menos la fecha
            // Limpiar caracteres extra del nombre si quedaron
            name = name.replace(/[\t,;]+$/, '').trim(); 

            day = parseInt(match[1]);
            month = parseInt(match[2]);
            year = parseInt(match[3]);

            status = 'OK';
        } else {
            // Fecha NO encontrada -> Usar HOY
            const today = new Date();
            day = today.getDate();
            month = today.getMonth() + 1; // 0-indexed
            year = today.getFullYear();
            
            name = line.trim();
            originalDateStr = "(Hoy)";
            status = 'Auto-Date';
        }

        // Normalizar año (si ponen 99 -> 1999 o 2099? Asumimos 4 digito o completamos)
        // Para simplificar, si es < 100, asumimos 1900 + year si es > year actual ?? 
        // Mejor dejarlo como está o simple fix:
        if (year < 100) year += 1900; // Asunción simple, ajustar si se requiere lógica '2000'

        // Formato YYYY-MM-DD para el input date / calculos
        const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

        results.push({
            name: name,
            birthdate: formattedDate,
            originalDate: originalDateStr,
            status: status
        });
    });

    return results;
}

window.previewBulk = function() {
    const rawText = document.getElementById('bulkInput').value;
    const bulkGroup = document.getElementById('bulkGroup').value.trim();
    const previewContainer = document.getElementById('bulkPreview');
    const btnSubmit = document.getElementById('btnBulkSubmit');

    if (!bulkGroup) {
        alert("Por favor ingresa un nombre de Grupo para todos los registros.");
        return;
    }

    if (!rawText.trim()) {
        alert("Por favor pega la lista de nombres y fechas.");
        return;
    }

    parsedBulkData = parseBulkInput(rawText);
    
    if (parsedBulkData.length === 0) {
        previewContainer.innerHTML = '<p>No se encontraron datos válidos.</p>';
        btnSubmit.style.display = 'none';
        return;
    }

    let html = '<table class="preview-table">';
    html += '<thead><tr><th>Nombre</th><th>Fecha</th><th>Estado</th></tr></thead><tbody>';
    
    parsedBulkData.forEach(item => {
        const rowClass = item.status === 'OK' ? 'row-ok' : 'row-warning';
        html += `<tr class="${rowClass}">
            <td>${item.name}</td>
            <td>${item.originalDate}</td>
            <td>${item.status}</td>
        </tr>`;
    });
    
    html += '</tbody></table>';
    html += `<p>Total detectados: <strong>${parsedBulkData.length}</strong></p>`;

    previewContainer.innerHTML = html;
    btnSubmit.style.display = 'block';
};

window.submitBulk = async function() {
    const bulkGroup = document.getElementById('bulkGroup').value.trim();
    
    if (!bulkGroup || parsedBulkData.length === 0) {
        return;
    }

    // Calcular numerología para cada uno
    const payloadData = parsedBulkData.map(item => {
        const [year, month, day] = item.birthdate.split('-').map(Number);
        
        const essence = calculateEssence(day);
        const karma = calculateKarma(month);
        const divineGift = calculateDivineGift(year);
        const pastLives = calculatePastLives(year);
        const mission = calculateMission(day, month, year);
        const obstacle = calculateObstacle(essence, karma);

        return {
            name: item.name,
            birthdate: item.birthdate,
            group: bulkGroup,
            essence: essence,
            karma: karma,
            gift: divineGift,
            past_lives: pastLives,
            mission: mission,
            obstacle: obstacle
        };
    });

    // Enviar a SheetDB
    // SheetDB acepta array de objetos para bulk create
    try {
        const btnSubmit = document.getElementById('btnBulkSubmit');
        const originalText = btnSubmit.textContent;
        btnSubmit.textContent = "Enviando...";
        btnSubmit.disabled = true;

        const response = await fetch(SHEETDB_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: payloadData })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error SheetDB: ${response.status} - ${errorText}`);
        }

        // Éxito
        alert(`¡Se han cargado ${payloadData.length} registros exitosamente!`);
        
        // Limpiar formulario masivo
        document.getElementById('bulkInput').value = '';
        document.getElementById('bulkGroup').value = '';
        document.getElementById('bulkPreview').innerHTML = '';
        btnSubmit.style.display = 'none';
        btnSubmit.textContent = originalText;
        btnSubmit.disabled = false;

        toggleSidebar();
        window.dispatchEvent(new Event('peopleUpdated'));

    } catch (error) {
        console.error(error);
        alert("Hubo un error al guardar los datos masivos. Revisa la consola.");
        const btnSubmit = document.getElementById('btnBulkSubmit');
        btnSubmit.textContent = "Reintentar";
        btnSubmit.disabled = false;
    }
};
