import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + "" + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogs = [
    { id: 1, name: "cth" },
    { id: 2, name: "shbmnk" },
    { id: 3, name: "fv" },
    { id: 4, name: "Дмитрий Юшин" },
    { id: 5, name: "Аркадий Давидович" },
    { id: 6, name: "Jonyol47" },
  ];

  let messages = [
    { message: "Братишка" },
    { message: "Я тебе покушать принес" },
    { message: "Угощайся" },
  ];

  /*стрелочная функция вызовется столько раз, сколько элементов в массиве
  let dialogsElements = dialogsData.map( (dialog) => {})[ — когда параметр 1, скобки можно убрать*/

  let dialogsElements = dialogs.map(d => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map(m => (
    <Message message={m.message} />
  ));

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
