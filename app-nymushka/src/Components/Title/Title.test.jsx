import { render, screen } from '@testing-library/react';
import Title from './Title';

test('renders title component', () => {
    render(<Title />);
    const titleElement = screen.getByText(/покормил кота/i);
    expect(titleElement).toBeInTheDocument();
});
