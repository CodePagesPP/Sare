const translations = {
  en: {
    //PORTADA
    "portada.title1": "Transformation with innovation, backed by experience. We innovate in every strategic decision",
    "portada.title2": "We innovate in every strategic decision.",
    
    //SECCION SERVICIOS
    "services.title": "Services",
    "services.paragraph":"We offer solutions in Business Intelligence, Data Analytics and Machine Learning that convert data into decisions. We design dashboards, automated reports and integrations that allow us to anticipate scenarios and manage projects with clear information in real time.",

    //DASHBOARD SERVICIOS


    //SECCION CONSULTORIA
    "consultoria.title": "Consulting",
    "consultoria.paragraph":"We accompany companies in project planning and control (PMO) and in their digital transformation. We apply solid methodologies, financial evaluations and innovation plans that drive efficiency, reduce risks and align each decision with business objectives.",

    //SECCION INGENIERIA
    "ingenieria.title": "Engineering",
    "ingenieria.paragraph":"We integrate methodologies such as Lean Construction, VDC, BIM and Lean Six Sigma to optimize processes in mining and construction. We improve productivity, reduce costs and ensure efficient projects through simulation, performance analysis and resource management.",

    //SECCION QUIENES SOMOS
    "somos.title": "Who we are?",
    "somos.paragraph":"At SARE we accompany companies from different sectors in project management and in their transformation towards more efficient and innovative models. Through consulting, engineering and digital services we help to turn information into strategic decisions, optimize processes and generate sustainable value with confidence.",
    //reutilizables
    "btn.contact": "Contact us",
  },
  es: {
    //PORTADA
    "portada.title1": "Transformación con innovación, respaldada con experiencia.",
    "portada.title2": "Innovamos en cada decisión estratégica.",

    //SECCION SERVICIOS
    "services.title": "Servicios",
    "services.paragraph":"Ofrecemos soluciones en Bussiness Intelligence, Data Analytics y Machine Learning que convierten datos en decisiones. Diseñamos dashboards, reportes automatizados e integraciones que permiten anticipar escenarios y gestionar proyectos con información clara y en tiempo real.",

    //SECCION CONSULTORIA
    "consultoria.title": "Consultoría",
    "consultoria.paragraph":"Acompañamos a las empresas en el planeamiento y control de proyectos (PMO) y en su transformación digital. Aplicamos metodologías sólidas, evaluaciones financieras y planes de innovación que impulsan la eficiencia, reducen riesgos y alinean cada decisión con los objetivos del negocio.",
    
    //SECCION INGENIERIA
    "ingenieria.title": "Ingeniería",
    "ingenieria.paragraph":"Integramos metodologías como Lean Construction, VDC, BIM y Lean Six Sigma para optimizar procesos en minería y construcción. Mejoramos productividad, reducimos costos y aseguramos proyectos eficientes mediante simulación, análisis de desempeño y gestión de recursos.",

    //SECCION QUIENES SOMOS
    "somos.title": "¿Quiénes somos?",
    "somos.paragraph":"En SARE acompañamos a empresas de distintos sectores en la gestión de proyectos y en su transformación hacia modelos más eficientes e innovadores. A través de consultoría, ingeniería y servicios digitales ayudamos a convertir información en decisiones estratégicas, optimizar procesos y generar valor sostenible con confianza.",
    //reutilizables
    "btn.contact": "Contáctanos",
  }
};


const langBtn = document.getElementById("lang-toggle");
let currentLang = "es";

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "en" : "es";
  translatePage(currentLang);
  langBtn.innerHTML = currentLang === "es"
    ? '<img src="./assets/en.svg" alt="English" /> EN'
    : '<img src="./assets/es.svg" alt="Español" /> ES';
});

function translatePage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const translation = translations[lang][key];

    if (translation) {
      el.innerHTML = translation; 
    } else {
      el.textContent = key;
    }
  });
}