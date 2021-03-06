import { render, screen } from '@testing-library/react';

import LoginForm from '@pages/samples/forms/login-form/index';

describe('<LoginForm />', () => {
  it('1. input elements existing', () => {
    render(<LoginForm />);

    expect(
      screen.getByRole('textbox', { name: /username/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('textbox', { name: /password/i })
    ).toBeInTheDocument();
  });
});
