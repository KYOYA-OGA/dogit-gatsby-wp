import React from 'react'
import { Link } from 'gatsby'
import { useMenuQuery } from '../../hooks/useMenuQuery'
import { Wrapper, Content } from './Header.styles'
import Navigation from '../Navigation/Navigation'

const Header = () => {
  const { menu } = useMenuQuery()

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <h1 style={{ margin: '0' }}>Dog It</h1>
        </Link>
        <Navigation menu={menu.menuItems.nodes} />
      </Content>
    </Wrapper>
  )
}

export default Header
