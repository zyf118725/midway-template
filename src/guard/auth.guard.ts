import { Guard, IGuard } from '@midwayjs/core';
import { Context } from '@midwayjs/koa';

@Guard()
export class AuthGuard implements IGuard<Context> {
  async canActivate(context: Context, supplierClz, methodName: string): Promise<boolean> {
    // console.log('守卫context: ', context);
    // const token = context?.headers?.token;
    // console.log('token: ', token);
    // if (!token) return false;
    return true
  }
}