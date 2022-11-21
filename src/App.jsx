import SearchBar from './components/SearchBar'

function App() {
  const handleSubmit = (term) => {
    console.log(`APP do a search with ${term}`)
  }
  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  )
}

export default App
