import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import MuiPage from './pages/MuiPage'
import AntdPage from './pages/AntdPage'
import ChakraPage from './pages/ChakraPage'
import MantinePage from './pages/MantinePage'
import RadixPage from './pages/RadixPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mui" element={<MuiPage />} />
          <Route path="antd" element={<AntdPage />} />
          <Route path="chakra" element={<ChakraPage />} />
          <Route path="mantine" element={<MantinePage />} />
          <Route path="radix" element={<RadixPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
