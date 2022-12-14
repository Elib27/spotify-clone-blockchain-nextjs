import styled from 'styled-components'
import Link from 'next/link'
import PlayLogo from '../../public/tracks_logos/play_logo_small.svg'

const PlayButton = styled.button`
  height: 48px;
  width: 48px;
  background-color: #1ed760;
  border-radius: 50%;
  color: #000;
  display: flex;
  color: #000;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0 8px 8px rgb(0 0 0 / 30%);
  &:hover {
    transform: scale(1.04);
    background-color: #1fdf64;
  }
`
const PlayButtonAnimationContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  pointer-events: none;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
`
const CardContainer = styled.div`
  width: 100%;
  padding: 20px;
  grid-column: span 2;
  position: relative;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 20px;
  ${({isEpisodes}) => isEpisodes ? `
    background: linear-gradient(.316turn,#00644e 50.57%,#27856a);
  ` : `
    background: linear-gradient(149.46deg,#450af5,#8e8ee5 99.16%);
  `}
  &:hover {
    background-color: #262626;
    ${PlayButtonAnimationContainer} {
      pointer-events: auto;
      opacity: 1;
      transform: translateY(0);
    }
  }
`
const TracksSummary = styled.div`
  font-family: 'CircularSp', 'Roboto', sans-serif;
  max-height: 130px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  margin-bottom: 12px;
  line-height: 1.6;
`
const SummaryArtist = styled.span`
  font-size: 1rem;
  color: #fff;
`
const SummaryTitle = styled(SummaryArtist)`
  opacity: 0.7;
  &::before {
    content: " ";
  }
`
const Separator = styled(SummaryTitle)`
  &::before, &::after {
    content: " ";
  }
`
const CardTitle = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  width: 100%;
  white-space: nowrap;
  padding-bottom: 4px;
  line-height: 1.6;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
`
const CardSubTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  color: #fff;
  line-height: 1.6;
`

export default function PlaylistBigCard({tracks, tracksNumber, isEpisodes}) {

  const Subtitle = `${tracksNumber} ${isEpisodes ? '??pisode' : 'titre'}${tracksNumber > 1 ? 's' : ''} ${isEpisodes ? '' : tracksNumber > 1 ? 'lik??s' : 'lik??'}`

  return (
    <Link href={isEpisodes ? "/collection/episodes" : "/collection/tracks"}>
      <CardContainer isEpisodes={isEpisodes}>
        <TracksSummary>
          {tracks.map((track, index) => (
            <span key={index}>
              <SummaryArtist>{track.artist}</SummaryArtist>
              <SummaryTitle>{track.title}</SummaryTitle>
              <Separator>???</Separator>
            </span>
          ))}
        </TracksSummary>
        <div>
          <CardTitle>{isEpisodes ? 'Vos ??pisodes' : 'Titres lik??s'}</CardTitle>
          <CardSubTitle>
            {Subtitle}
          </CardSubTitle>
        </div>
        <PlayButtonAnimationContainer>
          <PlayButton>
            <PlayLogo height="24" width="24" />
          </PlayButton>
        </PlayButtonAnimationContainer>
      </CardContainer>
    </Link>
  )
}
