import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  const icons = [
    {
      name: "fa-brands fa-github",
      links: "https://github.com/"
    },
    {
      name: "fa-brands fa-linkedin",
      links: "https://linkedin.com/"
    }
  ]

  return (
    <footer>
      {icons.map(icon => {
        return <a href={icon.links} key={icon.name} target="_blank"> <FontAwesomeIcon icon={icons.name} /></a>
      })}
    </footer>
  )
}

export default Footer;