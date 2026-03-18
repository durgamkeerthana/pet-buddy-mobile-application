import React from 'react';
import { render} from '@testing-library/react-native';

import Training from '../src/screens/Training';

describe('Training Component', () => {
  it('renders the training header', () => {
    const { getByText } = render(<Training />);
    const header = getByText('Pet Training Articles');
    expect(header).toBeTruthy();
  });

});