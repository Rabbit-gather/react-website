import React, {ReactNode, useState} from "react";
import logo from "../assets/logo.svg";
import ButtonGroup from "../components/ButtonGroup";

function Lobby()
{
    let json: Array<Link> = [
        {
            href: "",
            text: '個人服務'
        },
        {
            href: "",
            text: '公司服務'
        },
        {
            href: "",
            text: '部落格'
        },
        {
            href: "",
            text: '關於我們'
        },
    ]

    return <div className="App">
        <header className="App-header">
            <img height="400vh" src={logo} className="App-logo" alt="logo" />
            <p><h1>兔給得資訊公司</h1></p>
            <div className="px-5 py-4">
                <ButtonGroup navButtons={json}/>
            </div>
        </header>
    </div>
}

export default Lobby;