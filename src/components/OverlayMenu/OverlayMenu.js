import React from "react"
import { Link } from "gatsby"
import CloseButton from "../../images/close_btn.svg"
import { Overlay } from "./OverlayMenu.styles"
import { useMenuQuery } from "../../hooks/useMenuQuery"

const OverlayMenu = ({ menuOpen, callback }) => {
  const { menu } = useMenuQuery()
  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <h2 className="menuLogo">DogIt</h2>
        <hr />
        <ul className="overlayMenu">
          {menu.menuItems.nodes.map(item =>
            !item.parentId ? (
              <li key={item.id}>
                <Link to={item.url} activeClassName="overlayActive">
                  {item.label}
                </Link>
              </li>
            ) : null
          )}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
        >
          <img src={CloseButton} alt="close-button" />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
