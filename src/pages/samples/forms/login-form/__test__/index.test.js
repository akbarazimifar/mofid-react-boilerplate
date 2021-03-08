import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import LoginForm from '@pages/samples/forms/login-form/index';

const setup = () => {
  const utils = render(<LoginForm />);
  const usernameInput = screen.getByRole('textbox', { name: /username/i });
  const passwordInput = screen.getByLabelText('گذرواژه');
  const submitButton = screen.getByRole('button', { name: /submit-button/i });
  return {
    usernameInput,
    passwordInput,
    submitButton,
    ...utils,
  };
};

describe('Page: samples/forms/login-form/index', () => {
  it('Should inputs and button exist', () => {
    const { usernameInput, passwordInput, submitButton } = setup();
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('Should behave correctly on typing and submitting', async () => {
    const { usernameInput, passwordInput, submitButton } = setup();

    const loadingText = 'درحال ورود...';
    const successText = 'با موفقیت وارد شدید';
    const usernameValue = 'myusername';
    const passwordValue = 'mypassword';

    // type in the inputs
    userEvent.type(usernameInput, usernameValue);
    userEvent.type(passwordInput, passwordValue);

    // check expected values
    expect(usernameInput.value).toBe(usernameValue);
    expect(passwordInput.value).toBe(passwordValue);

    userEvent.click(submitButton);

    // button should be disabled after clicking on it
    await waitFor(() => expect(submitButton).toBeDisabled());

    // loading message should be in the docuemnt
    const loadingMessage = await screen.findByText(loadingText);
    expect(loadingMessage).toBeInTheDocument();

    // after 2seconds, success message should be in the docuemnt
    const successMessage = await screen.findByText(
      successText,
      {},
      // 2seconds is the delay for showing the success message
      { timeout: 2000 }
    );
    expect(successMessage).toBeInTheDocument();
  });
});
