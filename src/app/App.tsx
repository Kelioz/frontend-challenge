import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../shared/config/react-query'
import { HashRouter } from 'react-router-dom'
import { Router } from './router'
import './styles.scss'
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Router />
      </HashRouter>
    </QueryClientProvider>
  )
}
