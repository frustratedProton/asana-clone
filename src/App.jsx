import { Outlet } from 'react-router-dom';
import TopBar from './components/Topbar';
import Sidebar from './components/Drawer';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TopBar />
      <div style={{ display: 'flex', flex: 1 }}>
        <Sidebar />
        <main style={{ flex: 1, marginLeft: 20, padding: '16px', marginTop: 40 }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
