import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './BlogWebsite/Header'
import Home from './BlogWebsite/Home'
import Blog from './BlogWebsite/Blog'
import About from './BlogWebsite/About'
import Contact from './BlogWebsite/Contact'
import Login from './BlogWebsite/Login'
import Register from './BlogWebsite/Register'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

