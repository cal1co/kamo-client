import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import Home from '../src/pages/Home';


afterEach(() => {
    cleanup(); 
});

test('that landing page component renders', () => {
    render(<Home/>);
    const homeScreen = screen.getByTestId('landing-page');
    expect(homeScreen).toBeInTheDocument();
    // expect(homeScreen).toMatchSnapshot()
});