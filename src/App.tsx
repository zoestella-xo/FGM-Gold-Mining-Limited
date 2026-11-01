import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { About } from './pages/About';
import { Collection } from './pages/Collection';
import { Contact } from './pages/Contact';
import { Gallery } from './pages/Gallery';
import { Home } from './pages/Home';

/**
 * Route table. The five pages map 1:1 to the Figma frames:
 * Home · About · Gallery · Collection · Contact.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="collection" element={<Collection />} />
        <Route path="contact" element={<Contact />} />
        {/* Unknown URLs fall back to Home. */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
