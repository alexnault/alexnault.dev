import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ copyrights }) => (
  <footer>
    {copyrights ? (
      <div
        dangerouslySetInnerHTML={{
          __html: copyrights,
        }}
      />
    ) : (
      <>
        <span className="footerCopyrights">
          <a href="https://github.com/alexnault">github</a>
        </span>
        <span className="footerCopyrights">
          <a href="https://www.linkedin.com/in/naultalex">linkedin</a>
        </span>
        <span className="footerCopyrights">
          <a href="https://twitter.com/nault_alex">twitter</a>
        </span>
      </>
    )}
  </footer>
)

Footer.propTypes = {
  copyrights: PropTypes.string,
}

export default Footer
