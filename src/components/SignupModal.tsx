import React, { useState } from 'react';
import '../style/SignupModal.css';

function SignupModal() {

    const [email, setEmail] = useState(String)
    const [emailInputAttempted, setEmailInputAttempted] = useState(false)
    const [emailIsReal, setEmailIsReal] = useState(Boolean)
    const [password, setPassword] = useState(String)
    const [passwordConfirm, setPasswordConfirm] = useState(String)
    const [passwordConfirmAttempted, setPasswordConfirmAttemped] = useState(false)

    const handleEmailInput = (event: React.FormEvent<HTMLInputElement>): void => {
        setEmail(event.currentTarget.value);
        setEmailInputAttempted(true);
        verifyEmailIsValidEmail(event.currentTarget);
    };
    const verifyEmailIsValidEmail = (emailFieldTarget: EventTarget & HTMLInputElement): void => {
        const emailMatch:RegExpMatchArray | null = emailFieldTarget.value.toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        if (emailMatch != null) {
            setEmailIsReal(true)
            emailFieldTarget.parentElement?.classList.remove("input-error")
        } else {
            setEmailIsReal(false)
            emailFieldTarget.parentElement?.classList.add("input-error")
        }
    };
    const handlePasswordInput = (event: React.FormEvent<HTMLInputElement>): void => {
        setPassword(event.currentTarget.value);
    };
    const verifyPasswordInput = (event: React.FormEvent<HTMLInputElement>): void => {
        setPasswordConfirm(event.currentTarget.value);
        if (event.currentTarget.value == password) {
            event.currentTarget.parentElement?.classList.remove("input-error")
        } else {
            event.currentTarget.parentElement?.classList.add("input-error")
        }
        if (!passwordConfirmAttempted) {
            setPasswordConfirmAttemped(true);
        };
    };

    return (
        <div className="sign-up-modal" data-testid="signup-modal">
            <div className="signup">

                    <div className={emailInputAttempted && emailIsReal ? "signup-form-field successful-input": "signup-form-field"} data-testid="signup-email-wrapper" >
                        <input onChange={handleEmailInput} type="text" id="email-signup" data-testid="email-input-field"/>
                        <label htmlFor="email" className={email ? "focused-input-field" : ""}>Email address</label>
                    </div>
                    <div className={passwordConfirmAttempted && password == passwordConfirm ? "signup-form-field successful-input": "signup-form-field"} data-testid="signup-password-wrapper">
                        <input onChange={handlePasswordInput} type={false ? "text" : "password"} id="password-signup" data-testid="password-input-field"/>
                        <label htmlFor="password-signup" className={password ? "focused-input-field" : ""}>Password</label>
                    </div>
                    <div className={passwordConfirmAttempted && password == passwordConfirm ? "signup-form-field successful-input": "signup-form-field"} data-testid="signup-confirm-password-wrapper">
                        <input onChange={verifyPasswordInput} type="password" id="verify-password-signup" data-testid="confirm-password-input-field"/>
                        <label htmlFor="verify-password-signup" className={passwordConfirm ? "focused-input-field" : ""}>Confirm Password</label>
                    </div>
                    <button className="create-account-confirmation">Create account</button>
            </div>
        </div>
    )
}

export default SignupModal