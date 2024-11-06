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

// Form submission handler
function calculateNumerology(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const birthDate = document.getElementById("birthDate").value;
    const group = document.getElementById("group").value;

    const [year, month, day] = birthDate.split("-").map(Number);
    
    const essence = calculateEssence(day);
    const karma = calculateKarma(month);
    const divineGift = calculateDivineGift(year);
    const pastLives = calculatePastLives(year);
    const mission = calculateMission(day, month, year);
    const obstacle = calculateObstacle(essence, karma);

    const numerologyResult = {
        name: name,
        birthDate: birthDate,
        esencia: essence,
        karma: karma,
        regaloDivino: divineGift,
        vidasPasadas: pastLives,
        mision: mission,
        obstaculo: obstacle,
        grupo: group
    };

    // Display result in JSON format
    const outputContent = document.getElementById("outputContent");
    outputContent.textContent = JSON.stringify(numerologyResult, null, 4);
}

// Copy JSON result to clipboard
function copyToClipboard() {
    const outputContent = document.getElementById("outputContent").textContent;
    navigator.clipboard.writeText(outputContent).then(() => {
        console.log("Resultado copiado al portapapeles");
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
}
