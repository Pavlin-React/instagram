import { USERS } from './users'
export let POSTS = [
  {
    imageUrl: 'https://i.ibb.co/182bP1y/4k.png',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Train rains to Hogwarts.',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'thequazman',
        comment: 'Wow this build looks fire. Super exited about that'
      },
      {
        user: 'amaath.dev',
        comment: "Once I wake up, I'll be ready to code up this morning"
      },
    ]
  },
  {
    imageUrl: 'https://i.ibb.co/182bP1y/4k.png',
    user: USERS[1].user,
    likes: 702,
    caption: 'Where do I am going.',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'aquaman',
        comment: 'How can you do that things to me bro'
      },
      {
        user: 'david.dev',
        comment: "Everything is OK, but I did not still expect it"
      },
    ]
  },
]