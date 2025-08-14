import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/FakeAuthContext'
import { useEffect } from 'react'

export default function ProtecedRoute({ children }) {
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) navigate('/')
  }, [isAuthenticated, navigate])
  return isAuthenticated ? children : null
}
