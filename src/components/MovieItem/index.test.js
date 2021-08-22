import { BrowserRouter as Router } from 'react-router-dom';
import MovieItem from './index.js';
import { render, cleanup } from '@testing-library/react';

import renderer from 'react-test-renderer';

const sample_object = {
    id: 1212,
    poster_path: 'null_image.jpg',
    original_title: 'Test Title',
    overview: 'Sample Description',
    vote_average: 7.5
}

describe('Movie Item', () => {
    describe('Renders Successfully', () => {
        afterEach(cleanup)

        test('Data Renders', () => {
            const { getByTestId } = render(
                <Router>
                    <MovieItem item={sample_object} />
                </Router>)
            expect(getByTestId('title')).toHaveTextContent(sample_object.original_title)
            expect(getByTestId('rating')).toHaveTextContent(sample_object.vote_average)
            expect(getByTestId('desc')).toHaveTextContent(sample_object.overview)
        })

        test('Empty Rating', () => {
            sample_object.vote_average = null
            const { getByTestId } = render(
                <Router>
                    <MovieItem item={sample_object} />
                </Router>)
            expect(getByTestId('rating')).toHaveTextContent('0')
        })
    })
})