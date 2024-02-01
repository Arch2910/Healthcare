document.getElementById("symptomsForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get user input
    const selectedSymptom = document.getElementById("symptoms");
    const symptoms = selectedSymptom.options[selectedSymptom.selectedIndex].value;

    // Assuming simple logic for disease identification
    let disease;
    if (symptoms === "cough") {
        disease = "Common Cold";
    } else if (symptoms === "cold") {
        disease = "Flu";
    } else if (symptoms === "congestion") {
        disease = "Sinusitis";
    } else if (symptoms === "constipation") {
        disease = "Constipation";
    } else if (symptoms === "headache") {
        disease = "Tension Headache";
    } else if (symptoms === "dizziness") {
        disease = "Vertigo";
    } else {
        disease = "Unknown";
    }

    // Display the result
    alert(Based on the selected symptom (${symptoms}), you may have ${disease}. Consult a doctor for confirmation.);
});