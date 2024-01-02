import ButtonMenu from "../buttonMenu/ButtonMenu"

interface NavButtonsProps{
    navlinks: any[]
}


export default function NavButtons({navlinks}:NavButtonsProps){
    return(
        navlinks?.map((link, index)=> {
            return(
                <ButtonMenu icon={link.icon} href={link.href} key={index}>
                    {link.title}
                </ButtonMenu>
            )
        })
    )
}