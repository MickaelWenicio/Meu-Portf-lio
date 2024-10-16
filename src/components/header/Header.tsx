import Container from './Style'

const Header = () => {
  return (
    <Container>
        <div>
          <div>
            <h1>Logo</h1>
          </div>
          <div className='navBar'>
            <nav>
              <ul>
                <li className='descriptionText'>
                  Sobre
                </li>
                <li className='descriptionText'>
                  Experiências
                </li>
                <li className='descriptionText'>
                  Projetos
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
    </Container>
  )
}

export default Header