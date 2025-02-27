import MobileCloudWindow from './MobileCloudWindow'

const Infopanel = () => {
  return (
    <div className='flex flex-col border-r border-neutral-700 col-span-2 overflow-y-auto text-pretty'>
        {/* <div className="p-5 pb-0">
            <img src="/eric-profile-bw-plainbg.jpg" alt="profile" />
        </div> */}
        <MobileCloudWindow />
        <div className='flex flex-col gap-4 px-5 py-5 border-b border-neutral-700'>
            <h2 className={` font-bold dark:text-neutral-400`}>ABOUT</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='px-5 py-5 border-neutral-700'>
            <h2 className={` font-bold mb-4 dark:text-neutral-400`}>EXPERIENCE</h2>
            <p>Amazon</p>
            <p>Lippincott</p>
            <p>Freelance</p>
        </div>
        {/* <div className='px-5 py-5 border-b border-neutral-700'>
            <h2 className={` font-bold mb-4 dark:text-neutral-400`}>CONTACT</h2>
            <div>
                <div className="mt-4">
                    <ExternalLink href="https://github.com/ewang0" text="Github" />
                </div>
                <div className="mt-4">
                    <ExternalLink href="https://github.com/ewang0" text="LinkedIn" />
                </div>
            </div>
        </div> */}
        {/* <div className='flex items-center justify-between px-5 py-5 border-neutral-700'>
            <div className="text-sm mt-1">Eric Wang © 2025</div>
        </div> */}
    </div>
  )
}

export default Infopanel