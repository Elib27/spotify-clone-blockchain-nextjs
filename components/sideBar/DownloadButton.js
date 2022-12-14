import styled from "styled-components"
import { useSelector } from "react-redux"
import Link from "next/link"
import Image from "next/image"

const LinkLabel = styled.p`
  font-size: 0.875rem;
  margin-left: 16px;
  width: 100%;
  text-align: left;
  line-height: 1.6;
  color: #b3b3b3;
  font-weight: 700;
  transition: color 0.3s ease-in-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({ isSelected }) => isSelected && `
    color: #fff;
  `}
`
const LogoContainer = styled.div`
  opacity: 0.7;
  height: 24px;
  flex-shrink: 0;
  transition: opacity 0.3s ease-in-out;
  ${({ isSelected }) => isSelected && `
    opacity: 1;
  `}
`
const NavLinkButton = styled.button`
  height: 40px;
  width: 100%;
  padding: 0 16px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:hover ${LinkLabel}{
    color: #fff;
  }
  &:hover ${LogoContainer}{
    opacity: 1;
  }
`

export default function DownloadButton() {

  const navigation = useSelector(state => state.navigation)

  return (
    <Link href="/download">
      <NavLinkButton>
        <LogoContainer isSelected={navigation.currentPage === "/download"}>
            <Image src="/sideBar_logos/download.svg" alt="download button" width={24} height={24} />
        </LogoContainer>
        <LinkLabel
          isSelected={navigation.currentPage === "/download"}
        >
          Installer l&apos;appli
        </LinkLabel>
      </NavLinkButton>
    </Link>
  )
}
