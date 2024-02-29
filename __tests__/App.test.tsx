
import React from 'react';
import {it} from '@jest/globals';
import { render } from '@testing-library/react-native';
import App from '../App';

it('renders correctly', () => {
  const {debug} = render(<App />);

  debug();
});

// Note: import explicitly to use the types shipped with jest.
// import {it} from '@jest/globals';

// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';

// it('renders correctly', () => {
//   renderer.create(<App />);
// });
