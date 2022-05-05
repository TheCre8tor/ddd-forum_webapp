import { JWTToken, RefreshToken } from '../../models/tokens';

export type TokenType = 'access-token' | 'refresh-token';

export interface IAuthService {
    isAuthenticated(): boolean;
    getToken(tokenType: TokenType): JWTToken | RefreshToken | null;
    setToken(tokenType: TokenType, token: JWTToken | RefreshToken): void;
    removeToken(tokenType: TokenType): void;
}
