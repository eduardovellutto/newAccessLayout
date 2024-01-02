import '../assets/fontello/css/fontello.css'


import { navLinks } from '../utils/navLinks'
import NavButtons from "@/components/navButtons/NavButtons";

export default function Home() {
  return (
	<div className='w-full h-full flex flex-wrap justify-center items-center'>
      	<NavButtons navlinks={navLinks}/>
	</div>
  )
}
