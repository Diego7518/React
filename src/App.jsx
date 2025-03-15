import { Layout } from './Components/Layout/Layout'
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/Pages/Home/Home'
import { Studies } from './Components/Pages/Study/Studies'
import { Skills } from './Components/Pages/Skills/Skills'

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studies" element={<Studies />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </Layout>
  )
}


