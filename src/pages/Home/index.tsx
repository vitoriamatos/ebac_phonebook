import RegisterButton from '../../components/registerButton'
import Header from '../../containers/header'
import TaskList from '../../containers/contactList'
import Dashboard from '../../containers/dashboard'
import { Container } from '../../styles'
const Home = () => (
  <>
    <Header showFilters />
    <Container>
      <Dashboard />
      <TaskList />
    </Container>
  </>
)

export default Home
