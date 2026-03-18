import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import RegisterPage from '../src/screens/RegisterPage';

describe('Register Page tests', () => {
  let navigateMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();
  });

  test('should render the Register Page elements', () => {
    const { getByTestId, getByText, getByRole } = render(
      <RegisterPage navigation={{ navigate: navigateMock }} />
    );
    const image = getByTestId('pet-image');
    expect(image).toBeTruthy();

    const userNameInput = getByTestId('username-field');
    expect(userNameInput).toBeTruthy();

    const passwordInput = getByTestId('password-field');
    expect(passwordInput).toBeTruthy();
    const confirmPasswordInput = getByTestId('confirm-password-field');
    expect(confirmPasswordInput).toBeTruthy();

    const loginText = getByText(/Already have an account\? Login/i);
    expect(loginText).toBeTruthy();

    const loginButton = getByRole('button', { name: /Register/i });
    expect(loginButton).toBeTruthy();
  });
  test('should navigate to login page by clicking on login text', () => {
    const { getByText } = render(
      <RegisterPage navigation={{ navigate: navigateMock }} />
    );
    const loginText = getByText(/Already have an account\? Login/i);
    fireEvent.press(loginText);
    expect(navigateMock).toHaveBeenCalledWith('Login');
  });
});
