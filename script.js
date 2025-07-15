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
    { id: 'F0280419', nombre: 'Taller de Investigación y Práctica Profesional II: Sujeto que aprende', creditos: 4, semestre: 4, prerrequisitos: ['F0280310', 'F028