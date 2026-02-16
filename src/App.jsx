import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Introduction from './pages/Introduction'
import WhyMeterChoice from './pages/WhyMeterChoice'
import Science from './pages/Science'
import ClaimVsFact from './pages/ClaimVsFact'
import TakeAction from './pages/TakeAction'
import References from './pages/References'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Introduction />} />
        <Route path="/why" element={<WhyMeterChoice />} />
        <Route path="/science" element={<Science />} />
        <Route path="/claims" element={<ClaimVsFact />} />
        <Route path="/action" element={<TakeAction />} />
        <Route path="/references" element={<References />} />
      </Route>
    </Routes>
  )
}

export default App
