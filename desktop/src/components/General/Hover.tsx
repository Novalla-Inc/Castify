import { useState } from "react";
import { motion } from 'framer-motion';

type HoverProps = {
    text: string;
    children?: React.ReactNode;
    isOpen?: boolean;
};

function HoverProp ({ ...props }: HoverProps) { 
     
    const variants = {
        open: { opacity: 1  },
        closed: { opacity: 0 },
    };

    return (
        <motion.div
            animate={props.isOpen ? 'open' : 'closed'}
            variants={variants}
        >
            <div className='absolute bottom-0 z-20 bg-[#8bb09566] p-4 border-transparent rounded-md shadow-md animate-pulse'>
                <span className='text-1xl text-white'>{props.text}</span>
            </div>
        </motion.div>
    )
};  

/**
 * Hover Must wrap the component that you want to show.
 */
function Hover ({ ...props }: HoverProps) {
    const [hovering, setHovering] = useState(false);
    
    const handleMosueEnter = () => setHovering(true);

    const handleMouseLeave = () => setHovering(false);

    return (
        <div className='w-auto h-auto relative hover:opacity-100 ease-linear cursor-default' onMouseEnter={handleMosueEnter} onMouseLeave={handleMouseLeave}>
            <div className='animate-pulse opacity-0'>
                {hovering && <HoverProp text={props.text} isOpen={hovering} />}
            </div>
            {props.children}
        </div>
    );
}

export default Hover;