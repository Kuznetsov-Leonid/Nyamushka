import { render, screen } from '@testing-library/react';
import Main from './Main';


describe('Main components', () => {
    //Простой рендер компонентов
    it('Main render', () => {
        render(<Main />);
        expect(screen.queryByRole('Main')).toBeNull();
    });
});

describe('Mainw snapshot', () => {
    it('Main card snapshot', () => {
        const MainSnap = render(<Main />);
        expect(MainSnap).toMatchSnapshot();
    });
});
