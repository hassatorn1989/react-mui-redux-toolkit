import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/PrivateLayout'


const LoginPage = lazy(() => import('./pages/LoginPage'))
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <Suspense fallback={<></>}>
            <LoginPage />
          </Suspense>
        } />
        <Route path="/" element={<Layout />} >
          <Route path="/dashboard" element={
            <Suspense fallback={<></>}>
              <Dashboard />
            </Suspense>
          } />
        </Route>
      </Routes>
    </>
  )
}

export default App
