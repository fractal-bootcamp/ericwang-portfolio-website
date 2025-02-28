import ExternalLink from './ExternalLink'
import { Switch } from '@heroui/switch'

const Footer = () => {
  return (
    <div className='flex justify-center items-center md:border-y border-neutral-700 px-4 py-8 sm:justify-between sm:px-5 sm:py-8'>
      <div className='flex items-center justify-between border-neutral-700 w-full'>
        <div>Eric Wang © 2025</div>
        <div className='flex items-center gap-4'>
          <ExternalLink href="https://github.com/ewang0" text="Github" />
          <ExternalLink href="https://github.com/ewang0" text="LinkedIn" />
          <ExternalLink href="https://github.com/ewang0" text="CV" />
        </div>
        <div className='hidden md:flex items-center gap-4'>
            <Switch color="default" />
        </div>
      </div>
    </div>
  );
};

export default Footer;