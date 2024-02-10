import { Layout } from 'antd';
import Header from './components/share/Header';
import Footer from './components/share/Footer';
import Sidebar from './components/share/Sidebar';
import './assets/css/general.css'
import {Routes,Route} from 'react-router-dom'
import Dashboard from './components/general/Dashboard';
import PersonRouter from './components/person/Router';
import PostRouter from './components/post/Router';

const { Content } = Layout;


function App() {
  return (
    <Layout>
      <Header />
    <Layout>
      <Sidebar />
      <Content className='content'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/person/*' element={<PersonRouter />} />
          <Route path='/post/*' element={<PostRouter />} />

        </Routes>
      </Content>
    </Layout>
    <Footer />
  </Layout>
  );
}

export default App;
