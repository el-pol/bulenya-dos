import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import gsap from 'gsap'

const Header = styled.header`
  background: ${props => props.theme.colors.base};
  width: 100%;
  padding: 1.5em 0;
`
const Nav = styled.nav`
  width: 100%;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 auto;
  padding: 0 1.5em;

  ul {
    display: flex;
    justify-content: space-between;
    margin: 0;
    li {
      opacity: 0;
      display: flex;
      align-items: center;
      margin: 0;
    }
  }

  a {
    text-decoration: none;
    color: DarkGray;
    font-weight: 600;
    transition: all 0.2s;
    border-bottom: 2px solid ${props => props.theme.colors.base};
    &:hover {
      color: white;
    }
  }
`

const activeLinkStyle = {
  color: 'white',
}

const Menu = () => {
  let tl = gsap.timeline()
  const playAnimation = () => {
    tl.to('.listitem', {
      duration: 2.5,
      ease: "slow(0.7, 0.7, false)",
      opacity: 1,
      stagger: 1.25
    })
  }
  useEffect(() => {
    playAnimation()
  }, []);
  return (
    <Header>
      <Nav>
        <ul>
          <li className="listitem">
            <Link to="/" activeStyle={activeLinkStyle}>
              Home
            </Link>
          </li>
          <li className="listitem">
            <Link to="/about/" activeStyle={activeLinkStyle}>
              About
            </Link>
          </li>
        </ul>
      </Nav>
    </Header>
  )
}

export default Menu
