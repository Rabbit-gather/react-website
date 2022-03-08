import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import logo from '../assets/logo.svg';
import ButtonGroup from '../components/ButtonGroup';

export default React.memo(props => {
    const navigate = useNavigate();

    const links: Array<Link> = [
        {
            text: '個人服務',
        },
        {
            onClick: () => goToPage('/service'),
            text: '公司服務',
        },
        {
            text: '部落格',
        },
        {
            text: '關於我們',
        },
    ];

    function goToPage(pathname: string) {
        navigate({ pathname });
    }

    return <div className="justify-self-auto">
        <div className="flex justify-center">
            <img src={logo} alt="logo" style={{ height: '60vh' }} />
        </div>

        <div className="px-5 py-4">
            <Typewriter
                options={{
                    wrapperClassName: 'Typewriter__wrapper text-7xl',
                    cursorClassName: 'Typewriter__cursor text-7xl',
                    strings: '兔給得資訊公司',
                    autoStart: true,
                }}
            />
        </div>

        <div className="px-5 py-4">
            <ButtonGroup links={links}/>
        </div>
    </div>;
});