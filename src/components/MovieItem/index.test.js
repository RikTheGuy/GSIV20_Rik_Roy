import { BrowserRouter as Router } from 'react-router-dom';
import MovieItem from './index.js';
import { render, cleanup } from '@testing-library/react';

const sample_object = {
    id: 1212,
    poster_path: 'null_image.jpg',
    title: 'Test Title',
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
            expect(getByTestId('title')).toHaveTextContent(sample_object.title)
            expect(getByTestId('rating')).toHaveTextContent(sample_object.vote_average)
            expect(getByTestId('desc')).toHaveTextContent(sample_object.overview)
        })

        test('Empty Rating', () => {
            const { getByTestId } = render(
                <Router>
                    <MovieItem item={{ ...sample_object, vote_average: null }} />
                </Router>)
            expect(getByTestId('rating')).toHaveTextContent('0')
        })
    })
})