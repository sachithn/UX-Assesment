import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layouts/RootLayout'
import Dashboard from './pages/Dashboard'
import Datalab from './pages/Datalab'
import Library from './pages/Library'
import Marketplace from './pages/Marketplace'
import Surveys from './pages/Surveys'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="datalab" element={<Datalab />} />
      <Route path="library" element={<Library />} />
      <Route path="marketplace" element={<Marketplace />} />
      <Route path="surveys" element={<Surveys />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
