import React, { FC } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
    title: string;
    subtitle?: string;
    isUpvotable?: boolean;
    onUpvoteClicked?: Function;
    onDownvoteClicked?: Function;
    points?: number;
    isLoggedIn?: boolean;
}

const Header: FC<HeaderProps> = props => {
    return (
        <div className="header">
            (// todo: implement Points)
            <div className="content-container">
                <h1>{props.title}</h1>
                <p>
                    <b>{props.subtitle}</b>
                </p>

                <div className="header-links">
                    <Link to="/submit">submit</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
