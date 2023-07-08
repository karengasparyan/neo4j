import {validate, ValidationError} from 'class-validator';
import {plainToInstance} from 'class-transformer';
import { Request, Response, NextFunction } from 'express';

type ValidationType = 'body' | 'params' | 'query';

export function ValidationController<T extends object>(dtoClass: new () => T, type: ValidationType) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = async function (req: Request, res: Response, next: NextFunction): Promise<any> {
      const dtoObject = plainToInstance(dtoClass, req[type]);
      const errors: ValidationError[] = await validate(dtoObject);
      const errArray: string[] = [];
      errors.forEach((e: ValidationError) => errArray.push(...Object.values(e?.constraints || {})))
      if (errArray?.length) return res.status(422).json({ errors: errArray });
      req[type] = dtoObject;
      return originalMethod.call(this, req, res, next);
    };
    return descriptor;
  };
}