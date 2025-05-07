export interface AuthResult {
  isAuthenticated: boolean;
  userUuid: string;
}

export interface AuthContext {
  auth?: AuthResult;
}
