import { useEffect } from 'react'

import { useTypedDispatch, useTypedSelector } from './redux/store'
import { getAllQuotes } from './redux/actions/quotes'
import { Quote } from './interfaces'

function App() {
  const dispatch = useTypedDispatch()
  const { quotes } = useTypedSelector((state) => state.quotesReducer)

  useEffect(() => {
    dispatch(getAllQuotes())
  }, [dispatch])

  return (
    <div className='App'>
      {quotes.data.map((quote: Quote) => (
        <div key={quote.id}>
          <h5>{quote.author}</h5>
          <p>{quote.quote}</p>
        </div>
      ))}
    </div>
  )
}

export default App
