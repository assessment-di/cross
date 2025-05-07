import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { mockAuth } from '../utils/auth.util';
import { AuthContext } from '../types/auth.types';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const auth = mockAuth();

    if (!auth.isAuthenticated) {
      throw new Error('Not authenticated');
    }

    // Add the auth result to the request context so it can be used in resolvers
    const gqlContext = ctx.getContext<AuthContext>();
    gqlContext.auth = auth;

    return true;
  }
}
