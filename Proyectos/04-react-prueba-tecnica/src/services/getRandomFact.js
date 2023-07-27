const catEndpointFact = 'https://catfact.ninja/fact'

export async function getRandomFact () {
  const res = await fetch(catEndpointFact)
  const data = await res.json()
  const { fact } = data
  return fact
}
