import MockExpressRequest from 'mock-express-request';

interface IScenario {
  description: string;
  setup: {
    request: MockExpressRequest;
    apiResponse: { validationMessage?: string; message?: string };
    responseStatusCode: number;
  };
}

export default IScenario;
