import { JWTToken, RefreshToken } from '../../models/tokens';
import { IAuthService, TokenType } from './auth.service.interface';

import CrytoJS from 'crypto-js';
import Logger from 'logrocker';

const secret = process.env.REACT_APP_JWT_SECRET;

class AuthService implements IAuthService {
    public accessToken: JWTToken | null;
    public refreshToken: RefreshToken | null;

    public static accessTokenName: string = 'ddd-forum-access-token';
    public static refreshTokenName: string = 'ddd-forum-refresh-token';

    constructor() {
        this.accessToken = this.getToken('access-token');
        this.refreshToken = this.getToken('refresh-token');
    }

    private getTokenName(tokenType: TokenType): string {
        return tokenType === 'access-token' ? AuthService.accessTokenName : AuthService.refreshTokenName;
    }

    public encryptToken(token: string): string {
        const jsonToken = JSON.stringify(token);
        const ciphertext = CrytoJS.AES.encrypt(jsonToken, secret!).toString();

        return ciphertext;
    }

    public decryptToken(token: string): string | null {
        try {
            const bytes = CrytoJS.AES.decrypt(token, secret!);
            const parsedToken = JSON.parse(bytes.toString(CrytoJS.enc.Utf8));

            return parsedToken;
        } catch (err: any) {
            Logger.error(err);
            return null;
        }
    }

    public isAuthenticated(): boolean {
        return this.getToken('access-token') !== null;
    }

    public getToken(tokenType: TokenType): JWTToken | RefreshToken | null {
        let decyptData: string | null;

        const tokenName: string = this.getTokenName(tokenType);
        const token = localStorage.getItem(tokenName);

        if (!!token) {
            decyptData = this.decryptToken(token!);
            return JSON.parse(decyptData!).token;
        }

        return null;
    }

    public setToken(tokenType: TokenType, token: string): void {
        let date = new Date();
        date.setTime(date.getTime() + 30 * 60 * 1000);

        const tokenName: string = this.getTokenName(tokenType);
        const parsedToken = JSON.stringify({ token: token, expires: date });

        // Encrypt data before saving into localStorage
        const encryptData = this.encryptToken(parsedToken);

        localStorage.setItem(tokenName, encryptData);
    }

    public removeToken(tokenType: TokenType): void {
        const tokenName = this.getTokenName(tokenType);

        localStorage.removeItem(tokenName);
    }
}

export { AuthService };
