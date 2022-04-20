import React, { FC } from 'react';
import { Button } from '../../../../../shared/components/button';

interface ProfileButtonProps {
    isLoggedIn: boolean;
    username: string;
    onLogout: () => void;
}

const ProfileButton: FC<ProfileButtonProps> = props => {
    const { isLoggedIn, username, onLogout } = props;

    return isLoggedIn ? (
        <Button
            text={
                <span>
                    {`${username} / `}
                    {<u onClick={onLogout}>logout</u>}
                </span>
            }
            onClick={() => {}}
        />
    ) : (
        <Button
            text="Join"
            onClick={() => {
                if (typeof window !== 'undefined') {
                    window.location.href = '/join';
                }
            }}
        />
    );
};

export default ProfileButton;
