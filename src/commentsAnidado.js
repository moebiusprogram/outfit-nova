import avatar1 from "./assets/images/avatar/1.png";
import avatar2 from "./assets/images/avatar/2.png";
import avatar3 from "./assets/images/avatar/3.png";
import avatar4 from "./assets/images/avatar/4.png";
import avatar5 from "./assets/images/avatar/5.png";
import avatar6 from "./assets/images/avatar/6.png";

export const commentsAnidado = [
  {
    id: 1,
    author: 'Mario Rivas',
    time: 'hace 13 horas',
    text: 'An interesting implication of the 2007 study concerns the use of hand sanitizers by observant Muslims. Alcohol is forbidden (haram) to Muslims. Since the alcohol in hand sanitizer is absorbed into the blood, does that make these hand sanitizers haram?',
    source: 'Comentario en Amazon',
    avatar: avatar1,
    likes: 44,
    dislikes: false,
    replies: [
      {
        id: 2,
        author: 'User2',
        time: 'hace 12 horas',
        text: 'Estoy de acuerdo, sería genial.',
        likes: 10,
        dislikes: false,
        avatar: avatar2,
      },
      {
        id: 3,
        author: 'User3',
        time: 'hace 11 horas',
        text: 'No estoy seguro, no creo que sea una buena idea.',
        likes: 5,
        dislikes: false,
        avatar: avatar3,
      },
    ],
  },
  {
    id: 4,
    author: 'Javier Rivas',
    time: 'hace 10 horas',
    text:
      'An interesting implication of the 2007 study concerns the use of hand sanitizers by observant Muslims. Alcohol is forbidden (haram) to Muslims. Since the alcohol in hand sanitizer is absorbed into the blood, does that make these hand sanitizers haram?',
    source: 'Comentario en Amazon',
    likes: 20,
    dislikes: false,
    avatar: avatar4,
    replies: [
      {
        id: 5,
        author: 'User5',
        time: 'hace 9 horas',
        text:
          'Sí, lo probé y me gustó mucho.',
        likes:15,
        dislikes: false,
        avatar:avatar5,
      },
      {
        id: 6,
        author: 'User6',
        time: 'hace 8 horas',
        text:
          'Lo probé pero no me gustó tanto. Creo que hay mejores opciones en el mercado.',
        likes: 8,
        dislikes: false,
        avatar: avatar5,
      },
    ],
  },
  {
    id: 7,
    author: 'Kristian Bustamante',
    time: 'hace 7 horas',
    text:
      'An interesting implication of the 2007 study concerns the use of hand sanitizers by observant Muslims. Alcohol is forbidden (haram) to Muslims. Since the alcohol in hand sanitizer is absorbed into the blood, does that make these hand sanitizers haram?',
    source: 'Comentario en foro',
    likes: 30,
    dislikes: false,
    avatar: avatar6,
    replies: [

    ]
  }
];