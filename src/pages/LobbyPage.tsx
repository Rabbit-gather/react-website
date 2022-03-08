import React, {ReactNode, useState} from "react";
import logo from "../assets/logo.svg";
import ButtonGroup from "../components/ButtonGroup";
import Typewriter from 'typewriter-effect';

function LobbyPage()
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

    return <div className="justify-self-auto">
        <div className="flex justify-center">
            <img src={logo} alt="logo" style={{ height: "60vh"}} />
        </div>

        <div className="px-5 py-4">
            <Typewriter
                options={{
                    wrapperClassName: `Typewriter__wrapper text-7xl`,
                    cursorClassName: `Typewriter__cursor text-7xl`,
                    strings: '兔給得資訊公司',
                    autoStart: true,
                }}
            />
        </div>

        <div className="px-5 py-4">
            <ButtonGroup navButtons={json}/>
        </div>
    </div>
}

export default LobbyPage;