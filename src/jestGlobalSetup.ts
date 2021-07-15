import { configure } from '@testing-library/vue';
import '@testing-library/jest-dom';

jest.mock('./services/config', () => {
  return {
    getBaseApiEndpoint: jest.fn(() => ''),
  };
});

configure({
  testIdAttribute: 'data-test-id',
});
