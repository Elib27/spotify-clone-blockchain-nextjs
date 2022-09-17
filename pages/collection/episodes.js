import styled from "styled-components"
import PlaylistHeader from "../../components/shared/PlayListHeader"
import LikedPodcast from "../../components/collection/LikedPodcast"
import PlayLogo from '../../public/tracks_logos/play_logo.svg'

const Container = styled.div`
  padding-bottom: 32px;
`
const PlayMusicSection = styled.section`
  padding: 24px 32px;
`
const PlayButton = styled.div`
  height: 56px;
  width: 56px;
  background-color: #1ed760;
  border-radius: 50%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  &:hover {
    transform: scale(1.04);
  }
`
const PodcastsContainer = styled.section`
  margin: 0 16px 0 32px;
  max-width: 967px;
`

export default function episodes() {
  return (
    <Container>
      <PlaylistHeader
        title="Vos épisodes"
        background="linear-gradient(#056753 0, #023329 100%)"
        owner="eliot"
        tracks_number={2}
        isPodcastPlaylist
      />
      <PlayMusicSection>
        <PlayButton>
          <PlayLogo />
        </PlayButton>
      </PlayMusicSection>
      <PodcastsContainer>
        <LikedPodcast
          title="avec YVICK (MISTER V) et FREDDY GLADIEUX"
          description="Yvick sort son deuxième album et c'est toujours une occasion de beaucoup rigoler. Avec son ami Freddy ils parleront de leur rapport au logiciel Instagram et à la créativité sur Internet.JEUX : Le SPORNO // Le Meilleur ÉPITAPHE // LE BLINDTEST des BACKS Hébergé par Acast. Visitez acast.com/privacy pour plus d'informations."
          owner="Un Bon Moment avec Kyan KHOJANDI et NAVO"
          cover_url="https://i.scdn.co/image/ab6765630000f68dfde612915ed31ed089865720"
          date="mars 2020"
          duration="1 h 20 min"
        />
        <LikedPodcast
          title="avec YVICK (MISTER V) et FREDDY GLADIEUX"
          description="Yvick sort son deuxième album et c'est toujours une occasion de beaucoup rigoler. Avec son ami Freddy ils parleront de leur rapport au logiciel Instagram et à la créativité sur Internet.JEUX : Le SPORNO // Le Meilleur ÉPITAPHE // LE BLINDTEST des BACKS Hébergé par Acast. Visitez acast.com/privacy pour plus d'informations."
          owner="Un Bon Moment avec Kyan KHOJANDI et NAVO"
          cover_url="https://i.scdn.co/image/ab6765630000f68dfde612915ed31ed089865720"
          date="mars 2020"
          duration="1 h 20 min"
        />
        <LikedPodcast
          title="avec YVICK (MISTER V) et FREDDY GLADIEUX"
          description="Yvick sort son deuxième album et c'est toujours une occasion de beaucoup rigoler. Avec son ami Freddy ils parleront de leur rapport au logiciel Instagram et à la créativité sur Internet.JEUX : Le SPORNO // Le Meilleur ÉPITAPHE // LE BLINDTEST des BACKS Hébergé par Acast. Visitez acast.com/privacy pour plus d'informations."
          owner="Un Bon Moment avec Kyan KHOJANDI et NAVO"
          cover_url="https://i.scdn.co/image/ab6765630000f68dfde612915ed31ed089865720"
          date="mars 2020"
          duration="1 h 20 min"
        />
      </PodcastsContainer>
    </Container>
  )
}
