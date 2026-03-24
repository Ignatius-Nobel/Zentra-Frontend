import { AppProvider } from './providers/AppProvider'
import { AppRouter } from './routes'

/**
 * Main App Component.
 * Simplified using AppProvider and AppRouter abstractions.
 */
function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  )
}

export default App
