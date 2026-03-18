import React from 'react';
import InitialPage from '../src/screens/InitialPage';
import {fireEvent, render} from '@testing-library/react-native';

describe('Initial page tests', () => {
  let navigateMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();

    const navigationMock = {
      navigate: navigateMock,
    };

    render(<InitialPage navigation={navigationMock} />);
  });

  test('should render the attributes', () => {
    const {getByText, getByRole} = render(
      <InitialPage navigation={{navigate: navigateMock}} />,
    );
    const getStartedButton = getByRole('button', {name: /get started/i});
    expect(getStartedButton).toBeTruthy();
    const headerText = getByText(/welcome to petbuddy/i);
    expect(headerText).toBeTruthy();
    const welcomeText = getByText(
      /shall we go out and play, since you are busy with your work, i am feeling alone/i,
    );
    expect(welcomeText).toBeTruthy();
  });
  test('should navigate to login page on get started', () => {
    const {getByRole} = render(
      <InitialPage navigation={{navigate: navigateMock}} />,
    );
    const getStartedButton = getByRole('button', {name: /get started/i});
    fireEvent.press(getStartedButton);
    expect(navigateMock).toHaveBeenCalledWith('Login');
  });
});
