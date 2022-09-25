import styled from 'styled-components'
import { useState, useEffect, useRef } from 'react'
import CreationBar from './CreationBar'
import PlaylistBar from './PlaylistBar'
import DownloadButton from './DownloadButton'

const Wrapper = styled.nav`
  --side-bar-width: 241px;
  grid-column: 1;
  grid-row: 2;
  width: var(--side-bar-width);
  border-radius: 8px;
  background-color: #121212;
  position: relative;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px 8px 0 8px;
  height: 100%;
  width: 100%;
`
const Separator = styled.div`
  height: 1px;
  width: calc(100% - 32px); 
  background-color: #282828;
  margin: 8px 16px 0 16px;
`
const InstallButtonContainer = styled.div`
  display: flex;
`
const Resizer = styled.div`
  height: 100%;
  width: 9px;
  background: linear-gradient(hsla(0,0%,100%,.3),hsla(0,0%,100%,.3)) no-repeat 50%/1px 100%;
  opacity: 0;
  position: absolute;
  top: 0;
  right: -4.5px;
  cursor: col-resize !important;
  z-index: 1;
  ${({isResizeBarVisible}) => isResizeBarVisible && `
    opacity: 1;
  `}
  &:hover {
    opacity: 1;
  }
  &:active {
    cursor: col-resize;
  }
`

export default function Sidebar() {
  const sideBar = useRef(null)
  const [isResizeBarVisible, setIsResizeBarVisible] = useState(false)
  const [SideBarWidth, setSideBarWidth] = useState(242);

  function resizeSideBar(e) {
    const boundingRect = sideBar.current.getBoundingClientRect();
    let newSize = e.clientX - boundingRect.left;
    if (newSize < 129) {
      newSize = 129;
    }
    else if (newSize > 393) {
      newSize = 393;
    }
    setSideBarWidth(newSize);
  }

  function handleDragStart(e) {
    setIsResizeBarVisible(true)
    const img = new Image();
    e.dataTransfer.setDragImage(img, 0, 0);
  }

  function handleDragEnd(e) {
    setIsResizeBarVisible(false)
    resizeSideBar(e)
  }

  useEffect(() => {
    sideBar.current.style.setProperty('--side-bar-width', `${SideBarWidth}px`);
  }, [SideBarWidth])

  return (
    <Wrapper ref={sideBar}>
      <Container>
        <div>
          <CreationBar />
          <Separator />
          <PlaylistBar />
        </div>
        <InstallButtonContainer>
          <DownloadButton />
        </InstallButtonContainer>
      </Container>
      <Resizer
        draggable
        onDragStart={handleDragStart}
        onDrag={resizeSideBar}
        onDragEnd={handleDragEnd}
        isResizeBarVisible={isResizeBarVisible}
      />
    </Wrapper>
  )
}
