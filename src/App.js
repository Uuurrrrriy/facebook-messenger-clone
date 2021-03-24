import React, { useEffect, useState } from "react";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import FlipMove from "react-flip-move";
import { Message } from "./Message";
import { db } from "./firebase";
import firebase from "firebase";
import SendIcon from "@material-ui/icons/Send";
import { IconButton } from "@material-ui/core";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    db.collection("message")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            message: doc.data(),
          }))
        );
      });
  }, []);

  useEffect(() => {
    // run code there ...
    // if [] that means the same as componentDidMount
    setUserName(prompt("What is your name: "));
  }, []); // condition

  const onChangeHandler = (e) => {
    // input handler
    setInput(e.target.value);
  };

  const sendMessage = (e) => {
    // all the logic to send a message
    e.preventDefault();
    db.collection("message").add({
      username: userName,
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    // setMessages([
    //   ...messages,
    //   {
    //     username: userName,
    //     text: input,
    //   },
    // ]);
    setInput("");
  };

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Hello Programmer</h1>
      <h2>Welcome {userName}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <InputLabel>Enter a message: </InputLabel>
          <Input
            className="app__input"
            placeholder=" Enter a message... "
            value={input}
            onChange={onChangeHandler}
          />
          <IconButton
            className="app__iconButton"
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
          {/* <Button
            disabled={!input}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            {" "}
            Send Message{" "}
          </Button> */}
        </FormControl>
      </form>
      <FlipMove>
        {!!messages.length &&
          messages.map(({ id, message }) => (
            <Message key={id} userName={userName} message={message} />
          ))}
      </FlipMove>
    </div>
  );
}

export default App;
