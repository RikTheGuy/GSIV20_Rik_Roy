import Loader from './index.js';
import { render, cleanup } from '@testing-library/react';

import renderer from 'react-test-renderer';

describe('Loader', () => {
    afterEach(cleanup)

    test('Renders Successfully', () => {
        const { getByTestId } = render(<Loader />)
        expect(getByTestId('loader')).toContainElement(getByTestId('spinner'))
        expect(getByTestId('loader')).toContainElement(getByTestId('text'))
        expect(getByTestId('text')).toHaveTextContent('Loading')
    })

    test('Snapshot Testing', () => {
        const tree = renderer.create(<Loader />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})