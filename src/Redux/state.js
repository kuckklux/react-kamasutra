import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        {
          id: 1,
          message: "Поздравляю, ТЫ ТОЛЬКО ЧТО ГРАНАТУ.",
          likesCount: "10",
        },
        { id: 2, message: "Только что что?", likesCount: "15" },
        { id: 3, message: "Гранату, ясное дело." },
      ],
      newPostText: "2ch.so",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "cth", avatar: "https://clck.ru/U4EGN" },
        { id: 2, name: "shbmnk" },
        { id: 3, name: "fv" },
      ],
      messages: [
        { id: 1, message: "Братишка" },
        { id: 2, message: "Я тебе покушать принес" },
        { id: 3, message: "Угощайся" },
      ],
      newMessageText: "",
    },
  },
    

    _callSubscriber() {
      console.log("state changed");
    },

    getState() {
      return this._state;
    },
    subscribe(observer) {
      this._callSubscriber = observer; //паттерн //publisher-subscriber //addEventListener
    },
    

    dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action);
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
      this._state.sidebar = sidebarReducer(this._state.sidebar, action);

      this._callSubscriber(this._state)
    },
  }

export default store;
