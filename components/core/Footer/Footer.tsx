import { FC } from 'react'
import { Logo } from '@components/ui'
import f from './Footer.module.css'

const Footer: FC = () => {
  return (
    <footer className={f.footer}>
      <div className={f.overlay}></div>
      <div className="inner">
        <div className={f.section}>
          <h2 className="text-white">
            Internships
          </h2>
          <p className="text-white">
            Are you interested in working in a museum? Do you enjoy 
            the fun and excitement of sharing the wonders of nature 
            with people?
          </p>
          <p className="text-white">
            Well you could be just the right person to enjoy an 
            internship at the museum.
          </p>
          <a
            className="button light"
            href="/about"
          >
            Apply Now
          </a>
        </div>
        <div className={f.section}>
          <div className={f.nav}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`${f.link} text-white`}
              href="/contact"
            >
              Contact
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`${f.link} text-white`}
              href="/about"
            >
              About
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className={`${f.link} text-white`}
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
          </div>
          <a href="/" className="logo" aria-label="Logo">
            <Logo size={8} />
            Community Science Museum
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer