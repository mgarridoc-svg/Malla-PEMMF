// Define tus ramos en un arreglo de objetos
const ramos = [
    // Primer año
    // Primer Semestre
    [cite_start]{ id: 'F0280101', nombre: 'Fundamentos de la educación y la pedagogía', creditos: 5, semestre: 1, prerrequisitos: [], estado: 'pendiente' }, [cite: 3]
    [cite_start]{ id: 'C0280102', nombre: 'Introducción a la Física', creditos: 8, semestre: 1, prerrequisitos: [], estado: 'pendiente' }, [cite: 4]
    [cite_start]{ id: 'C0280103', nombre: 'Introducción al Álgebra y a la Geometría', creditos: 9, semestre: 1, prerrequisitos: [], estado: 'pendiente' }, [cite: 5]
    [cite_start]{ id: 'C0280104', nombre: 'Introducción al Cálculo', creditos: 9, semestre: 1, prerrequisitos: [], estado: 'pendiente' }, [cite: 6]
    // Segundo Semestre
    [cite_start]{ id: 'C0280205', nombre: 'Introducción a la Mecánica', creditos: 8, semestre: 2, prerrequisitos: ['C0280102'], estado: 'pendiente' }, [cite: 8]
    [cite_start]{ id: 'C0280206', nombre: 'Álgebra y Geometría', creditos: 8, semestre: 2, prerrequisitos: ['C0280103'], estado: 'pendiente' }, [cite: 9]
    [cite_start]{ id: 'C0280207', nombre: 'Cálculo', creditos: 8, semestre: 2, prerrequisitos: ['C0280104'], estado: 'pendiente' }, [cite: 10]
    [cite_start]{ id: 'F0280209', nombre: 'Comunicación Oral y Escrita', creditos: 2, semestre: 2, prerrequisitos: [], estado: 'pendiente' }, [cite: 11]
    [cite_start]{ id: 'F0280208', nombre: 'Taller de Investigación y Práctica I: Identidad Docente', creditos: 3, semestre: 2, prerrequisitos: ['F0280101'], estado: 'pendiente' }, [cite: 12]

    // Segundo año
    // Tercer Semestre
    [cite_start]{ id: 'IC01', nombre: 'Inglés Científico I', creditos: 3, semestre: 3, prerrequisitos: [], estado: 'pendiente' }, [cite: 15]
    [cite_start]{ id: 'F0280310', nombre: 'Procesos Psicológicos del Aprendizaje', creditos: 5, semestre: 3, prerrequisitos: ['F0280101'], estado: 'pendiente' }, [cite: 16]
    [cite_start]{ id: 'C0280311', nombre: 'Mecánica', creditos: 8, semestre: 3, prerrequisitos: ['C0280205'], estado: 'pendiente' }, [cite: 21]
    [cite_start]{ id: 'C0280313', nombre: 'Cálculo en Varias Variables', creditos: 6, semestre: 3, prerrequisitos: ['C0280103', 'C0280207'], estado: 'pendiente' }, [cite: 22]
    [cite_start]{ id: 'C0280312', nombre: 'Álgebra Lineal', creditos: 7, semestre: 3, prerrequisitos: ['C0280103'], estado: 'pendiente' }, [cite: 23]
    // Cuarto Semestre (Continuación del segundo año en tu documento)
    [cite_start]{ id: 'IC02', nombre: 'Inglés Científico II', creditos: 3, semestre: 4, prerrequisitos: ['IC01'], estado: 'pendiente' }, [cite: 17]
    [cite_start]{ id: 'F0280521', nombre: 'Sujeto Joven y Culturas Juveniles', creditos: 3, semestre: 4, prerrequisitos: ['F0280310'], estado: 'pendiente' }, [cite: 18]
    [cite_start]{ id: 'F0280419', nombre: 'Taller de Investigación y Práctica Profesional II: Sujeto que aprende', creditos: 4, semestre: 4, prerrequisitos: ['F0280310', 'F0280208'], estado: 'pendiente' }, [cite: 19]
    [cite_start]{ id: 'F0280415', nombre: 'Diversidad e Inclusión en el Aprendizaje de la Especialidad', creditos: 5, semestre: 4, prerrequisitos: ['F0280310', 'F0280208'], estado: 'pendiente' }, [cite: 20]
    [cite_start]{ id: 'IC03', nombre: 'Inglés Científico III', creditos: 3, semestre: 4, prerrequisitos: ['IC02'], estado: 'pendiente' }, [cite: 24]
    [cite_start]{ id: 'F0280626', nombre: 'Comprensión Histórica y Sociológica de la Escuela y la Educación', creditos: 5, semestre: 4, prerrequisitos: ['F0280521'], estado: 'pendiente' }, [cite: 25]
    [cite_start]{ id: 'F0280631', nombre: 'Taller de Investigación y Práctica III: Comunidades Educativas', creditos: 4, semestre: 4, prerrequisitos: ['F0280419'], estado: 'pendiente' }, [cite: 26]
    [cite_start]{ id: 'F0280522', nombre: 'Desarrollo del Curriculum', creditos: 5, semestre: 4, prerrequisitos: ['F0280415'], estado: 'pendiente' }, [cite: 27]
    [cite_start]{ id: 'C0280417', nombre: 'Métodos Experimentales I: Mecánica', creditos: 5, semestre: 4, prerrequisitos: ['F0280209', 'C0280311'], estado: 'pendiente' }, [cite: 28]
    [cite_start]{ id: 'C0280416', nombre: 'Electromagnetismo', creditos: 8, semestre: 4, prerrequisitos: ['C0280311', 'C0280207', 'C0280103'], estado: 'pendiente' }, [cite: 29]
    [cite_start]{ id: 'C0280628', nombre: 'Termodinámica', creditos: 7, semestre: 4, prerrequisitos: ['C0280311', 'C0280313'], estado: 'pendiente' }, [cite: 30]
    [cite_start]{ id: 'C0280418', nombre: 'Estructuras Algebraicas', creditos: 6, semestre: 4, prerrequisitos: ['C0280312', 'C0280207'], estado: 'pendiente' }, [cite: 31]
    [cite_start]{ id: 'C0280629', nombre: 'Probabilidad y Estadística I', creditos: 6, semestre: 4, prerrequisitos: ['C0280312', 'C0280207'], estado: 'pendiente' }, [cite: 32]
    // Quinto Semestre (Continuación del segundo año en tu documento)
    [cite_start]{ id: 'F0280733', nombre: 'Liderazgo Pedagógico y Estrategias Colaborativas', creditos: 3, semestre: 5, prerrequisitos: ['F0280626'], estado: 'pendiente' }, [cite: 33]
    [cite_start]{ id: 'F0280732', nombre: 'Evaluación para el Aprendizaje', creditos: 5, semestre: 5, prerrequisitos: ['F0280522'], estado: 'pendiente' }, [cite: 34]
    [cite_start]{ id: 'C0280523', nombre: 'Métodos Experimentales II: Electromagnetismo', creditos: 5, semestre: 5, prerrequisitos: ['C0280416', 'C0280417'], estado: 'pendiente' }, [cite: 35]
    [cite_start]{ id: 'C0280524', nombre: 'Óptica y Ondas', creditos: 7, semestre: 5, prerrequisitos: ['C0280416', 'C0280313'], estado: 'pendiente' }, [cite: 36]
    [cite_start]{ id: 'C0280525', nombre: 'Geometría', creditos: 8, semestre: 5, prerrequisitos: ['C0280418'], estado: 'pendiente' }, [cite: 37]
    [cite_start]{ id: 'C0280736', nombre: 'Probabilidad y Estadística II', creditos: 7, semestre: 5, prerrequisitos: ['C0280313', 'C0280629'], estado: 'pendiente' }, [cite: 38]
    // Sexto Semestre (Continuación del segundo año en tu documento)
    [cite_start]{ id: 'F0280630', nombre: 'Didáctica y Pedagogía de las Ciencias Exactas', creditos: 3, semestre: 6, prerrequisitos: ['F0280419', 'F0280522', 'C0280523', 'C0280525'], estado: 'pendiente' }, [cite: 39]
    [cite_start]{ id: 'C0280627', nombre: 'Métodos Experimentales III: Óptica y Ondas', creditos: 5, semestre: 6, prerrequisitos: ['C0280523', 'C0280524'], estado: 'pendiente' }, [cite: 40]
    [cite_start]{ id: 'C0280735', nombre: 'Física Moderna', creditos: 7, semestre: 6, prerrequisitos: ['C0280524', 'C0280628'], estado: 'pendiente' }, [cite: 41]
    [cite_start]{ id: 'C0280840', nombre: 'Teoría de Números', creditos: 6, semestre: 6, prerrequisitos: ['C0280525', 'C0280629'], estado: 'pendiente' }, [cite: 42]
    [cite_start]{ id: 'F0280842', nombre: 'Taller de Investigación y Práctica IV: las relaciones pedagógicas', creditos: 4, semestre: 6, prerrequisitos: ['F0280626', 'F0280631', 'F0280630'], estado: 'pendiente' }, [cite: 43]
    [cite_start]{ id: 'F0280841', nombre: 'Didáctica de la Física y Práctica Pedagógica', creditos: 4, semestre: 6, prerrequisitos: ['F0280631', 'F0280630'], estado: 'pendiente' }, [cite: 44]
    [cite_start]{ id: 'F0280737', nombre: 'Didáctica de la Matemática y Práctica Pedagógica', creditos: 4, semestre: 6, prerrequisitos: ['F0280631', 'F0280630'], estado: 'pendiente' }, [cite: 45]
    [cite_start]{ id: 'C0280734', nombre: 'Métodos Experimentales IV: Termodinámica', creditos: 5, semestre: 6, prerrequisitos: ['C0280627', 'C0280628'], estado: 'pendiente' }, [cite: 46]
    [cite_start]{ id: 'C0280839', nombre: 'Geofísica y Astrofísica', creditos: 7, semestre: 6, prerrequisitos: ['C0280735'], estado: 'pendiente' }, [cite: 47]
    [cite_start]{ id: 'C0280838', nombre: 'Seminario de Grado Ciencias Exactas', creditos: 5, semestre: 6, prerrequisitos: ['C0280734', 'C0280735', 'C0280525', 'C0280736'], estado: 'pendiente' }, [cite: 48]
];

