import './App.css'
import Infopanel from './components/Infopanel'
import Headline from './components/Headline'
import ProjectViewer from './components/ProjectViewer'
import Slider from './components/Slider'
import ExternalLink from './components/ExternalLink'
import Footer from './components/Footer'
function App() {

  return (
    <main className='h-screen flex flex-col relative'>
      <div className='overlay absolute inset-0 z-0'></div>
      <Slider />
      <Headline />
      <div className="hidden sm:grid grid-cols-12 overflow-y-hidden grow z-10">
        <Infopanel />
        <ProjectViewer />
      </div>
      <Footer />
    </main>
  )
}

export default App
