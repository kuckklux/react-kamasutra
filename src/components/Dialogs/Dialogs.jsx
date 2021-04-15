import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {

  let dialogsElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = props.messages.map((m) => <Message message={m.message} />);

  let newDialogElement = React.createRef()

  let addMessage = () =>{
    let text = newDialogElement.current.value
    alert(text)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>

      <div>
        <textarea ref={newDialogElement} cols="15" rows="1"></textarea>
        <button onClick = {addMessage}>Add message</button>
      </div>
    </div>
  );
};

export default Dialogs;
