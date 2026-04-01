// Fonction pour démarrer un exercice
function startExercise(lessonId) {
    alert(`Démarrer l'exercice pour ${lessonId}`);
}

// Fonction pour vérifier un exercice
function checkExercise(exerciseId) {
    const code = document.getElementById('code-editor').value;
    const resultDiv = document.getElementById('result');

    // Exemple simple de vérification
    if (code.includes('<!DOCTYPE html>') && code.includes('<html>') && code.includes('<head>') && code.includes('<body>')) {
        resultDiv.innerHTML = '<p style="color: green;">Bravo ! Votre code est correct.</p>';
    } else {
        resultDiv.innerHTML = '<p style="color: red;">Votre code n\'est pas correct. Veuillez réessayer.</p>';
    }
}