// *******************************************************************
// El código de aquí para abajo no necesitas modificarlo a menos que
// quieras añadir nuevas funcionalidades avanzadas.
// *******************************************************************

// Función para renderizar (dibujar) los ramos en la página
function renderRamos() {
    const mallaContainer = document.querySelector('.malla-container');
    mallaContainer.innerHTML = ''; // Limpia el contenedor antes de dibujar

    // Ordenar ramos por semestre para que aparezcan en orden
    ramos.sort((a, b) => {
        if (a.semestre === b.semestre) {
            // Si están en el mismo semestre, ordenar por ID (código) para consistencia
            return a.id.localeCompare(b.id);
        }
        return a.semestre - b.semestre;
    });

    ramos.forEach(ramo => {
        const ramoDiv = document.createElement('div');
        ramoDiv.classList.add('ramo'); // Añade la clase base 'ramo'
        ramoDiv.dataset.id = ramo.id; // Guarda el ID del ramo en el elemento HTML

        // Lógica de prerrequisitos
        let prerrequisitosCumplidos = true;
        if (ramo.prerrequisitos.length > 0) {
            prerrequisitosCumplidos = ramo.prerrequisitos.every(prereqId => {
                const prereqRamo = ramos.find(r => r.id === prereqId);
                return prereqRamo && prereqRamo.estado === 'aprobado';
            });
        }

        // Asignar clases de estado y manejar 'bloqueado'
        ramoDiv.classList.remove('estado-pendiente', 'estado-cursando', 'estado-aprobado', 'estado-bloqueado'); // Limpiar clases previas
        if (ramo.estado === 'aprobado') {
            ramoDiv.classList.add('estado-aprobado');
            ramoDiv.style.pointerEvents = 'auto'; // Siempre se puede hacer clic en los aprobados para cambiar estado
        } else if (ramo.estado === 'cursando') {
            ramoDiv.classList.add('estado-cursando');
            ramoDiv.style.pointerEvents = 'auto';
        } else if (!prerrequisitosCumplidos) {
            ramoDiv.classList.add('estado-bloqueado');
            ramoDiv.style.pointerEvents = 'none'; // Deshabilita clics si está bloqueado
            ramo.estado = 'pendiente'; // Asegura que el estado interno sea pendiente si está bloqueado
        } else {
            ramoDiv.classList.add('estado-pendiente');
            ramoDiv.style.pointerEvents = 'auto';
        }


        ramoDiv.innerHTML = `
            <h3>${ramo.nombre}</h3>
            <p>(${ramo.id}) - ${ramo.creditos} Créditos</p>
            <p>Semestre: ${ramo.semestre}</p>
        `;
        mallaContainer.appendChild(ramoDiv);

        // Añadir la interactividad (cambiar estado al hacer clic)
        // Solo añade el listener si el ramo no está bloqueado por prerrequisitos
        if (ramoDiv.style.pointerEvents === 'auto') {
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

// Llama a la función al cargar la página por primera vez
document.addEventListener('DOMContentLoaded', renderRamos);