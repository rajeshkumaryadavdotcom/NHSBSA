import { expect } from 'chai';
import MockExpressResponse from 'mock-express-response';
import TextValidationController from '../src/controller/TextValidationController';
import scenarios from './scenario/scenarios';

describe('textValidationController.validate', () => {
  scenarios.forEach((scenario) => {
    const {
      description,
      setup: { request, apiResponse, responseStatusCode },
    } = scenario;

    describe(description, () => {
      let response: MockExpressResponse;
      before(async () => {
        response = new MockExpressResponse();
        await new TextValidationController().validate(request, response);
      });

      it('will return correct status code', async () => {
        expect(response.statusCode).to.equal(responseStatusCode);
      });

      it('will return appropriate api response', async () => {
        expect(response._getJSON()).to.deep.equal(apiResponse);
      });
    });
  });
});
