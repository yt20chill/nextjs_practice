import LoginPage from '@/login/page';
import { render, screen } from '@testing-library/react';
import { expect, it } from 'vitest';

it('Login Page', async () => {
  render(<LoginPage />);
  expect(await screen.findByText(/login/i)).toBeDefined();
});
