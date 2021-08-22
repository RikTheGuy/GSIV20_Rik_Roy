import Searchbar from './index.js';
import { render, cleanup } from '@testing-library/react';

import renderer from 'react-test-renderer';

var query = ''

describe('Searchbar', () => {

    afterEach(cleanup)

    describe('Renders Successfully', () => {
        test('Runs without crashing', () => {
            render(<Searchbar />);
        })
    })

    describe('Snapshot Testing', () => {
        test('Renders Properly', () => {
            const tree = renderer.create(<Searchbar />).toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})