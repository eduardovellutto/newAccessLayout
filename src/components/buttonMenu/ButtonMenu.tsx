import Link from "next/link"

interface ButtonMenuProps {
    icon: any,
    href: any,
    children: any,

}

export default function ButtonMenu({icon, href, children}:ButtonMenuProps){
    return(
        <Link href={href}>
            <div className='flex flex-col justify-center items-center font-[600] text-center p-[1em] m-1 gap-3'>
                <div className='flex flex-auto justify-center items-center text-5xl text-zinc-600 w-20 h-20 bg-zinc-200 rounded-bl-3xl rounded-tr-3xl hover:bg-zinc-100'>
                <i className={icon}/>
                </div>
                <div className='text-sm hover:text-zinc-700'>
                    {children}    
                </div>
            </div>
        </Link>
        
    )

}