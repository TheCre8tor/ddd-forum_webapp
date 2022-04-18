import { JWTToken, RefreshToken } from '../../models/tokens';
import { IAuthService, TokenType } from './auth.service.interface';

class AuthService implements IAuthService {
    public accessToken: JWTToken;
    public refreshToken: RefreshToken;

    public static accessTokenName: string = 'ddd-forum-access-token';
    public static refreshTokenName: string = 'ddd-forum-refresh-token';

    constructor() {
        this.accessToken = this.getToken('access-token');
        this.refreshToken = this.getToken('refresh-token');
    }

    private getTokenName(tokenType: TokenType): string {
        return tokenType === 'access-token' ? AuthService.accessTokenName : AuthService.refreshTokenName;
    }

    public isAuthenticated(): boolean {
        return this.getToken('access-token') !== null;
    }

    public getToken(tokenType: TokenType): JWTToken | RefreshToken {
        const tokenName: string = this.getTokenName(tokenType);

        const token = localStorage.getItem(tokenName);
        return token ? JSON.parse(token).token : null;
    }

    public setToken(tokenType: TokenType, token: string): void {
        let date = new Date();
        date.setTime(date.getTime() + 30 * 60 * 1000);

        const tokenName: string = this.getTokenName(tokenType);

        const parsedToken = JSON.stringify({ token: token, expires: date });
        localStorage.setItem(tokenName, parsedToken);
    }

    public removeToken(tokenType: TokenType): void {
        const tokenName = this.getTokenName(tokenType);

        localStorage.removeItem(tokenName);
    }
}

export { AuthService };
