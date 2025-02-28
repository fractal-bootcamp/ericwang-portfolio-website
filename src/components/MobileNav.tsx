import { Switch } from "@heroui/switch"
import ExternalLink from "./ExternalLink"

const MobileNav = () => {
  return (
    <div className='flex justify-between px-4 py-4 border-b border-neutral-700'>
        <ExternalLink href="mailto:info@twopixel.studio" text="Contact" />
        <Switch />
    </div>
  )
}

export default MobileNav