import {rerenderEntireTree} from '../render'

 let state = {
   profilePage:{
    posts: [
      {id: 1, message: "Поздравляю, ТЫ ТОЛЬКО ЧТО ГРАНАТУ.", likesCount: "10" },
      {id: 2, message: "Только что что?", likesCount: "15" },
      {id: 3, message: "Гранату, ясное дело." },
    ],
    newPostText: '2ch.so',
   },

   dialogsPage:{
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
    newMessageText: 'sup, /b/',
   },

   sideBar:{

   }
 }

export let addPost = () => {
  let newPost = {
    message: state.profilePage.newPostText,
    likes: 0,
    id: 5,
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export let addMessage = () => {
  let newMessage = {
    message: state.dialogsPage.newMessageText,
  }
  state.dialogsPage.messages.push(newMessage)
  state.dialogsPage.newMessageText = ''
  rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state)
}

export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state)
}

 export default state