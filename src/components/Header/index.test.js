import { BrowserRouter as Router } from 'react-router-dom';
import Header from './index.js';
import { render, cleanup } from '@testing-library/react';

import renderer from 'react-test-renderer';

describe('Header', () => {
    afterEach(cleanup)
    describe('Renders Successfully', () => {
        test('Title Renders', () => {
            const { getByTestId } = render(
                <Router>
                    <Header title='Sample Title' />
                </Router>)
            expect(getByTestId('title')).toHaveTextContent('Sample Title')
        })

        test('Contains Searchbar', () => {
            const { getByTestId } = render(
                <Router>
                    <Header title='Sample Title' searchbar />
                </Router>)
            expect(getByTestId('title')).toContainElement(getByTestId('searchbar'))
        })

        test('Title Does not show on Searchbar', () => {
            const { getByTestId } = render(
                <Router>
                    <Header title='Sample Title' searchbar />
                </Router>)
            expect(getByTestId('title')).not.toHaveTextContent('Sample Title')
        })
    })

    describe('Snapshot Testing', () => {
        test('Test With Title', () => {
            const tree = renderer.create(<Router><Header title='Sample Title' /></Router>).toJSON()
            expect(tree).toMatchSnapshot()
        })

        test('Test With Searchbar', () => {
            const tree = renderer.create(<Router><Header searchbar /></Router>).toJSON()
            expect(tree).toMatchSnapshot()
        })

        test('Test With Searchbar and title', () => {
            const tree = renderer.create(<Router><Header searchbar title='Something' /></Router>).toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})