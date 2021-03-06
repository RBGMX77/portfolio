import { useRouter } from "next/router"
import { linkIsActive } from "../utils/helpers"

export default function Header(props){
    const links = [
        {id : "1" , linkname : 'home' , content :'Accueil'},
        {id : "2" , linkname : 'about' ,content : 'Bio'},
        {id : "3" , linkname : 'skills' ,content : 'Compétences'},
        {id : "4" , linkname : 'portfolio' ,content : 'Portfolio'},
        {id : "5" , linkname : 'contact' , content : 'Contact'}
    ]
    const classNames = {
        activeLink :"px-6 py-4 font-medium text-center text-2xl text-cyan-800 bg-white link link-active",
        basicLink : "duration-150 ease-in px-6 py-4 font-medium text-center text-2xl text-white hover:text-cyan-800 hover:bg-white link"
    }
    function background(link){
        switch(link){
            case '/home' : return "bg-gradient-to-r from-cyan-600 to-gray-900";
            break
            case '/contact' : return "bg-gradient-to-r from-gray-900 to-cyan-600";
            break
        }        
        return "bg-gradient-to-r from-gray-900 via-cyan-600 to-gray-900"      
    }
    const router = useRouter()
    function clickEvent(e){
        const route = e.target.innerHTML.toLowerCase()
        const activeLinkID = document.querySelector('.link-active').value
        const targetLinkId = e.target.value
        links.map((link)=>{
            if(link['content'].toLowerCase() == route && '/'+link['linkname'] != router.pathname){
                const section = document.querySelector('section')
                if(activeLinkID < targetLinkId){
                    section.classList.add('translate-right')
                }else{section.classList.add('translate-left')}
                // section.classList.add('opacity')
                setTimeout(() => {
                    router.push('/'+link['linkname'])
                }, 500);                
            }
        })
    }
    return(
        <nav className={`${background(router.pathname)}`}>
            <div className="flex-1 flex items-center justify-center">
                <div className="flex">
                    {
                        links.map((link) => {
                            return (
                                // <Link href={`/${link.linkname}`} key={link.id}>
                                //     <a
                                //     className={linkIsActive(router.pathname,`/${link.linkname}`)
                                //         ? classNames.activeLink
                                //         : classNames.basicLink }
                                //     >
                                //         {link.content.toUpperCase()}
                                //     </a>
                                // </Link>
                                <button 
                                    type="button"
                                    onClick={clickEvent}
                                    key={link.id}
                                    value={link.id}
                                    className={linkIsActive(router.pathname,`/${link.linkname}`)
                                            ? classNames.activeLink
                                            : classNames.basicLink }
                                >
                                    {link.content.toUpperCase()}
                                </button>
                            )                            
                        })
                    }
                </div>
            </div>
        </nav>
    )
}
