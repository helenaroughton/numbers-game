import { Github, Linkedin } from 'react-bootstrap-icons'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© 2025 Helena Roughton</p>
        <div className="social-links">
          <a
            href="https://github.com/helenaroughton/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Github className="social-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/helena-roughton-116063134/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <Linkedin className="social-icon" />
          </a>
        </div>
      </div>
    </footer>
  )
}
