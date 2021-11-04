import { Request } from 'express';
import Joi from 'joi';

const schema = Joi.object({
  textValue: Joi.number().integer().min(1).max(9999999999).required(),
});
export default class RequestModel {
  constructor(private request: Request) {}

  validate = (): { isValid: boolean; validationMessage: string } => {
    const { error } = schema.validate(this.request.body);

    return error
      ? { isValid: false, validationMessage: error.message }
      : { isValid: true, validationMessage: '' };
  };
}
