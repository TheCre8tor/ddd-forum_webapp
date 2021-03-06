import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './../sass/back_navigation.sass';

interface BackNavigationProps {
    to: string;
    text: string;
}

const BackNavigation: FC<BackNavigationProps> = props => {
    return (
        <Link to={props.to} className="back-nav">
            <p>{props.text}</p>
        </Link>
    );
};

export default BackNavigation;
