import { Left, Right } from '../../../../shared/core/either';
import { Result } from '../../../../shared/core/result';
import { APIResponse } from '../../../../shared/infrastructure/services/api.response';
import { BaseAPI } from '../../../../shared/infrastructure/services/base.api';
import { LoginDTO } from '../../dtos/login.dto';
import { User } from '../../models/user';
import { IAuthService } from '../auth/auth.service.interface';
import { IUsersService } from './user.service.interface';

class UserService extends BaseAPI implements IUsersService {
    public constructor(authService: IAuthService) {
        super(authService);
    }

    public async getCurrentUserProfile(): Promise<User> {
        const response = await this.get('/users/me', null, {
            authorization: this.authService.getToken('access-token')
        });

        return response.data['user'] as User;
    }

    public async createUser(email: string, username: string, password: string): Promise<APIResponse<void>> {
        try {
            await this.post('/users', { email, username, password });

            return new Right(Result.ok<void>());
        } catch (err: any) {
            return new Left(err.response ? err.response.data.message : 'Connection failed');
        }
    }

    public async login(email: string, password: string): Promise<APIResponse<LoginDTO>> {
        try {
            const response = await this.post('/users/login', { email, password });
            const dto: LoginDTO = response.data;

            this.authService.setToken('access-token', dto.accessToken);
            this.authService.setToken('refresh-token', dto.refreshToken);

            return new Right(Result.ok<LoginDTO>(dto));
        } catch (err: any) {
            return new Left(err.data ? err.data.error : 'Connection failed');
        }
    }

    public async logout(): Promise<APIResponse<void>> {
        try {
            await this.post('/users/logout', null, null, {
                authorization: this.authService.getToken('access-token')
            });

            this.authService.removeToken('access-token');
            this.authService.removeToken('refresh-token');

            return new Right(Result.ok<void>());
        } catch (err: any) {
            return new Left(err.response ? err.response.data.message : 'Connection failed');
        }
    }
}

export { UserService };
