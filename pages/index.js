import Ubuntu from "../components/ubuntu";
import ReactGA from 'react-ga4';
import Meta from "../components/SEO/Meta";

// Keep analytics initialized so ReactGA.send/event calls don't break app startup.
const TRACKING_ID = process.env.NEXT_PUBLIC_TRACKING_ID || "G-LOCALTEST01";
ReactGA.initialize(TRACKING_ID);

function App() {
  return (
    <>
      <Meta />
      <Ubuntu />
    </>
  )
}

export default App;
