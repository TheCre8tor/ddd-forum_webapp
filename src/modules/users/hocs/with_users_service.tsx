import { FC } from 'react';
import { userService } from '../services/dependency.injection';

function withUserService(WrappedComponent: any) {
    const HOC: FC = props => {
        return <WrappedComponent {...props} usersService={userService} />;
    };

    return HOC;
}

export default withUserService;
