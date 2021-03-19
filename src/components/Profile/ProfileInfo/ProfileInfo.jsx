import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://sun9-75.userapi.com/impf/-9gwyv4zDTOmtEBx3Ky4QGGvJQXTXyLlmfdLVg/y0-S1T2WxEw.jpg?size=992x246&quality=96&sign=5e86086959fb16470312cc8784bd70cc&type=album" />

        <div className={s.descriptionBlock}>ava + description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
