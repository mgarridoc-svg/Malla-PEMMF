// Define tus ramos en un arreglo de objetos
const ramos = [
    // Primer Año
    // Primer Semestre
    { id: 'F0280101', nombre: 'Fundamentos de la educación y la pedagogía', creditos: 5, semestre: 1, prerrequisitos: [], estado: 'pendiente' },
    { id: 'C0280102', nombre: 'Introducción a la Física', creditos: 8, semestre: 1, prerrequisitos: [], estado: 'pendiente' },
    { id: 'C0280103', nombre: 'Introducción al Álgebra y a la Geometría', creditos: 9, semestre: 1, prerrequisitos: [], estado: 'pendiente' },
    { id: 'C0280104', nombre: 'Introducción al Cálculo', creditos: 9, semestre: 1, prerrequisitos: [], estado: 'pendiente' },
    // Segundo Semestre
    { id: 'C0280205', nombre: 'Introducción a la Mecánica', creditos: 8, semestre: 2, prerrequisitos: ['C0280102'], estado: 'pendiente' },
    { id: 'C0280206', nombre: 'Álgebra y Geometría', creditos: 8, semestre: 2, prerrequisitos: ['C0280103'], estado: 'pendiente' },
    { id: 'C0280207', nombre: 'Cálculo', creditos: 8, semestre: 2, prerrequisitos: ['C0280104'], estado: 'pendiente' },
    { id: 'F0280209', nombre: 'Comunicación Oral y Escrita', creditos: 2, semestre: 2, prerrequisitos: [], estado: 'pendiente' },
    { id: 'F0280208', nombre: 'Taller de Investigación y Práctica I: Identidad Docente', creditos: 3, semestre: 2, prerrequisitos: ['F0280101'], estado: 'pendiente' },

    // Segundo Año
    // Tercer Semestre
    { id: 'IC01', nombre: 'Inglés Científico I', creditos: 3, semestre: 3, prerrequisitos: [], estado: 'pendiente' },
    { id: 'F0280310', nombre: 'Procesos Psicológicos del Aprendizaje', creditos: 5, semestre: 3, prerrequisitos: ['F0280101'], estado: 'pendiente' },
    { id: 'C0280311', nombre: 'Mecánica', creditos: 8, semestre: 3, prerrequisitos: ['C0280205'], estado: 'pendiente' },
    { id: 'C0280312', nombre: 'Álgebra Lineal', creditos: 7, semestre: 3, prerrequisitos: ['C0280103'], estado: 'pendiente' },
    { id: 'C0280313', nombre: 'Cálculo en Varias Variables', creditos: 6, semestre: 3, prerrequisitos: ['C0280103', 'C0280207'], estado: 'pendiente' },
    // Cuarto Semestre
    { id: 'F0280415', nombre: 'Diversidad e Inclusión en el Aprendizaje de la Especialidad', creditos: 5, semestre: 4, prerrequisitos: ['F0280310', 'F0280208'], estado: 'pendiente' },
    { id: 'C0280416', nombre: 'Electromagnetismo', creditos: 8, semestre: 4, prerrequisitos: ['C0280311', 'C0280207', 'C0280103'], estado: 'pendiente' },
    { id: 'C0280417', nombre: 'Métodos Experimentales I: Mecánica', creditos: 5, semestre: 4, prerrequisitos: ['F0280209', 'C0280311'], estado: 'pendiente' },
    { id: 'C0280418', nombre: 'Estructuras Algebraicas', creditos: 6, semestre: 4, prerrequisitos: ['C0280312', 'C0280207'], estado: 'pendiente' },
    { id: 'F0280419', nombre: 'Taller de Investigación y Práctica Profesional II: Sujeto que aprende', creditos: 4, semestre: 4, prerrequisitos: ['F0280310', 'F0280208'], estado: 'pendiente' },
    { id: 'IC02', nombre: 'Inglés Científico II', creditos: 3, semestre: 4, prerrequisitos: ['IC01'], estado: 'pendiente' },

    // Tercer Año
    // Quinto Semestre
    { id: 'F0280521', nombre: 'Sujeto Joven y Culturas Juveniles', creditos: 3, semestre: 5, prerrequisitos: ['F0280310'], estado: 'pendiente' },
    { id: 'F0280522', nombre: 'Desarrollo del Curriculum', creditos: 5, semestre: 5, prerrequisitos: ['F0280415'], estado: 'pendiente' },
    { id: 'C0280523', nombre: 'Métodos Experimentales II: Electromagnetismo', creditos: 5, semestre: 5, prerrequisitos: ['C0280416', 'C0280417'], estado: 'pendiente' },
    { id: 'C0280524', nombre: 'Óptica y Ondas', creditos: 7, semestre: 5, prerrequisitos: ['C0280416', 'C0280313'], estado: 'pendiente' },
    { id: 'C0280525', nombre: 'Geometría', creditos: 8, semestre: 5, prerrequisitos: ['C0280418'], estado: 'pendiente' },
    { id: 'CFG_01', nombre: 'CFG', creditos: 2, semestre: 5, prerrequisitos: [], estado: 'pendiente' },
    // Sexto Semestre
    { id: 'F0280626', nombre: 'Comprensión Histórica y Sociológica de la Escuela y la Educación', creditos: 5, semestre: 6, prerrequisitos: ['F0280521'], estado: 'pendiente' },
    { id: 'C0280627', nombre: 'Métodos Experimentales III: Óptica y Ondas', creditos: 5, semestre: 6, prerrequisitos: ['C0280523', 'C0280524'], estado: 'pendiente' },
    { id: 'C0280628', nombre: 'Termodinámica', creditos: 7, semestre: 6, prerrequisitos: ['C0280311', 'C0280313'], estado: 'pendiente' },
    { id: 'C0280629', nombre: 'Probabilidad y Estadística I', creditos: 6, semestre: 6, prerrequisitos: ['C0280312', 'C0280207'], estado: 'pendiente' },
    { id: 'F0280630', nombre: 'Didáctica y Pedagogía de las Ciencias Exactas', creditos: 3, semestre: 6, prerrequisitos: ['F0280419', 'F0280522', 'C0280523', 'C0280525'], estado: 'pendiente' },
    { id: 'F0280631', nombre: 'Taller de Investigación y Práctica III: Comunidades Educativas', creditos: 4, semestre: 6, prerrequisitos: ['F0280419'], estado: 'pendiente' },

    // Cuarto Año
    // Séptimo Semestre
    { id: 'F0280732', nombre: 'Evaluación para el Aprendizaje', creditos: 5, semestre: 7, prerrequisitos: ['F0280522'], estado: 'pendiente' },
    { id: 'F0280733', nombre: 'Liderazgo Pedagógico y Estrategias Colaborativas', creditos: 3, semestre: 7, prerrequisitos: ['F0280626'], estado: 'pendiente' },
    { id: 'C0280734', nombre: 'Métodos Experimentales IV: Termodinámica', creditos: 5, semestre: 7, prerrequisitos: ['C0280627', 'C0280628'], estado: 'pendiente' },
    { id: 'C0280735', nombre: 'Física Moderna', creditos: 7, semestre: 7, prerrequisitos: ['C0280524', 'C0280628'], estado: 'pendiente' },
    { id: 'C0280736', nombre: 'Probabilidad y Estadística II', creditos: 7, semestre: 7, prerrequisitos: ['C0280313', 'C0280629'], estado: 'pendiente' },
    { id: 'F0280737', nombre: 'Didáctica de la Matemática y Práctica Pedagógica', creditos: 4, semestre: 7, prerrequisitos: ['F0280631', 'F0280630'], estado: 'pendiente' },
    // Octavo Semestre
    { id: 'C0280838', nombre: 'Seminario de Grado Ciencias Exactas', creditos: 5, semestre: 8, prerrequisitos: ['C0280734', 'C0280735', 'C0280525', 'C0280736'], estado: 'pendiente' },
    { id: 'C0280839', nombre: 'Geofísica y Astrofísica', creditos: 7, semestre: 8, prerrequisitos: ['C0280735'], estado: 'pendiente' },
    { id: 'C0280840', nombre: 'Teoría de Números', creditos: 6, semestre: 8, prerrequisitos: ['C0280525', 'C0280629'], estado: 'pendiente' },
    { id: 'F0280841', nombre: 'Didáctica de la Física y Práctica Pedagógica', creditos: 4, semestre: 8, prerrequisitos: ['F0280631', 'F0280630'], estado: 'pendiente' },
    { id: 'F0280842', nombre: 'Taller de Investigación y Práctica IV: las relaciones pedagógicas', creditos: 4, semestre: 8, prerrequisitos: ['F0280626', 'F0280631', 'F0280630'], estado: 'pendiente' },
    { id: 'IC03', nombre: 'Inglés Científico III', creditos: 3, semestre: 8, prerrequisitos: ['IC02'], estado: 'pendiente' },

    // Quinto Año
    // Noveno Semestre
    { id: 'F0280944', nombre: 'Investigación en Educación', creditos: 3, semestre: 9, prerrequisitos: ['F0280842'], estado: 'pendiente' },
    { id: 'F0280945', nombre: 'Tecnología para la enseñanza de la matemática y de la física', creditos: 4, semestre: 9, prerrequisitos: ['F0280737', 'F0280841'], estado: 'pendiente' },
    { id: 'F0280946', nombre: 'Didáctica de la Física y Práctica profesional I', creditos: 6, semestre: 9, prerrequisitos: ['F0280841'], estado: 'pendiente' },
    { id: 'F0280947', nombre: 'Didáctica de la Matemática y Práctica Profesional I', creditos: 6, semestre: 9, prerrequisitos: ['F0280737'], estado: 'pendiente' },
    { id: 'F0280948', nombre: 'Taller de Investigación y Práctica Profesional I. Jefatura de Curso', creditos: 8, semestre: 9, prerrequisitos: ['F0280842', 'F0280737', 'F0280841'], estado: 'pendiente' },
    { id: 'IC04', nombre: 'Inglés IV', creditos: 3, semestre: 9, prerrequisitos: ['IC03'], estado: 'pendiente' },
    // Décimo Semestre
    { id: 'F0281050', nombre: 'Seminario de Grado en Educación', creditos: 5, semestre: 10, prerrequisitos: [], estado: 'pendiente' },
    { id: 'F0281051', nombre: 'Didáctica de la Física y Práctica Profesional II', creditos: 7, semestre: 10, prerrequisitos: [], estado: 'pendiente' },
    { id: 'F0281052', nombre: 'Didáctica de la Matemática y Práctica Profesional II', creditos: 7, semestre: 10, prerrequisitos: [], estado: 'pendiente' },
    { id: 'F0281053', nombre: 'Taller de Investigación y Práctica Profesional II. Jefatura de Curso y Proyecto Institucional', creditos: 8, semestre: 10, prerrequisitos: [], estado: 'pendiente' },
    { id: 'ELECTIVO_01', nombre: 'Electivo', creditos: 3, semestre: 10, prerrequisitos: [], estado: 'pendiente' },
];


