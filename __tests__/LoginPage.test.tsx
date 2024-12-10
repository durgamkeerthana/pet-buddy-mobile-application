import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import LoginPage from '../src/screens/LoginPage';

describe('Login Page tests', () => {
  let navigateMock: jest.Mock;

  beforeEach(() => {
    navigateMock = jest.fn();
  });
    test('should render the login page attributes', () => {
    const { getByTestId, getByText, getByRole } = render(
      <LoginPage navigation={{ navigate: navigateMock }} />
    );
    const image = getByTestId('pet-paw-image');
    expect(image).toBeTruthy();

    const userNameInput = getByTestId('username-field');
    expect(userNameInput).toBeTruthy();

    const passwordInput = getByTestId('password-field');
    expect(passwordInput).toBeTruthy();

    const registerText = getByText(/Don't have an account\? Register/i);
    expect(registerText).toBeTruthy();

    const loginButton = getByRole('button', { name: /Login/i });
    expect(loginButton).toBeTruthy();
  });
  test('should navigate to register page by clicking on register text', () => {
    const { getByText } = render(
      <LoginPage navigation={{ navigate: navigateMock }} />
    );
    const registerText = getByText(/Don't have an account\? Register/i);
    fireEvent.press(registerText);
    expect(navigateMock).toHaveBeenCalledWith('Register');
  });
});
