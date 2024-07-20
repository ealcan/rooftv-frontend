import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "react-query";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './views/Home'
import Footer from './components/Footer'
import Events from './views/Events'
import Event from './views/Event'
import Artists from './views/Artists'
import Artist from './views/Artist'
import Videos from './views/Videos'
import Video from './views/Video'
import News from './views/News'
import New from './views/New'
import Shop from './views/Shop'
import Product from './views/Product'
import Posts from './views/Posts'
import MenuAdmin from './views/MenuAdmin'

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<Event />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:id" element={<Artist />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/videos/:id" element={<Video />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<New />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/menu" element={<MenuAdmin />} />
        </Routes>
        <Footer />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
