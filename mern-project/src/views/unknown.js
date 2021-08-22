import React from 'react'
import Wrong from '../assets/—Pngtree—paint worker 404 vector_4626869.png'
import { useHistory } from 'react-router-dom'
import { motion } from 'framer-motion'
const Unknown = () => {
    const history = useHistory()
    return (
        <div className='flex justify-center flex-col h-screen'>
            <motion.div
                initial={{ paddingTop: "4rem", opacity: 0 }}
                animate={{ paddingTop: "0rem", opacity: 1 }}
                transition={{ duration: 0.75 }}
            >
                <div
                    className='flex justify-center'>
                    <img src={Wrong} alt="" className='w-96 h-96' />
                </div>
                <div className="flex justify-center">
                    <div className="text-xl bg-blue-500 text-white rounded-md cursor-pointer py-3 px-5" onClick={() => history.goBack()}>Return to last page</div>
                </div>
            </motion.div>
        </div>
    )
}

export default Unknown
