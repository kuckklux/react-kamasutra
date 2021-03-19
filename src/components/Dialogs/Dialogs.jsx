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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="cth" id="1" />
        <DialogItem name="shbmnk" id="2" />
        <DialogItem name="fv" id="3" />
        <DialogItem name="Дмитрий Юшин" id="4" />
        <DialogItem name="Аркадий Давидович" id="5" />
        <DialogItem name="Jonyol47" id="6" />
      </div>

      <div className={s.messages}>
        <Message message="Братишка" />
        <Message message="Я тебе покушать принес" />
        <Message message="Угощайся" />
      </div>
    </div>
  );
};

export default Dialogs;
