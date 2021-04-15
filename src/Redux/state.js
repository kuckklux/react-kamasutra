import {rerenderEntireTree} from '../render'

 let state = {
   profilePage:{
    posts: [
      {id: 1, message: "Поздравляю, ТЫ ТОЛЬКО ЧТО ГРАНАТУ.", likesCount: "10" },
      {id: 2, message: "Только что что?", likesCount: "15" },
      {id: 3, message: "Гранату, ясное дело." },
      {id: 4, message: "Что гранату?" },
      {id: 5, message: "Только что." },
      {id: 6, message: "Что только что?" },
      {id: 7, message: "Гранату." },
      {id: 8, message: "Что гранату?" },
      {id: 9, message: "Только что." },
    ],
   },

   messagesPage:{
     messages:[
      { message: "Братишка" },
      { message: "Я тебе покушать принес" },
      { message: "Угощайся" },
    ],
     dialogs: [
      { id: 1, name: "cth", avatar: "https://clck.ru/U4EGN"},
      { id: 2, name: "shbmnk" },
      { id: 3, name: "fv" },
    ],
   },

   sideBar:{

   }
 }

export let addPost = (postMessage) => {
  let newPost = {
    message: postMessage,
    likes: 0,
    id: 5,
  }
  state.profilePage.posts.push(newPost)
  rerenderEntireTree(state)
}

 export default state