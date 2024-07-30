import {cn} from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
    imgSrc: string
    dark?: boolean
}

const Phone = ({imgSrc, className, dark=false, ...props}: PhoneProps) => { 
    return (
        <section 
            className={cn('relative pointer-events-none z-50 overflow-hidden', className)} 
            {...props}
        >
            <img src={
                dark
                ? '/phone-template-dark-edges.png'
                : '/phone-template-white-edges.png'
                } 
                alt="phone frame that has an image inside of it."
                className='pointer-events-none z-50 select-none'
             />
            <div className="absolute -z-10 inset-0">
                <img    
                    src={imgSrc}
                    alt="overlaying phone image" 
                    className="object-cover min-w-full min-h-full" 
                />
            </div>
        </section>
    )
}

export default Phone;