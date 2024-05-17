import { Dashboard } from './components/Dashboard';
import { Header } from './components/header/Header';
import { Layout } from './layout/Layout';

function App() {
  return (
    <Layout>
      <Header />
      <Dashboard />
    </Layout>
  );
}

export default App;
