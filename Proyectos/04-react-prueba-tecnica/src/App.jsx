import { useEffect, useState } from 'react'
import './App.css'

const catEndpointFact = 'https://catfact.ninja/fact'
// const catEndpointImage = `https://cataas.com/cat/says/${firstworld}?size=50&color=red&json=true`
const catPrefixImage = 'https://cataas.com'

function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Para obtener el fact de los gatos
  useEffect(() => {
    fetch(catEndpointFact)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact.splice())
      })
  }, [])

  // para obtener la imagen cada vez que haya un nuevo fact
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${catPrefixImage}${imageUrl}`} alt='Image of cat from a cats facts' />}
    </main>
  )
}

export default App
