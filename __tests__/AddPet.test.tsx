import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import AddPetScreen from '../src/screens/AddPetScreen';
import { launchImageLibrary } from 'react-native-image-picker';

jest.mock('react-native-image-picker', () => ({
  launchImageLibrary: jest.fn(),
}));

describe('AddPetScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render the AddPetScreen correctly', () => {
    const { getByText, getByPlaceholderText } = render(<AddPetScreen />);
    
    
    expect(getByText('Add your pet details here!')).toBeTruthy();
    
    
    expect(getByPlaceholderText('Pet Name')).toBeTruthy();
    expect(getByPlaceholderText('Age')).toBeTruthy();
    expect(getByPlaceholderText('Breed')).toBeTruthy();
    expect(getByPlaceholderText('Height')).toBeTruthy();
    expect(getByPlaceholderText('Weight')).toBeTruthy();
    expect(getByPlaceholderText('Color')).toBeTruthy();
    expect(getByPlaceholderText('Gender')).toBeTruthy();
    expect(getByPlaceholderText('Remarks')).toBeTruthy();
  });

  test('should update name input value when text is typed', () => {
    const { getByPlaceholderText } = render(<AddPetScreen />);
    const nameInput = getByPlaceholderText('Pet Name');
    
    fireEvent.changeText(nameInput, 'Buddy');
    expect(nameInput.props.value).toBe('Buddy');
  });
  jest.mock('react-native-image-picker', () => ({
    launchImageLibrary: jest.fn(),
  }));

  test('should trigger image picker when image is pressed', async () => {
    const { getByTestId } = render(<AddPetScreen />);
    
    
    const imageResponse = {
      didCancel: false,
      assets: [{ base64: 'some-base64-string' }],
    };
    launchImageLibrary.mockImplementationOnce((options:any, callback:any) => {
      callback(imageResponse);
    });
    const imageTouchable = getByTestId('image-touchable'); 
    fireEvent.press(imageTouchable);

    await waitFor(() => {
      
      expect(launchImageLibrary).toHaveBeenCalled();
      expect(imageResponse.assets[0].base64).toBeDefined();
    });
  });

});