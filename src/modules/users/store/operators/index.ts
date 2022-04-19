import { createUser } from './create_user';
import { getUserProfile } from './get_user_profile';
import { login } from './login';
import { logout } from './logout';

export interface IUserOperators {
    getUserProfile(): void;
    login(email: string, password: string): void;
    logout(): void;
    createUser(email: string, username: string, password: string): void;
}

export { getUserProfile, login, logout, createUser };
