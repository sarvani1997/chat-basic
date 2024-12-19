import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const handleSendMessage = () => {
    if(message === "") {
      return
    }
    setMessage("")
    let newList = [message].concat([...messageList]);

    setMessageList(newList);
  };
  return (
    <div className="container">
      <div className="messagesContainer">
        <div className="list">
          {messageList.map((msg, i) => (
            <div
              className={i === 0 ? "no-border":"item"}
            >
              <p>{msg}</p>
            </div>
          ))}
        </div>
        <div className="sendMessage">
          <input
            className="input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button disabled={message === ""} onClick={handleSendMessage}>go</button>
        </div>
      </div>
    </div>
  );
}

export default App;
