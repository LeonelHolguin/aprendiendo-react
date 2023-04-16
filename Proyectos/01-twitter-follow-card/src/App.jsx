import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'kikobeats',
    name: 'Kiko Beats',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: true
  },
  {
    userName: 'TenZOfficial',
    name: 'TenZ',
    isFollowing: false
  },
  {
    userName: 'G_Programming',
    name: 'Gentleman Programming',
    isFollowing: true
  }
]

function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}

export default App
