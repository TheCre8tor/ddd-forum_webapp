import { APIResponse } from '../../../../shared/infrastructure/services/api.response';
import { LoginDTO } from '../../dtos/login.dto';
import { User } from '../../models/user';

interface IUsersService {
    getCurrentUserProfile(): Promise<User>;
    createUser(email: string, username: string, password: string): Promise<APIResponse<void>>;
    login(email: string, password: string): Promise<APIResponse<LoginDTO>>;
    logout(): Promise<APIResponse<void>>;
}

export type { IUsersService };
