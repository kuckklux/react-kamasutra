import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import { BrowserRouter, Route } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <div className="app-wrapper-content-profile">
                <Profile
                  profilePage={props.state.profilePage}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                />
              </div>
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <div className="app-wrapper-content-dialogs">
                <Dialogs
                  dialogsPage={props.state.dialogsPage}
                  messages={props.state.dialogsPage.messages}
                  dialogs={props.state.dialogsPage.dialogs}
                  updateNewMessageText={props.updateNewMessageText}
                  addMessage={props.addMessage}
                />
              </div>
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
