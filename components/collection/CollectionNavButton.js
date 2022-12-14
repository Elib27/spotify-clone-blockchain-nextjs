import styled from 'styled-components'
import Link from 'next/link'

const NavButton = styled.a`
  font-size: 0.875rem;
  font-weight: 700;
  color: #fff;
  border-radius: 4px;
  padding: 11.5px 16px;
  line-height: 1.6;
  cursor: pointer;
  ${({ isSelected }) => isSelected && `
    background-color: #333;
  `}
`

export default function CollectionNavButton({ buttonName, collectionPageName, setCollectionPageName, pageName}) {

  function handleClickChangeCollectionPage() {
    setCollectionPageName(pageName)
  }

  return (
    <Link href={pageName}>
      <NavButton
        onClick={handleClickChangeCollectionPage}
        isSelected={pageName === collectionPageName}
      >
        {buttonName}
      </NavButton>
    </Link>
  )
}
