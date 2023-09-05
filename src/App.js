import TableList from './components/TableList/TableList'
import Navigation from './components/Navigation/Navigation'
import TableForm from './components/TableForm/TableForm'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { fetchTables } from './redux/tablesRedux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);


  return (
    <main>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/" element={<TableList />} />
          <Route path={'/table/:tableId'} element={<TableForm />} />
        </Routes>
      </Container>
      <Footer />
    </main>
  );
};

export default App;