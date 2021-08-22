import React from 'react'
import Provider from 'react-redux'
import store from './store.js'

import { render, cleanup } from '@testing-library/react'

afterEach(cleanup)

const renderWithRedux = (store, component) => {
    return (
        render(
            <Provider store={store}>
                {component}
            </Provider>
        )
    )
}

test('Redux Test', () => {
    expect(true).toBeTruthy()
})