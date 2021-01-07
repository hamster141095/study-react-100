import Header from './Components/Header/Header'
import { Row, Col} from 'antd'

import 'antd/dist/antd.css'
import './scss/app.scss'

import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile/Profile';

const App = () => {
  return (
    <div className="App">
    <Row  justify="center" >
      <Col span={22}>
        <Header />
      </Col>
    </Row>

    <Row justify="center" >
      <Col span={4} ><Navbar/>
      </Col>
      <Col span={18} ><Profile/>
      </Col>
    </Row>

    </div>
  )
}

export default App;
