import { Container } from '@mui/material';
import TitleBar from './components/TitleBar';
import HomeView from './components/HomeView';
import ClientView from './components/ClientView';

function App() {
  return (
    <>
      <div>
        <TitleBar props={"Home - CMPT 315 Midterm"} />
        <Container >
          <HomeView />
          <ClientView />
        </Container>
      </div>
    </>
  );
}

export default App;
