import MockExpressRequest from 'mock-express-request';

const generateRequest = (textValue: any): MockExpressRequest =>
  new MockExpressRequest({
    body: {
      textValue,
    },
  });

export default generateRequest;
