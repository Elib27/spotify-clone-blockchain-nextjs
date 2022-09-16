import styled from 'styled-components'
import { useState, useLayoutEffect} from 'react'
import PageContainer from '../components/shared/PageContainer'
import HomeShorcuts from '../components/homePage/HomeShorcuts'
import HomeSection from '../components/homePage/HomeSection'
import HomeCard from '../components/homePage/HomeCard'

const Title = styled.h2`  
  color: #fff;
  font-size: 2em;
  line-height: 1em;
  font-weight: 700;
  margin-bottom: 21.5px;
`
const MoreContent = styled.div`
  height: 150vh;
`

export default function Home() {

  const [welcomeMessage, setWelcomeMessage] = useState('Bonjour')

  useLayoutEffect(() => {
    const timeInHours = new Date().getHours()
    if (timeInHours >= 4 && timeInHours <= 18) {
      setWelcomeMessage('Bonjour')
    }
    else {
      setWelcomeMessage('Bonsoir')
    }
  }, [])

  return (
    <PageContainer>
      <Title>{welcomeMessage}</Title>
      <HomeShorcuts />
      <HomeSection title="Vos émissions">
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
      </HomeSection>
      <HomeSection title="Écoutés récemment">
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
      </HomeSection>
      <HomeSection title="À ne pas manquer aujourd'hui">
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
      </HomeSection>
      <HomeSection title="Épisodes pour vous">
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
        <HomeCard
          title="Un Bon Moment"
          artist="Kyan Khojandi & Navo"
          cover_url="https://i.scdn.co/image/ab67656300005f1f4e312595ecca6e991a65faa4"
        />
      </HomeSection>
    </PageContainer>
  )
}