// index.tsx
import { AuthProvider } from '@app/common/AuthContext';
import * as React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppLayout } from '@app/AppLayout/AppLayout';
import { AppRoutes } from '@app/routes';
import Login from '@app/Login/Login';
import '@app/app.css';

const App: React.FunctionComponent = () => (
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <AppLayout>
              <AppRoutes />
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  </AuthProvider>
);

export default App;
