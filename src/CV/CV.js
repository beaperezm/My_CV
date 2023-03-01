import Html from '../images/html.svg';
import Css from '../images/css.svg';
import Javascript from '../images/javascript.svg';
import React from '../images/react.svg';
import Angular from '../images/angular.svg';
import MongoDb from '../images/mongodb.svg';
import Node from '../images/nodejs-2.svg';
import MySql from '../images/mysql.svg';
import Php from '../images/php.svg';
import Symfony from '../images/symfony.svg';
import Postman from '../images/postman.svg';
import AfterEffects from '../images/after-effects.svg';
import Illustrator from '../images/illustrator.svg';
import Lightroom from '../images/lightroom.svg';
import Photoshop from '../images/photoshop.svg';
import NodeReact from '../images/proyecto_node_react.png'
import NodeAngular from '../images/proyecto_node_angular.png'
import NodeApi from '../images/Node_API.png'
import JavascriptApi from '../images/API_javascript.png'





export const CV = {
    myInfo: {
        name: "Beatriz Pérez-Medel",
        perfil: "Full Stack Developer",
        address: "C/José Antonio...",
        city: "Madrid, España",
        email: "bpml2001@hotmail.com",
        birthDate: "03/09/1983",
        phone: "+34 652 666 666",
        aboutMe: [
           
            {
                info0: "Hola, soy Beatriz Pérez,",
                info1: "He cursado recientemente un Bootcamp, con el cual he descubierto una pasión y mi próximo destino laboral.",
                info2: "Durante los últimos 14 años me he dedicado al mundo audiovisual, donde he aprendido a organizar y optimizar el trabajo, identificar prioridades, trabajar en equipo y bajo presión.",
                info3: "Me gustan las tecnologías, los retos y aprender cosas nuevas.",
                
            }
        ],
    },

    softSkills: [
        {
            info: "Responsabilidad",
        },
        {
            info: "Resolutiva",
        },
        {
            info: "Creativa",
        },
        {
            info: "Trabajo en equipo e individual",
        },
        {
            info: "Dedicación",
        },
        {
            info: "Actitud Positiva",
        },
        {
            info: "Capacidad para desarrollar, objetivos claros e identificar actividades prioritarias",
        },
    ],
    
    education: [
        {
            name: "Bootcamp Full Stack Developer",
            date: "2022-2023",
            where: "Upgrade-Hub"
        },
        {
            name: "Producción Fotográfica",
            date: "2022",
            where: "Ondas Formación"
        },
        {
            name: "Licenciatura en Comunicación Audiovisual",
            date: "2002-2007",
            where: "Universidad Complutense de Madrid"
        }
        
    ],

    experience: [
        {
            name: "Diseñadora Gráfica",
            date: "2012-2022",
            where: "Beon Media",
            description: [
                
                {
                    info: "Organización y creación de las diferentes animaciones con After Effects, Photosohop e Illustrator .",
                },
                {
                    info: "Comunicación con los diferentes departamentos.",
                },
                {
                    info: "Realización de diferentes plantillas para la automatización de los gráficos para lograr la mejor optimización del departamento.",
                },
            ]
        },
        {
            name: "Control de Calidad",
            date: "2008-2012",
            where: "Cátenon",
            description: [
                {
                    info: "Control de calidad de publicidades y promociones.",
                },
                {
                    info: "Envío de éstas a los diferentes centros de emisión.",
                },
                {
                    info: "Contacto con diferentes departamentos de diferentes países.",
                },
            ]
        },
        {
            name: "Técnico en Videoteca",
            date: "2007-2008",
            where: "Molinare",
            description: [
                {
                    info: "Organización, clasificación y distribución de material videográfico.",
                },
            ]
        },
        {
            name: "Minutadora",
            date: "2007",
            where: "RGR",
            description: [
                {
                    info: "Seguimiento de diferentes canales de televisión.",
                },
            ]
        },
    ],


    skills: {
            design: [
                {
                    img: AfterEffects,
                    alt: "After Effects",
                    title: "After Effects"
                },
                {
                    img: Photoshop,
                    alt: "Photoshop",
                    title: "Photoshop"
                },
                {
                    img: Lightroom,
                    alt: "Lightroom",
                    title: "Lightroom"
                },
                {
                    img: Illustrator,
                    alt: "Illustrator",
                    title: "Illustrator"
                },
            ],
            
            frontEnd: [
                {   
                    img: Html,
                    alt: "HTML",
                    title: "HTML"
                    
                },
                {
                    img: Css,
                    alt: "CSS",
                    title: "CSS"
                },
                {
                    img: Javascript,
                    alt: "Javascript",
                    title: "Javacript"
                },
                {
                    img: React,
                    alt: "React JS.",
                    title: "React JS."
                },
                {
                    img: Angular,
                    alt: "Angular",
                    title: "Angular"
                },    
            ],
             
            backEnd: [
                {
                    img: Node,
                    alt: "Node",
                    title: "Node JS."
                },
                {
                    img: MongoDb,
                    alt: "Mongo DB",
                    title: "Mongo DB"
                },
                {
                    img: Postman,
                    alt: "Postman",
                    title: "Postman"
                },
                {
                    img: MySql,
                    alt: "MySQL",
                    title: "MySQL"
                },
                {
                    img: Php,
                    alt: "PHP",
                    title: "PHP"
                },
                {
                    img: Symfony,
                    alt: "Symfony",
                    title: "Symfony"
                },
            ],
        
            english: [
                {
                    english: "Inglés",
                    englishLevel: "B2",
                },
            ],
            spanish: [
                {
                    spanish: "Español",
                    spanishLevel: "Nativo",
                },

            ]
        },
    

    portfolio: [
        // {
        //     img: JavascriptApi,
        //     href: '',
        //     alt: 'Javascript',
        //     title: "Api Web Rick and Morty",
        //     info: "Javascript",
        //     hrefCode:''

        // },
        {
            img: NodeApi,
            href: 'https://movies-database-project.vercel.app/',
            alt: 'Node',
            title: "Api de películas",
            info: "Node Js.",
            hrefCode:'https://github.com/beaperezm/movies-database-project'
        },
        {
            img: NodeReact,
            href: 'https://project-react-web.vercel.app/',
            alt: 'React',
            title: "Api & Web Series Maleon",
            info: "Node Js. & React Js.",
            hrefCode:'https://github.com/beaperezm/project_react_web'
        },
        {
            img: NodeAngular,
            href: 'https://project-angular-web.vercel.app/home',
            alt: 'Angular',
            title: "Api & Web My Dinos",
            info: "Node Js. & Angular",
            hrefCode:'https://github.com/beaperezm/project_angular_web'
        },
    ],

    forList: [
        {
            text: "Sobre Mí",
            icon: "",
            id: "aboutme"
        },
        {
            text: "Estudios",
            icon: "",
            id: "education"
        },
        {
            text: "Experiencia",
            icon: "",
            id: "experience"
        },
        {
            text: "Competencias",
            icon: "",
            id: "skills"
        },
        {
            text: "Portfolio",
            icon: "",
            id: "portfolio"
        },
        {
            text: "Contacto",
            icon: "",
            id: "contact"
        }

    ]
 
}
