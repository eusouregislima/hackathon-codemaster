import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { History } from './pages/History'
import { ToDoList } from './pages/ToDoList'
import { ToDo } from './pages/Todo'
import { Lessons } from './pages/Lessons'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<ToDo />} />
        <Route path="/history" element={<History />} />
        <Route path="/to-do-list" element={<ToDoList />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Routes>
  )
}
