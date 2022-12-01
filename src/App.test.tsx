import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from './App'
import store from './redux/store'

test('renders react app screen', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  )
  const app = screen.getByTestId('screen-app')
  expect(app).toBeInTheDocument()
})
