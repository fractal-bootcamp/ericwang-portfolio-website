'use client'

import StarBanner  from "./StarBanner"

const MobileInfopanel = () => {
    return (
        <div className='flex flex-col'>
            <div className='flex gap-8 p-4 border-t border-neutral-700'>
                <h2 className={`font-bold mb-2 dark:text-neutral-400 w-[92px] shrink-0`}>ABOUT</h2>
                <div className="flex flex-col text-sm gap-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className='flex gap-8 p-4 border-t border-neutral-700'>
                <h2 className={`font-bold mb-2 dark:text-neutral-400 w-[92px] shrink-0`}>EXPERIENCE</h2>
                <div className="text-sm">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div className='flex gap-8 p-4 border-y border-neutral-700'>
                <h2 className={`font-bold mb-2 dark:text-neutral-400 w-[92px] shrink-0`}>EXPERIENCE</h2>
                <div className='flex flex-col gap-2 text-sm'>
                    <div className="hover:underline hover:underline-offset-4 cursor-pointer">
                        <a href="mailto:info@twopixel.studio" target="_blank" rel="noopener noreferrer">info@twopixel.studio</a>
                    </div>
                    <div className="hover:underline hover:underline-offset-4 cursor-pointer">
                        <a href="https://www.linkedin.com/company/twopixel-studio/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <svg className="ml-1 inline-block" width="9" height="9" viewBox="0 0 9 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.146447 7.14645C-0.0488156 7.34171 -0.0488156 7.65829 0.146447 7.85355C0.341709 8.04882 0.658291 8.04882 0.853553 7.85355L0.146447 7.14645ZM8 0.5C8 0.223858 7.77614 -1.01534e-07 7.5 -2.27975e-07L3 1.7242e-07C2.72386 3.83301e-09 2.5 0.223858 2.5 0.5C2.5 0.776142 2.72386 1 3 1L7 1L7 5C7 5.27614 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.27614 8 5L8 0.5ZM0.853553 7.85355L7.85355 0.853553L7.14645 0.146447L0.146447 7.14645L0.853553 7.85355Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <div className="hover:underline hover:underline-offset-4 cursor-pointer">
                        <a href="https://www.instagram.com/twopixelstudio/" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <svg className="ml-1 inline-block" width="9" height="9" viewBox="0 0 9 9" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.146447 7.14645C-0.0488156 7.34171 -0.0488156 7.65829 0.146447 7.85355C0.341709 8.04882 0.658291 8.04882 0.853553 7.85355L0.146447 7.14645ZM8 0.5C8 0.223858 7.77614 -1.01534e-07 7.5 -2.27975e-07L3 1.7242e-07C2.72386 3.83301e-09 2.5 0.223858 2.5 0.5C2.5 0.776142 2.72386 1 3 1L7 1L7 5C7 5.27614 7.22386 5.5 7.5 5.5C7.77614 5.5 8 5.27614 8 5L8 0.5ZM0.853553 7.85355L7.85355 0.853553L7.14645 0.146447L0.146447 7.14645L0.853553 7.85355Z" fill="currentColor"/>
                        </svg>
                    </div>
                </div>
            </div>
            <div className="py-4 border-b border-neutral-700">
                <div className="w-screen">
                    <StarBanner className="w-full h-full" color={"#404040"} />
                </div>
            </div>
        </div>
    )
}

export default MobileInfopanel