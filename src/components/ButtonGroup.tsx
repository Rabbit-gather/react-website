import React from 'react';
import Button from './Button';

interface ButtonGroupProps {
    navButtons?: Array<Link>;
}

export default function ButtonGroup(
    {
        navButtons = [],
    } : ButtonGroupProps,
) {
    return <div className={'flex justify-center'}>
        {navButtons.map((link, i) =>
            <Button key={i} className="m-2">
                {link.text}
            </Button>,
        )}
    </div>;
}