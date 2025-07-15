// Paso 1: Define tus ramos en un arreglo de objetos
const ramos = [
    { id: 'mate1', nombre: 'Cálculo I', creditos: 6, semestre: 1, prerrequisitos: [], estado: 'pendiente' },
    { id: 'fis1', nombre: 'Física I', creditos: 6, semestre: 1, prerrequisitos: [], estado: 'pendiente' },
    { id: 'prog1', nombre: 'Introducción a la Programación', creditos: 7, semestre: 1, prerrequisitos: [], estado: 'pendiente' },
    { id: 'quim', nombre: 'Química General', creditos: 6, semestre: 1, prerrequisitos: [], estado: 'pendiente' },
    { id: 'mate2', nombre: 'Cálculo II', creditos: 6, semestre: 2, prerrequisitos: ['mate1'], estado: 'pendiente' },
    { id: 'fis2', nombre: 'Física II', creditos: 6, semestre: 2, prerrequisitos: ['fis1', 'mate1'], estado: 'pendiente' },
    { id: 'estructuras', nombre: 'Estructura de Datos', creditos: 7, semestre: 2, prerrequisitos: ['prog1'], estado: 'pendiente' },
    // ¡Añade el resto de tus ramos aquí!
    // Ejemplo: { id: 'ramoX', nombre: 'Nombre del Ramo', creditos: X, semestre: Y, prerrequisitos: ['id_prerrequisito1', 'id_prerrequisito2'], estado: 'pendiente' }
];

// Paso 2: Función para renderizar (dibujar) los ramos en la página
function renderRamos() {
    const mallaContainer = document.querySelector('.malla-container');
    mallaContainer.innerHTML = ''; // Limpia el contenedor antes de dibujar

    // Ordenar ramos por semestre
    ramos.sort((a, b) => a.semestre - b.semestre);

    ramos.forEach(ramo => {
        const ramoDiv = document.createElement('div');
        ramoDiv.classList.add('ramo', `estado-${ramo.estado}`);
        ramoDiv.dataset.id = ramo.id; // Guarda el ID del ramo en el elemento HTML

        let prerrequisitosCumplidos = true;
        if (ramo.prerrequisitos.length > 0) {
            prerrequisitosCumplidos = ramo.prerrequisitos.every(prereqId =>
                ramos.find(r => r.id === prereqId && r.estado === 'aprobado')
            );
        }

        // Si el ramo no está aprobado y tiene prerrequisitos no cumplidos, lo marcamos como bloqueado
        if (ramo.estado !== 'aprobado' && !prerrequisitosCumplidos) {
            ramoDiv.classList.add('estado-bloqueado');
            ramoDiv.style.pointerEvents = 'none'; // Deshabilita clics
        } else {
            ramoDiv.style.pointerEvents = 'auto'; // Habilita clics
        }


        ramoDiv.innerHTML = `
            <h3>${ramo.nombre}</h3>
            <p>Créditos: ${ramo.creditos}</p>
            <p>Semestre: ${ramo.semestre}</p>
        `;
        mallaContainer.appendChild(ramoDiv);

        // Paso 3: Añadir la interactividad (cambiar estado al hacer clic)
        if (!ramoDiv.classList.contains('estado-bloqueado')) {
            ramoDiv.addEventListener('click', () => {
                // Alternar entre 'pendiente', 'cursando', 'aprobado'
                if (ramo.estado === 'pendiente') {
                    ramo.estado = 'cursando';
                } else if (ramo.estado === 'cursando') {
                    ramo.estado = 'aprobado';
                } else if (ramo.estado === 'aprobado') {
                    ramo.estado = 'pendiente'; // o podrías querer que no se pueda desaprobar
                }
                renderRamos(); // Volver a dibujar para que los cambios se vean
            });
        }
    });
}

// Paso 4: Llama a la función al cargar la página por primera vez
document.addEventListener('DOMContentLoaded', renderRamos);