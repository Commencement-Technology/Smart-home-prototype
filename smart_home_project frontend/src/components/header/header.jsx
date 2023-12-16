import { UserButton,useUser } from '@clerk/clerk-react'
import myimg from './../../assets/me (2).jpg'
import s from './header.module.css'
import { useAuthContext } from '../../hooks/useAuthContext';

function header(){
    
        const {user}=useAuthContext()
        const userData= useUser();
        
        if(!userData.isLoaded){
            return(
                <div className={s.header}>
                <div className={s.header_text}>
                <h3>Loading</h3>
                </div>
    
                <div className={s.ubutton}>
                <UserButton 
                appearance={{
                    elements: {
                        userButtonPopoverCard:"ubutton"
                        ,userPreviewMainIdentifier:"ubuttonf",
                        userPreviewSecondaryIdentifier:"ubuttonf",
                        userPreviewAvatarBox:"ubuttonimg",
                        userButtonPopoverActionButtonText:"ubuttonf",
                        userButtonPopoverFooter:"ubuttonf"
                    },
                  }}/>
                </div>
              </div>

            )
        }
        const name= userData.user.fullName

        return(

        <div className={s.header}>
            <div className={s.header_text}>
            <h1>Hello, {user.name}!</h1>
            <p className="text-lg font-semibold" >Your devices are under your control.</p>
            </div>

            <div className={s.ubutton}>
            <UserButton 
            appearance={{
                elements: {
                    userButtonPopoverCard:"ubutton"
                    ,userPreviewMainIdentifier:"ubuttonf",
                    userPreviewSecondaryIdentifier:"ubuttonf",
                    userPreviewAvatarBox:"ubuttonimg",
                    userButtonPopoverActionButtonText:"ubuttonf",
                    userButtonPopoverFooter:"ubuttonf",
                    userPreview:"gap-x-[0.5rem]",
                    userPreviewMainIdentifier:"p-0 text-xs",
                    userPreviewSecondaryIdentifier:"p-0 text-[0.6rem]",
                    userButtonPopoverActionButton:"justify-around",
                    userButtonPopoverActionButton__signOut:"mr-1"
                    // userPreview__userButton:"ml-5"
                    // userPreviewAvatarContainer:"ml-2",
                },
              }}/>
            </div>
          </div>
    )
}

export default header