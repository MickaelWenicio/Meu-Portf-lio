import Container from './Style'

const Header = () => {
  return (
    <Container>
        <div>
          <div>
            <h1>oi</h1>
          </div>
          <div className='navBar'>
            <nav>
              <ul>
                <li className='emphasisText'>
                  Sobre
                </li>
                <li>
                  Experiências
                </li>
                <li>
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