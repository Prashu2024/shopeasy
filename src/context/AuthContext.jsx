import { createContext, useState, useEffect } from 'react'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../firebase/config'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  // Clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(null), 5000)
      return () => clearTimeout(timer)
    }
  }, [error])

  // Listen for auth state changes
  useEffect(() => {
    // this was annoying to debug - make sure to unsubscribe!
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })
    
    return unsubscribe
  }, [])

  // Sign up
  const signup = async (email, password) => {
    try {
      setError(null)
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error('Signup error:', err.message)
      setError(err.message)
      throw err
    }
  }

  // Login
  const login = async (email, password) => {
    try {
      setError(null)
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error('Login error:', err.message)
      setError(err.message)
      throw err
    }
  }

  // Logout
  const logout = async () => {
    try {
      await signOut(auth)
    } catch (err) {
      console.error('Logout error:', err.message)
      setError(err.message)
    }
  }

  const value = {
    currentUser,
    loading,
    error,
    signup,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
