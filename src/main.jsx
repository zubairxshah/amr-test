import React from 'react'
import ReactDOM from 'react-dom/client'
import Todo from './components/Todo'
import 'tailwindcss/tailwind.css'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-stone-900"> {/* Changed to bg-stone-900 */}
      <header className="bg-blue-300 shadow">
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  )
}


const App = () => {
  return (
    <Layout>
      <Todo />
    </Layout>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)