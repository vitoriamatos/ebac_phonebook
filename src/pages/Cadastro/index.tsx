import Header from '../../containers/header'
import Form from '../../containers/Form'
import { Container } from '../../styles'
import Dashboard from '../../containers/dashboard'

const Register = () => (
  <>
    <Header showFilters={false} />
    <Container>
      <Dashboard />
      <Form />
    </Container>
  </>
)

export default Register
