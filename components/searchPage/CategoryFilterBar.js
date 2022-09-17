import styled from "styled-components"
import CategoryFilterButton from "./CategoryFilterButton"

const BarContainer = styled.div`
  height: 48px;
  width: 100%;
  background-color: #121212;
  padding: 7px 32px 0;;
  position: sticky;
  top: 64px;
  z-index: 10;
`
const FiltersContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  overflow: hidden;
`

export default function CategoryFilterBar() {
  return (
    <BarContainer>
      <FiltersContainer>
        <CategoryFilterButton
          title="Tout"
          isSelected
        />
        <CategoryFilterButton
          title="Titres"
        />
        <CategoryFilterButton
          title="Artistes"
        />
        <CategoryFilterButton
          title="Playlists"
        />
        <CategoryFilterButton
          title="Albums"
        />
        <CategoryFilterButton
          title="Podcasts et émissions"
        />
        <CategoryFilterButton
          title="Profils"
        />
      </FiltersContainer>
    </BarContainer>
  )
}