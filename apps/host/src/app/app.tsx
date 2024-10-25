import * as React from 'react';

import NxWelcome from './nx-welcome';

import { Link, Route, Routes } from 'react-router-dom';

const ReactRemote = React.lazy(() => import('reactRemote/Module'));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
const AngularRemote = React.lazy(() => import('angularRemote/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/angularRemote">AngularRemote</Link>
        </li>
        <li>
          <Link to="/reactRemote">ReactRemote</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="host" />} />

        <Route path="/reactRemote" element={<ReactRemote />} />
        <Route path="/angularRemote" element={<AngularRemote />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
