import React from 'react';
import LoadingScreen from "../src/screens/LoadingScreen";
import {render } from '@testing-library/react-native';

test('should test an image exists or not',()=>{
const{getByTestId}= render(
<LoadingScreen/>
);
const image =getByTestId("image");
expect(image).toBeTruthy();
})