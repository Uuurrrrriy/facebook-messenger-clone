import { Card, CardContent, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

export const Message = forwardRef(({ message, userName }, ref) => {
  //   const { username, text } = message;
  console.log(message, userName);
  const isUser = userName === message.username;
  return (
    <div ref={ref} className={`message ${isUser && `message__user`}`}>
      <Card className={isUser ? "message__userCard" : "message_guestCard"}>
        <CardContent>
          <Typography color="white" variant="h5" component="h2">
            {!isUser && `${message.username || "Unknown user"} : `}{" "}
            {message.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});
