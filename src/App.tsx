import './App.css'
import Infopanel from './components/Infopanel'
import Headline from './components/Headline'
import ProjectViewer from './components/ProjectViewer'
import Slider from './components/Slider'
import ExternalLink from './components/ExternalLink'

function App() {

  return (
    <main className='h-screen flex flex-col relative'>
      <div className='overlay absolute inset-0 z-0'></div>
      <Slider />
      <Headline />
      <div className="hidden sm:grid grid-cols-12 overflow-y-auto grow z-10">
        <Infopanel />
        <ProjectViewer />
      </div>
      <div className='flex justify-center items-center border-y border-neutral-700 p-4 sm:justify-between sm:p-5'>
        <div className='flex items-center justify-between px-5 py-5 border-neutral-700 w-full'>
            <div>Eric Wang © 2025</div>
            <div className='flex items-center gap-4'>
              <ExternalLink href="https://github.com/ewang0" text="Github" />
              <ExternalLink href="https://github.com/ewang0" text="LinkedIn" />
              <ExternalLink href="https://github.com/ewang0" text="CV" />
            </div>
            <div className='flex items-center gap-4'>
              <ExternalLink href="https://github.com/ewang0" text="Github" />
              <ExternalLink href="https://github.com/ewang0" text="CV" />
            </div>
        </div>
      </div>
    </main>
  )
}

export default App
