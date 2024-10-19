function startLearning() {
  document.getElementById('lesson-content').style.display = 'block';
  document.getElementById('lesson').innerHTML = 'Cargando tu primera lección...';
  
  // Aquí es donde conectaremos la lógica con la API de IA para generar la lección.
  setTimeout(() => {
    document.getElementById('lesson').innerHTML = 'Esta es tu primera lección, aprende el concepto clave aquí.';
  }, 1000);
}

function nextLesson() {
  // Lógica para cargar la siguiente lección
  document.getElementById('lesson').innerHTML = 'Cargando la siguiente lección...';
  
  setTimeout(() => {
    document.getElementById('lesson').innerHTML = 'Esta es tu segunda lección. Continúa aprendiendo.';
  }, 1000);
}
