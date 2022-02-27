import { Back } from 'gsap';
import React, {CSSProperties, Fragment, ReactNode} from 'react';
import {Reveal, Timeline, Tween} from "react-gsap";
import Button from "./Button";

interface ButtonGroupProps {
    navButtons?: Array<Link>
}

export default function ButtonGroup(
    {
        navButtons = [],
    } : ButtonGroupProps
){
    return <div className={`flex justify-center`}>
        {navButtons.map((link, i) =>
            <Button key={i} className="m-2">
                {link.text}
            </Button>
        )}
    </div>
}