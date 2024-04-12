import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<'button'> {
    transparent?: boolean
}

export function IconButton({ transparent = false ,...props }: IconButtonProps){
    return(
       <button 
        className={`${transparent ? 'bg-black/20' : 'bg-white/10'} 
        border border-white/10 rounded-md p-1.5 ${props.disabled ? 'opacity-50' : null}`} {...props}
       />
    )
}