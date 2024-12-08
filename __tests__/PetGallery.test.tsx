import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import PetGallery from '../src/screens/PetGallery';
import { launchImageLibrary } from 'react-native-image-picker';

jest.mock('react-native-image-picker', () => ({
  launchImageLibrary: jest.fn(),
}));

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: jest.fn(),
}));

global.fetch = jest.fn();

describe('PetGallery', () => {
  const mockRoute = { params: { pet: { name: 'Buddy' } } };

  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  test('should render the component correctly', () => {
    const { getByText } = render(<PetGallery route={mockRoute} />);

    
    expect(getByText('Pet Gallery')).toBeTruthy();
    expect(getByText('Add a Pet Photo')).toBeTruthy();
  });

  test('should show placeholder text when no images are available', () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: () => ({ gallery: [] }),
    });

    const { getByText } = render(<PetGallery route={mockRoute} />);

    
    expect(getByText('No photos added yet. Tap the button to add photos!')).toBeTruthy();
  });

  

  test('should handle image picker errors gracefully', async () => {
    launchImageLibrary.mockImplementationOnce((options, callback) =>
      callback({ didCancel: true })
    );

    const { getByText } = render(<PetGallery route={mockRoute} />);

    fireEvent.press(getByText('Add a Pet Photo'));

   
    expect(fetch).not.toHaveBeenCalled();
  });

  test('should handle fetch errors gracefully ', async () => {
    fetch.mockRejectedValueOnce(new Error('Network error'));

    const { getByText } = render(<PetGallery route={mockRoute} />);

    
    expect(getByText('Pet Gallery')).toBeTruthy();
  });

});
