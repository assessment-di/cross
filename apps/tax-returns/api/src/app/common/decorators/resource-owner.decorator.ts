import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthContext } from '../types/auth.types';

export const ResourceOwner = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const gqlContext = ctx.getContext<AuthContext>();

    if (!gqlContext.auth) {
      throw new UnauthorizedException('Authentication context not found');
    }

    return gqlContext.auth.userUuid;
  },
);
