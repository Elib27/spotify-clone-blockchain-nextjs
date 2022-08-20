import styled from "styled-components"
import Link from "next/link"
import Image from "next/image"

const LinkLabel = styled.p`
  font-size: 0.875rem;
  margin-left: 16px;
  width: 100%;
  text-align: left;
  color: #b3b3b3;
  font-weight: 600;
  transition: color 0.3s ease-out;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
`
const LogoContainer = styled.div`
  opacity: 0.7;
  flex-shrink: 0;
  &:hover {
    opacity: 1;
  }
`

export default function NavButton({ label, link, imageSrc, imageAlt }) {
  return (
    <Link href={link}>
      <NavLinkButton>
        <LogoContainer>
          <Image src={imageSrc} alt={imageAlt} width={24} height={24} />
        </LogoContainer>
        <LinkLabel>{label}</LinkLabel>
      </NavLinkButton>
    </Link>
  )
}