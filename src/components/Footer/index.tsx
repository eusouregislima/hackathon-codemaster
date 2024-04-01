import { FooterContainer } from './styles'

import { GithubLogo } from 'phosphor-react'

export function Footer() {
  return (
    <FooterContainer>
      <div>
        <a
          href="https://github.com/eusouregislima/hackathon-codemaster"
          target="_blank"
          rel="noreferrer"
        >
          <GithubLogo size="25px" color="purple" />
        </a>


      </div>
      <span>
        <p>Desenvolvido por: Devengers - Hackathon Group One</p>
        <p>© 2024 Devengers</p>
      </span>
    </FooterContainer>
  )
}
