import { AuthResult } from '../types/auth.types';

// TODO: Replace with proper authentication mechanism
export const mockAuth = (): AuthResult => {
  // This is a temporary implementation
  return {
    isAuthenticated: true,
    userUuid: 'someUserUuid', // Temporary hardcoded UUID
  };
};
