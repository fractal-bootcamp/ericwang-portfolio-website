const Infopanel = () => {
  return (
    <div className='flex flex-col border-r border-neutral-700 col-span-2 overflow-y-auto text-pretty'>
        {/* <div className="p-5 pb-0">
            <img src="/eric-profile-bw-plainbg.jpg" alt="profile" />
        </div> */}
        <div className='flex flex-col gap-4 px-5 py-5 border-b border-neutral-700'>
            <h2 className={` font-bold dark:text-neutral-400`}>ABOUT</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='px-5 py-5 border-b border-neutral-700'>
            <h2 className={` font-bold mb-4 dark:text-neutral-400`}>FOCUS</h2>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
        </div>
        <div className='px-5 py-5 border-b border-neutral-700'>
            <h2 className={` font-bold mb-4 dark:text-neutral-400`}>CONTACT</h2>
            <div>
                <div className="mt-4 hover:underline hover:underline-offset-4 cursor-pointer">
                    <a href="https://github.com/ewang0" target="_blank" rel="noopener noreferrer">Github</a>
                    <svg className="ml-1 mb-[1px] inline-block" width="11" height="11" viewBox="0 0 9 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.146447 7.14645C-0.0488156 7.34171 -0.0488156 7.65829 0.146447 7.85355C0.341709 8.04882 0.658291 8.04882 0.853553 7.85355L0.146447 7.14645ZM8 0.5C8 0.223858 7.77614 -1.01534e-07 7.5 -2.27975e-07L3 1.7242e-07C2.72386 3.83301e-09 2.5 0.223858 2.5 0.5C2.5 0.776142 2.72386 1 3 1L7 1L7 5C7 5.27614 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.27614 8 5L8 0.5ZM0.853553 7.85355L7.85355 0.853553L7.14645 0.146447L0.146447 7.14645L0.853553 7.85355Z" fill="currentColor"/>
                    </svg>
                </div>
                <div className="mt-4 hover:underline hover:underline-offset-4 cursor-pointer">
                    <a href="https://github.com/ewang0" target="_blank" rel="noopener noreferrer">CV</a>
                    <svg className="ml-1 mb-[1px] inline-block" width="11" height="11" viewBox="0 0 9 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.146447 7.14645C-0.0488156 7.34171 -0.0488156 7.65829 0.146447 7.85355C0.341709 8.04882 0.658291 8.04882 0.853553 7.85355L0.146447 7.14645ZM8 0.5C8 0.223858 7.77614 -1.01534e-07 7.5 -2.27975e-07L3 1.7242e-07C2.72386 3.83301e-09 2.5 0.223858 2.5 0.5C2.5 0.776142 2.72386 1 3 1L7 1L7 5C7 5.27614 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.27614 8 5L8 0.5ZM0.853553 7.85355L7.85355 0.853553L7.14645 0.146447L0.146447 7.14645L0.853553 7.85355Z" fill="currentColor"/>
                    </svg>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-between px-5 py-5 border-neutral-700'>
            <div className="text-sm mt-1">Eric Wang © 2025</div>
        </div>
    </div>
  )
}

export default Infopanel