// *******************************************************************
// El código de aquí para abajo es el MODIFICADO para el nuevo formato.
// No necesitas modificarlo a menos que quieras añadir nuevas funcionalidades.
// *******************************************************************

// Función para renderizar (dibujar) los ramos en la página
function renderRamos() {
    // Limpia todos los contenedores de semestre antes de redibujar
    document.querySelectorAll('.semestre-container').forEach(container => {
        container.innerHTML = container.querySelector('h3').outerHTML; // Deja solo el título del semestre
    });

    // Ordenar ramos por semestre y luego por ID para consistencia visual
    ramos.sort((a, b) => {
        if (a.semestre === b.semestre) {
            return a.id.localeCompare(b.id);
        }
        return a.semestre - b.semestre;
    });

    ramos.forEach(ramo => {
        const semestreContainer = document.getElementById(`semestre-${ramo.semestre}`);
        if (!semestreContainer) {
            console.warn(`No se encontró el contenedor para el semestre ${ramo.semestre}.`);
            return; // Salta este ramo si no encuentra el contenedor
        }

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
            // Opcional: Asegura que el estado interno sea 'pendiente' si está bloqueado y no aprobado/cursando
            if (ramo.estado !== 'aprobado' && ramo.estado !== 'cursando') {
                ramo.estado = 'pendiente';
            }
        } else {
            ramoDiv.classList.add('estado-pendiente');
            ramoDiv.style.pointerEvents = 'auto';
        }

        ramoDiv.innerHTML = `
            <h3>${ramo.nombre}</h3>
            <p>(${ramo.id}) - ${ramo.creditos} Créditos</p>
            <p>Semestre: ${ramo.semestre}</p>
        `;
        semestreContainer.appendChild(ramoDiv); // **CAMBIO CLAVE: Añadir al contenedor del semestre**

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