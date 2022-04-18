import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';

const authService = new AuthService();
const userService = new UserService(authService);

export { authService, userService };
