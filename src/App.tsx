import TerminalNav from '@/components/TerminalNav';
import Hero3DMatrix from '@/sections/Hero3DMatrix';
import CinematicShowcase from '@/sections/CinematicShowcase';
import FeatureGrid from '@/sections/FeatureGrid';
import DevLogs from '@/sections/DevLogs';
import Footer from '@/sections/Footer';

function App() {
  return (
    <div style={{ backgroundColor: 'var(--color-bg)' }}>
      <TerminalNav />
      <Hero3DMatrix />
      <CinematicShowcase />
      <FeatureGrid />
      <DevLogs />
      <Footer />
    </div>
  );
}

export default App;
