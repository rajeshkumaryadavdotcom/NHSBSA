import { Request, Response } from 'express';
import RequestModel from './models/RequestModel';

export class TextValidationController {
  validate = async (req: Request, res: Response): Promise<void> => {
    try {
      const request = new RequestModel(req);
      const { isValid, validationMessage } = request.validate();

      if (!isValid) {
        res.status(400).json({ validationMessage });
        return;
      }

      res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.error(error);
      res.status(500).json(error).end();
    }
  };
}

export default TextValidationController;
