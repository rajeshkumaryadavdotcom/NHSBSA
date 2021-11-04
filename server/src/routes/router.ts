import express from 'express';
import TextValidationController from '../controller/TextValidationController';

export default express
  .Router()
  .post('/validate', new TextValidationController().validate);
