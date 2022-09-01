import { useState, useEffect, useRef} from "react"
import styled from "styled-components"

const MusicProgressionBarBackground = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 2px;
  background-color: #5e5e5e;
  position: absolute;
  left: 0;
`
const MusicProgressionBarFill = styled(MusicProgressionBarBackground)`
  background-color: #fff;
  width: 100%;
  transform: translateX(calc(var(--progression-bar-fill) - 100%));
  ${({active}) => active && `
    background-color: #1db954;
  `}
`
const MusicBarCircle = styled.div`
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  position: absolute;
  top: 50%;
  left: var(--progression-bar-fill);
  margin-left: -6px;
  transform: translateY(-50%);
  z-index: 100;
  display: none;
  user-select: none;
  ${({active}) => active && `
    display: block;
  `}
`
const ProgressionBar = styled.div`
  --progression-bar-fill: 65%;
  height: 12px;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  &:hover ${MusicProgressionBarFill} {
    background-color: #1db954;
  }
  &:hover ${MusicBarCircle} {
    display: block;
  }
`
const MusicProgressionBarWrapper = styled.div`
  height: 4px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`

export default function MusicProgressionBar() {
  const [barCircleActive, setBarCircleActive] = useState(false)
  const barContainer = useRef(null)

  function updateProgressionBar(e) {
    const barWidth = barContainer.current.offsetWidth;
    const barOffset = barContainer.current.getBoundingClientRect().left;
    let newProgressionPercentage = (e.clientX - barOffset) / barWidth * 100;
    if (newProgressionPercentage < 0) {
      newProgressionPercentage = 0;
    }
    else if (newProgressionPercentage > 100) {
      newProgressionPercentage = 100;
    }
    barContainer.current.style.setProperty("--progression-bar-fill", newProgressionPercentage + '%')
  }

  function handleMouseMove(e) {
    updateProgressionBar(e)
  }

  function handleMouseDown(e) {
    setBarCircleActive(true)
    updateProgressionBar(e)
    document.addEventListener("mousemove", handleMouseMove)
  }

  function handleMouseUp(e) {
    document.removeEventListener("mousemove", handleMouseMove)
    setBarCircleActive(false)
  }

  useEffect(() => {
    barContainer.current.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      barContainer.current.removeEventListener('mousedown', handleMouseDown)
    }
  },[])

  return (
    <ProgressionBar ref={barContainer}>
      <MusicBarCircle active={barCircleActive} />
      <MusicProgressionBarWrapper>
        <MusicProgressionBarBackground />
        <MusicProgressionBarFill active={barCircleActive}/>
      </MusicProgressionBarWrapper>
    </ProgressionBar>
  )
}