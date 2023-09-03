import TableList from './components/TableList/TableList'
import Navigation from './components/Navigation/Navigation'
import TableForm from './components/TableForm/TableForm'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const App = (props) => {
  return (
    <main>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<TableList />} />
          <Route path={'/tables/'} element={<TableForm />} />
        </Routes>
      </Container>
      <Footer />
    </main>
  );
};


export default App;