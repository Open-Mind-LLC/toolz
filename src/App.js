import './App.css';
import Sidebar from './components/Sidebar/sidebar';
import Header from './components/Header/header';

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        {/* The rest of your page components will go here */}
      </div>
    </div>
  );
}

export default App;
