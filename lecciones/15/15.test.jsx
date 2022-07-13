import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from './15';
// import AppSolution from './15.solution';

expect.extend(toHaveNoViolations);

describe('<App /> tests', () => {
  it.skip('Should pass axe initial tests', async () => {
    const { container } = render(<App />);
    // const { container } = render(<AppSolution />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it.skip('Should be navigable through tab keys', () => {
    render(<App />);
    // render(<AppSolution />);
    expect(document.body);
    const focusableElements = screen.getAllByTestId('focusable');
    focusableElements.forEach((element) => {
      userEvent.tab();
      expect(element).toHaveFocus();
    });
  });

  it.skip('Should be selectable using enter or space', async () => {
    render(<App />);
    // render(<AppSolution />);
    userEvent.tab();
    userEvent.keyboard('[Space][Enter]');
    expect(await screen.findByTestId('modal')).toBeVisible();
  });

  it.skip('Should focus the modal when rendering it', async () => {
    render(<App />);
    // render(<AppSolution />);
    userEvent.tab();
    userEvent.keyboard('[Space][Enter]');
    expect(await screen.findByTestId('modal')).toHaveFocus();
  });

  it.skip('Should find the cross icon button by label', async () => {
    render(<App />);
    // render(<AppSolution />);

    userEvent.tab();
    userEvent.keyboard('[Enter]');
    expect(
      await screen.findByRole('button', {
        name: /cerrar modal/i,
      })
    );
  });
});
