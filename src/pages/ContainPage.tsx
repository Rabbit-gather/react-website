import React from 'react';
import { matchPath, RouteProps, useNavigate } from 'react-router-dom';
import { TransitionGroup } from 'react-transition-group';
import ButtonGroup from '../components/ButtonGroup';

interface Props {
    containRoutes?: RouteProps[];
}
export default React.memo(({ containRoutes } : Props) => {
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

    return <>
        <ButtonGroup links={links}/>
        <TransitionGroup>
            {
                containRoutes
                    ?.filter(({ path }) => path && matchPath(window.location.pathname, path))
                    .map(({ element }, i) => <React.Fragment key={i}>{element}</React.Fragment> )
            }
        </TransitionGroup>
    </>;
});