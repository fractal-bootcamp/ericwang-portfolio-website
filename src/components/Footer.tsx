import ExternalLink from './ExternalLink'
import { Switch } from '@heroui/switch'

const Footer = () => {
  return (
    <div className='flex justify-center items-center border-y border-neutral-700 p-4 sm:justify-between sm:p-5'>
      <div className='flex items-center justify-between px-5 py-5 border-neutral-700 w-full'>
        <div>Eric Wang © 2025</div>
        <div className='flex items-center gap-4'>
          <ExternalLink href="https://github.com/ewang0" text="Github" />
          <ExternalLink href="https://github.com/ewang0" text="LinkedIn" />
          <ExternalLink href="https://github.com/ewang0" text="CV" />
        </div>
        <div className='flex items-center gap-4'>
            <Switch color="default" />
        </div>
      </div>
    </div>
  );
};

export default Footer;