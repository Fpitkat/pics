import { useState } from 'react'

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    onSubmit(term)
  }

  const handleChange = (event) => {
    setTerm(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          value={term}
          onChange={handleChange}
          placeholder='Search unSplash!'
        />
        {/* I ADDED THIS FEATURE */}
        {term.length < 2 && <p>Term must be contain more than 2 characters.</p>}
      </form>
    </div>
  )
}

export default SearchBar
