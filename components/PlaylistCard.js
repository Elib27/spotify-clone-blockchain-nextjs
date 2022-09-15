import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import PlayLogo from '../public/tracks_logos/play_logo_small.svg'

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
  right: 8px;
  bottom: 8px;
  pointer-events: none;
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.3s ease, transform 0.3s ease;
`
const CardContainer = styled.div`
  width: 100%;
  padding: 16px;
  background-color: #181818;
  position: relative;
  font-family: 'CircularSpTitle', 'Roboto', sans-serif;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
    background-color: #262626;
    ${PlayButtonAnimationContainer} {
      pointer-events: auto;
      opacity: 1;
      transform: translateY(0);
    }
  }
`
const CardImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: 16px;
  border-radius: 4px;
  position: relative;
  overflow: hidden;
`
const CardTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: 4px;
  line-height: 1.6;
`
const CardSubTitle = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  color: #a7a7a7;
  line-height: 1.6;
  padding-bottom: 8px;
`

export default function PlaylistCard({cover_url, title, description}) {
  return (
    <CardContainer>
      <CardImageContainer>
        <Image src={cover_url} alt="song cover" layout="fill"/>
        <PlayButtonAnimationContainer>
          <PlayButton>
            <PlayLogo height="24" width="24" />
          </PlayButton>
        </PlayButtonAnimationContainer>
      </CardImageContainer>
      <CardTitle>{title}</CardTitle>
      <CardSubTitle>{description}</CardSubTitle>
    </CardContainer>
  )
}