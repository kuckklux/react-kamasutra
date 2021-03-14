import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + '' +s.active}>cth</div>
        <div className={s.dialog}>shbmnk</div>
        <div className={s.dialog}>fv</div>
        <div className={s.dialog}>Дмитрий Юшин</div>
        <div className={s.dialog}>Аркадий Давидович</div>
        <div className={s.dialog}>Jonyol47</div>
      </div>

      <div className={s.messages}>
        <div className={s.message}>Братишка</div>
        <div className={s.message}>Я тебе покушать принес</div>
        <div className={s.message}>Угощайся</div>
      </div>
    </div>
  );
};

export default Dialogs;
