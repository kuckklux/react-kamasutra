const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.text;
      return state;
    case SEND_MESSAGE:
      let newMessage = state.newMessageText;
      state.newMessageText = "";
      state.messages.push({ id: 6, message: newMessage });
      return state;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: text,
});

export default dialogsReducer;
