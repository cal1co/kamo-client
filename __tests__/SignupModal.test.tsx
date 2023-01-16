import React from 'react';
import { render, screen, cleanup, within, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Signup from '../src/components/SignupModal';

afterEach(() => {
    cleanup(); 
});

describe("signup input fields", () => {
    test('that signup component renders', () => {
        render(<Signup/>);
        const signupModal = screen.getByTestId('signup-modal');
        expect(signupModal).toBeInTheDocument();
        const signupButton = within(signupModal).getByText("Create account")
        expect(signupButton).toBeInTheDocument();
    });
    test('that email input field turns green when input field text follows correct email format', async () => {
        render(<Signup/>);
    
        const emailInputField:HTMLInputElement = screen.getByTestId('email-input-field');
        const emailWrapper:HTMLElement = screen.getByTestId("signup-email-wrapper")
        
        await userEvent.type(emailInputField,'email@email.com');
        expect(emailInputField.value).toBe('email@email.com')
        
        expect(emailWrapper.classList.contains("successful-input")).toBe(true)
    
        userEvent.clear(emailInputField);
        await userEvent.type(emailInputField, 'email');
        expect(emailInputField.value).toBe('email');
    
        expect(emailWrapper.classList.contains("successful-input")).toBe(false);
    
        userEvent.clear(emailInputField);
        await userEvent.type(emailInputField, 'email@email');
        expect(emailInputField.value).toBe('email@email');
    
        expect(emailWrapper.classList.contains("successful-input")).toBe(false);
    });
    test('that email input field turns red when input field text follows incorrect email format', async () => {
        render(<Signup/>);

        const emailInputField:HTMLInputElement = screen.getByTestId('email-input-field');
        const emailWrapper:HTMLElement = screen.getByTestId("signup-email-wrapper");

        await userEvent.type(emailInputField,'email@email');
        expect(emailInputField.value).toBe('email@email');
        
        expect(emailWrapper.classList.contains("input-error")).toBe(true);

        userEvent.clear(emailInputField);
        await userEvent.type(emailInputField, 'email@email.com');
        expect(emailInputField.value).toBe('email@email.com');

        expect(emailWrapper.classList.contains("input-error")).toBe(false);
        
    });
    test('that Confirm Password field turns red when input passwords do not match', async () => {
        render(<Signup/>);

        const passwordInputField:HTMLInputElement = screen.getByTestId('password-input-field')
        const confirmPasswordInputField:HTMLInputElement = screen.getByTestId('confirm-password-input-field');
        const confirmPasswordWrapper:HTMLElement = screen.getByTestId("signup-confirm-password-wrapper");

        userEvent.clear(passwordInputField);
        userEvent.clear(confirmPasswordInputField);
        await userEvent.type(confirmPasswordInputField,'chicken');
        expect(confirmPasswordInputField.value).toBe('chicken');
        
        expect(confirmPasswordWrapper.classList.contains("input-error")).toBe(true);

        userEvent.clear(passwordInputField);
        userEvent.clear(confirmPasswordInputField);
        await userEvent.type(passwordInputField,'chicken');
        await userEvent.type(confirmPasswordInputField,'chicken');

        expect(confirmPasswordWrapper.classList.contains("input-error")).toBe(false);
    });
    test('that both Password fields turns green when input passwords match', async () => {
        render(<Signup/>);

        const passwordInputField:HTMLInputElement = screen.getByTestId('password-input-field')
        const confirmPasswordInputField:HTMLInputElement = screen.getByTestId('confirm-password-input-field');
        const confirmPasswordWrapper:HTMLElement = screen.getByTestId("signup-confirm-password-wrapper");

        userEvent.clear(passwordInputField);
        userEvent.clear(confirmPasswordInputField);
        await userEvent.type(confirmPasswordInputField,'chicken');
        expect(confirmPasswordInputField.value).toBe('chicken');
        
        expect(confirmPasswordWrapper.classList.contains("successful-input")).toBe(false);

        userEvent.clear(passwordInputField);
        userEvent.clear(confirmPasswordInputField);
        await userEvent.type(passwordInputField,'chicken');
        await userEvent.type(confirmPasswordInputField,'chicken');

        expect(confirmPasswordWrapper.classList.contains("successful-input")).toBe(true);
    });
});

describe("signup oauth", () => {

});
