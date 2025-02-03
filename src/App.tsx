import './App.css'
import Infopanel from './components/Infopanel'
import Headline from './components/Headline'
import Projects from './components/Projects'
import Gallery from './components/Gallery'

function App() {

  return (
    <main className='max-h-screen flex flex-col'>
      <Headline />
      <div className="hidden sm:grid grid-cols-12 overflow-y-auto">
        <Infopanel />
        <Projects />
        <div className="w-full overflow-y-auto col-span-6 px-5 pb-5 sm:p-4">
          <h2 className={`font-bold pb-4 dark:text-neutral-400`}>PROJECT DETAIL</h2>
          <Gallery />
        </div>
      </div>
    </main>
  )
}

export default App
