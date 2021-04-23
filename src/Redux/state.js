const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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
      newMessageText:"",
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
    if (action.type === ADD_POST) {
      let newPost = {
        message: this._state.profilePage.newPostText,
        likes: 0,
        id: 5,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.text;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let newMessage = this._state.dialogsPage.newMessageText
      this._state.dialogsPage.newMessageText = "";
      this._state.dialogsPage.messages.push({id: 6, message: newMessage});
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text,
});

export default store;
