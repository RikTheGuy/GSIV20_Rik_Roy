import Message from './index.js';
import { render, cleanup } from '@testing-library/react';

import renderer from 'react-test-renderer';

describe('Message', () => {
    afterEach(cleanup)

    describe('Renders Successfully', () => {
        test('Renders With Message', () => {
            const { getByTestId } = render(<Message message='Sample Message' />)
            expect(getByTestId('message')).toHaveTextContent('Sample Message')
        })

        test('Renders Without Message', () => {
            const { getByTestId } = render(<Message />)
            expect(getByTestId('message')).toHaveTextContent('')
        })

        test('Renders With Error', () => {
            const { getByTestId } = render(<Message message='Sample Message' danger />)
            expect(getByTestId('message')).toHaveTextContent('Sample Message')
            expect(getByTestId('message')).toHaveTextContent('Sample Message')
        })

    })

    describe('Snapshot Testing', () => {
        test('Normal', () => {
            const tree = renderer.create(<Message message='Sample Message' />).toJSON()
            expect(tree).toMatchSnapshot()
        })

        test('Danger', () => {
            const tree = renderer.create(<Message message='Sample Message' danger />).toJSON()
            expect(tree).toMatchSnapshot()
        })
    })
})