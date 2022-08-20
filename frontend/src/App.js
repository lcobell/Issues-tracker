import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import DashboardLayout from './components/DashboardLayout'
import { CssBaseline } from '@mui/material'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import AllTickets from './components/projects/AllTickets'
import Chat from './components/Chat'
import MyTeam from './components/MyTeam'
import ManageRole from './components/ManageRole'
import MyTickets from './components/projects/MyTickets'
import NewTicket from './components/projects/NewTicket'
import Page404 from './components/Page404'
import SignIn from './components/SignIn'
import RequireAuthn from './services/RequireAuthn'
import SignOut from './components/SignOut'

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route
          path="/user/*"
          element={
            <RequireAuthn>
              <DashboardLayout>
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="all-tickets" element={<AllTickets />} />
                  <Route path="chat" element={<Chat />} />
                  <Route path="my-team" element={<MyTeam />} />
                  <Route path="manage-role" element={<ManageRole />} />
                  <Route path="my-tickets" element={<MyTickets />} />
                  <Route path="new-ticket" element={<NewTicket />} />
                  <Route path="*" element={<Page404 />} />
                  <Route path="/logout" element={<SignOut />} />
                </Routes>
              </DashboardLayout>
            </RequireAuthn>
          }
        />
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/user" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  )
}

export default App
