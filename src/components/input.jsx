import cn from 'classnames'
import { findInputError, isFormValid } from '--/utils'
import { useFormContext } from 'react-hook-form'
import { AnimatePresence, motion } from 'framer-motion'
import { MdError } from 'react-icons-/md'
/*
THIS IS JUST A TEST FILE NOT CURRENTLY BEING USED
*/
export const Input = ( {label, type, id, placeholder }) => {
    return ( 
    <div>
        <div>
            <label htmlFor={id} className='font-semibold capitalize'>
                {label}
            </label>
        </div>
        <input
            id={id}
            type={type}
            className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
            placeholder={placeholder}
        />
    </div> 
    )
}

const InputError = ({}) => {
    return <div>error</div>
}

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}

/*
THIS IS JUST A TEST FILE NOT CURRENTLY BEING USED
*/