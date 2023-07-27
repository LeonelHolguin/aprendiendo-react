import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  console.log(imageUrl)

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get New Fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt='Image of cat from a cats facts' />}
    </main>
  )
}

export default App
