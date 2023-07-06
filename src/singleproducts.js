import oferta1 from './assets/image_1.png';
import oferta5 from './assets/black_sueter.png';
import ropa1 from './assets/single-product/ropa1.svg'
export const singleproducts = [
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
        icono_palettaColor: true,
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
        image: ropa1,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#b3ac9f', '#296118'],
        oclock: false
    },
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
        icono_palettaColor: true,
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
        colours: ['#b3ac9f', '#296118'],
        oclock: false
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
        icono_palettaColor: true,
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
        alerta_notify: false,
        image: oferta5,
        image_width: '192.87px',
        image_height: '220px',
        date: '1 Febrero',
        colours: ['#b3ac9f', '#296118'],
        oclock: false
    }
]