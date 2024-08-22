// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Simulamos los datos de un estudiante
    const student = {
        id: "1.124.003.443",
        nombre: "Jaime Chpiaje Chipiaje",
        edad: "15 años",
        grado: "7° septimo",
        email: "jaime.chipaije@iemurewomwayuri.gov.co"
    };

    // Insertamos los datos en el DNI
    document.getElementById('student-id').textContent = student.id;
    document.getElementById('student-name').textContent = student.nombre;
    document.getElementById('student-age').textContent = student.edad;
    document.getElementById('student-grade').textContent = student.grado;
    document.getElementById('student-email').textContent = student.email;
});