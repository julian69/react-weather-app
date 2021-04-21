import weatherMock from "./weather";

export default {
  get: jest.fn().mockImplementation((url) => {
    switch (url) {
      case process.env.REACT_APP_WEATHER_API:
        return Promise.resolve({ data: weatherMock });
      default:
        throw new Error(`UNMATCHED URL: ${url}`);
    }
  }),
};
