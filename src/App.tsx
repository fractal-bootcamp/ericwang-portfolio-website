import './App.css'
import Infopanel from './components/Infopanel'
import Headline from './components/Headline'
import ProjectViewer from './components/ProjectViewer'
import Slider from './components/Slider'

function App() {

  return (
    <main className='max-h-screen flex flex-col'>
      <Slider />
      <Headline />
      <div className="hidden sm:grid grid-cols-12 overflow-y-auto">
        <Infopanel />
        <ProjectViewer />
      </div>
      <div className='flex justify-center items-center border-y border-neutral-700 p-4 sm:justify-between sm:p-5'>
        <div className="py-2">
          <div className="font-bold text-4xl text-pretty">/////</div>
        </div>
      </div>
    </main>
  )
}

export default App
