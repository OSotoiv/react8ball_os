import React from "react";
import './Message.css'

const Message = ({ msg }) => {
    return (
        <div className={`triangle ${msg.color}`}>
            <p className="message">{msg.msg}</p>
        </div>
    )
}

export default Message;