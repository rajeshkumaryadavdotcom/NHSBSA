import IScenario from './interface/IScenario';
import generateRequest from './data/generateRequest';

const scenarios: IScenario[] = [
  {
    description: "When request does not contain the required 'textValue' field",
    setup: {
      request: generateRequest(undefined),
      apiResponse: {
        validationMessage: `"textValue" is required`,
      },
      responseStatusCode: 400,
    },
  },
  {
    description: "When the 'textValue' field is alphanumeric value",
    setup: {
      request: generateRequest('123456A'),
      apiResponse: {
        validationMessage: `"textValue" must be a number`,
      },
      responseStatusCode: 400,
    },
  },
  {
    description: "When the 'textValue' field value is less than 1",
    setup: {
      request: generateRequest(-1000),
      apiResponse: {
        validationMessage: `"textValue" must be greater than or equal to 1`,
      },
      responseStatusCode: 400,
    },
  },
  {
    description: "When the 'textValue' field value is greater than 9999999999",
    setup: {
      request: generateRequest(99999999999),
      apiResponse: {
        validationMessage: `"textValue" must be less than or equal to 9999999999`,
      },
      responseStatusCode: 400,
    },
  },
  {
    description: "When the 'textValue' field value is valid",
    setup: {
      request: generateRequest(1234567891),
      apiResponse: {
        message: 'Success',
      },
      responseStatusCode: 200,
    },
  },
];

export default scenarios;
