import oferta8 from './assets/images/hansen.webp';
import oferta9 from './assets/black_sueter.png';
import oferta10 from './assets/images/michael-kors.webp';
import oferta1 from './assets/image_1.png';
import oferta2 from './assets/black_sueter.png';
import oferta3 from './assets/prenda3.webp';
import oferta4 from './assets/prenda4.webp';
import oferta5 from './assets/black_sueter.png';
import oferta6 from './assets/prenda6.webp';
import oferta11 from './assets/images/levis-batwing.webp';
import oferta12 from './assets/test_cinturon.webp';
import oferta7 from './assets/images/short.webp';
import cuponimg from './assets/logos/vans.svg'

export const products = [
    {
        is_cupon: false,
        name: 'CAMISETA “THEO”',
        label_top: 'Amazon',
        label_top_bg: '#FAE7CB',
        label_top_color: '#E4B408',
        cost_init: '79,90',
        cost_end: '69,90',
        cost_delivery: '3,90',
        discount: '35',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: false,
        },
        image: oferta1,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#b3ac9f', '#296118']
    },
    {
        is_cupon: false,
        name: 'Black / Silver Metallic',
        label_top: 'Amazon',
        label_top_bg: '#FAE7CB',
        label_top_color: '#E4B408',
        cost_init: '79,90',
        cost_end: '69,90',
        discount: '35',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: false,
        },
        alerta_notify: true,
        image: oferta5,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#b3ac9f', '#296118'],
        oclock: false
    }, {
        is_cupon: false,
        name: 'Black / Silver Metallic',
        label_top: 'Amazon',
        label_top_bg: '#FAE7CB',
        label_top_color: '#E4B408',
        cost_init: '78.50',
        cost_end: '69.90',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        discount: '15',
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: false,
        },
        image: oferta7,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        oclock: false,
        colours: ['#b3ac9f', '#296118']
    }, {
        is_cupon: false,
        name: 'Camiseta Theo',
        label_top: 'About you',
        label_top_bg: '#D8D8D8',
        label_top_color: '#000000',
        cost_init: '34.50',
        cost_end: '29.90',
        discount: '18',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: true,
        },
        image: oferta8,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        oclock: false,
        colours: ['#F2F2F2', '#171717']
    },

    {
        is_cupon: false,
        name: 'Zapatillas bajas Enzo',
        label_top: 'Deportes Outlet ',
        label_top_bg: '#C5E8F8',
        label_top_color: '#288ED8',
        black_friday_top: 'black friday',
        black_friday_color: '#FFFFFF',
        black_friday: false,
        cost_init: '98.50',
        cost_end: '89.90',
        discount: '18',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: false,
        },
        image: oferta9,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#EDEBEC', '#4A4A4A']
    }, {
        is_cupon: true,
        name: 'Chaqueta Christopher',
        label_top: 'SHEIN',
        label_top_bg: '#1D2E35',
        label_top_color: '#FFFFFF',
        cost_init: '88.50',
        cost_end: '59.90',
        discount: '25',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: false,
            codigo: 'codigo',
            color_bg: '#4A4A4A',
            color_text: '#FFFFFF',
            fecha: 'hace 2 dias'
        },
        image: cuponimg,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#EDEBEC', '#4A4A4A']
    },
    {
        is_cupon: false,
        name: 'Black / Silver Metallic',
        label_top: 'Amazon',
        label_top_bg: '#FAE7CB',
        label_top_color: '#E4B408',
        cost_init: '79,90',
        cost_end: '69,90',
        discount: '35',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: false,
        },
        image: oferta1,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#b3ac9f', '#296118']
    }, {
        is_cupon: false,
        name: "Camiseta 'Theo'",
        label_top: 'About You',
        label_top_bg: '#D8D8D8',
        label_top_color: '#000',
        cost_init: '79,90',
        cost_end: '69,90',
        discount: '35',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: false,
        },
        image: oferta2,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#000'],
        oclock: false
    }, {
        is_cupon: false,
        name: 'Zapatillas bajas Enzo',
        label_top: 'Deportes Outlet',
        label_top_bg: '#C5E8F8',
        label_top_color: '#288ED8',
        cost_init: '79,90',
        cost_end: '69,90',
        discount: '35',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: false,
        },
        image: oferta3,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#edebec', '#4a4a4a'],
        oclock: false
    }, {
        is_cupon: false,
        name: "Chaqueta 'Christopher'",
        label_top: 'SHEIN',
        label_top_bg: '#1D2E35',
        label_top_color: '#FFF',
        cost_init: '79,90',
        cost_end: '69,90',
        discount: '35',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: false,
        },
        image: oferta4,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#dad8d9', '#4a4a4a'],
        oclock: false
    }, {
        is_cupon: false,
        name: 'Black / Silver Metallic',
        label_top: 'Amazon',
        label_top_bg: '#FAE7CB',
        label_top_color: '#E4B408',
        cost_init: '79,90',
        cost_end: '69,90',
        discount: '35',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: true,
        },
        image: oferta5,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#b3ac9f', '#296118'],
        oclock: false
    }, {
        is_cupon: false,
        name: "Camiseta 'Theo'",
        label_top: 'About You',
        label_top_bg: '#D8D8D8',
        label_top_color: '#000',
        cost_init: '79,90',
        cost_end: '69,90',
        discount: '35',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: false,
        },
        image: oferta6,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#000'],
        oclock: false
    },
    {
        is_cupon: false,
        name: "Zapatilla 'Running'",
        label_top: 'About You',
        label_top_bg: '#D8D8D8',
        label_top_color: '#000',
        cost_init: '79,90',
        cost_end: '69,90',
        discount: '35',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: false,
        },
        image: oferta11,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#000'],
        oclock: false
    },
    {
        is_cupon: false,
        name: "Cinturon 'Theo'",
        label_top: 'Amazon',
        label_top_bg: '#FAE7CB',
        label_top_color: '#E4B408',
        cost_init: '79,90',
        cost_end: '69,90',
        discount: '35',
        icono_medalla: true,
        icono_tijera: true,
        icono_alerta: true,
        categories: [{
            id: '112',
            name: 'moda'
        }, {
            id: '112',
            name: 'sueters'
        }],
        cupon: {
            agotado: false,
        },
        image: oferta12,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#000'],
        oclock: true
    }
];