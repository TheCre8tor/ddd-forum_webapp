import { APIResponse } from '../../../shared/infrastructure/services/api.response';
import { BaseAPI } from '../../../shared/infrastructure/services/base.api';
import { LoginDTO } from '../dtos/login.dto';
import { User } from '../models/user';

export interface IUsersService {
    getCurrentUserProfile(): Promise<User>;
    createUser(email: string, username: string, password: string): Promise<APIResponse<void>>;
    login(email: string, password: string): Promise<APIResponse<LoginDTO>>;
    logout(): Promise<APIResponse<void>>;
}

class UserService extends BaseAPI implements IUsersService {
    getCurrentUserProfile(): Promise<User> {
        throw new Error('Method not implemented.');
    }
    createUser(email: string, username: string, password: string): Promise<APIResponse<void>> {
        throw new Error('Method not implemented.');
    }
    login(email: string, password: string): Promise<APIResponse<LoginDTO>> {
        throw new Error('Method not implemented.');
    }
    logout(): Promise<APIResponse<void>> {
        throw new Error('Method not implemented.');
    }
}
