import React, { FC, ReactNode } from 'react';
import { Helmet } from 'react-helmet';
import { ToastContainer } from 'react-toastify';
import { siteMetaData } from '../../config/site_meta_data.config';
import withUserService from '../../modules/users/hocs/with_users_service';
import { UserService } from '../../modules/users/services/user/user.service';

import 'react-toastify/dist/ReactToastify.css';
import './layout.sass';

interface LayoutProps {
    usersService: UserService;
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = props => {
    return (
        <div className="app-layout">
            <div className="app-layout-inner">
                {
                    <Helmet>
                        <title>{siteMetaData.title}</title>
                        <link
                            href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,500,700,700i&display=swap"
                            rel="stylesheet"
                        />
                        <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
                    </Helmet>
                }

                <ToastContainer />
                {props.children}
            </div>
        </div>
    );
};

export default withUserService(Layout);
