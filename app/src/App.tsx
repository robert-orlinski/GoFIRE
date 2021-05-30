import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './common/css/Layout';
import Root from './views/Backend/containers/Root';

function App() {
  return (
    <Router>
      <Layout>
        <Root />
      </Layout>
    </Router>
  );
}

export default App;
