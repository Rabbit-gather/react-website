import React from 'react';
import Button from './Button';

interface ButtonGroupProps {
    links?: Array<Link>;
}

export default function ButtonGroup(
    {
        links = [],
    } : ButtonGroupProps,
) {
    return <div className={'flex justify-center'}>
        {links.map((link, i) =>
            <Button key={i} className="m-2" onClick={link.onClick}>
                {link.text}
            </Button>,
        )}
    </div>;
}