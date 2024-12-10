import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react-native';
import HomePage from '../src/screens/HomePage'; 
import { NavigationContainer } from '@react-navigation/native';


global.fetch = jest.fn();

describe('<HomePage />', () => {

    let navigateMock: jest.Mock;

    beforeEach(() => {
      navigateMock = jest.fn();
    });
  
  test('renders correctly', () => {
    render(
      <NavigationContainer>
        <HomePage navigation={{ navigate: navigateMock }} />
      </NavigationContainer>
    );

    expect(screen.getByText('Hi')).toBeTruthy();

    expect(screen.getByText('Add Pet')).toBeTruthy();
  });

  test('navigates to UserProfile when the profile picture is pressed', () => {
    render(
      <NavigationContainer>
        <HomePage navigation={{ navigate: navigateMock }}/>
      </NavigationContainer>
    );

    const profileImage = screen.getByTestId('profile-image');
    fireEvent.press(profileImage);
    
    expect(navigateMock).toHaveBeenCalledWith('UserProfile');
  });

  test('navigates to AddPet when Add Pet button is pressed', () => {
    render(
      <NavigationContainer>
        <HomePage navigation={{ navigate: navigateMock }} />
      </NavigationContainer>
    );

    const addPetButton = screen.getByText('Add Pet');
    fireEvent.press(addPetButton);
    
    expect(navigateMock).toHaveBeenCalledWith('AddPet');
  });

  test('handles fetch errors gracefully', async () => {

    fetch.mockRejectedValueOnce(new Error('Network Error'));

    render(
      <NavigationContainer>
        <HomePage navigation={{ navigate: navigateMock }} />
      </NavigationContainer>
    );
    await waitFor(() => screen.queryByText('Buddy')); 
    expect(screen.queryByText('Buddy')).toBeNull();
  });

});