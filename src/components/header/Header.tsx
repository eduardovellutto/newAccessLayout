import Link from "next/link";
import LogoPng from '../../assets/logo.png'
import Image from "next/image";

export default function Header(){
    return (
        <div className="realtive bg-lime-400 px-4 md:px-10 mx-auto w-full h-20 flex flex-wrap items-center justify-between shadow-md">
			<div>
                <Link href='/'>
                    <Image src={LogoPng} alt="Logo" width={200} />
                </Link>
            
            </div>
            
            <div>
                AVATAR / USER LOGIN / SAIR
            </div>
        </div>
    )
}