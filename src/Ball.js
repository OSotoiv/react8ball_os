import React, { useState } from "react";
import Message from "./Message";
import './Ball.css'

function getMessage() {
    // return random message from list
    const msg = [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ];
    return msg[Math.floor(Math.random() * msg.length)];
}
const msgInit = { msg: 'Got a Question?', color: 'start' }

const Ball = () => {
    const [message, setMessage] = useState(msgInit);
    return (
        <>
            <div className="ball" onClick={() => setMessage(getMessage())}>
                <Message msg={message} />
            </div>
            <div>
                <button className="resetBTN" onClick={() => setMessage(msgInit)}>Reset</button>
            </div>
        </>

    )
}

export default Ball;