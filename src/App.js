import { Container } from '@mui/material';
import TitleBar from './components/TitleBar';
import HomeView from './components/HomeView';
import ClientView from './components/ClientView';
import PlotlyGraph from './components/PlotlyGraph';
import CompanyView from './components/CompanyView';

function App() {
  return (
    <>
    <CompanyView symbol={"A"}/>
    {/*
      <div>
        <TitleBar props={"Home - CMPT 315 Midterm"} />
        <Container >
          <HomeView />
          <ClientView />
        </Container>
      </div>
      */}
    </>
  );
}

export default App;
