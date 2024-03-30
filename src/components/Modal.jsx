import React, { useState } from 'react'

const Modal = () => {
    const [openmodal, setOpenmodal] = useState(true)
    return (
        <div className='bg-black py-[60px] mt-5'>
            <div className='container mx-auto'>
                <div className='bg-[#5f9ea0] py-[40px]'>
                    <h2 className='text-black text-[45px] font-black text-center '>Custom-Modal</h2>
                    <div>
                        <div className='flex justify-center pt-[30px]'>
                            <button onClick={() => setOpenmodal(!openmodal)} className='py-[12px] px-[20px] rounded-[20px] bg-black text-[#5f9ea0]'>Modal-button</button>
                        </div>
                        {openmodal ? null : <div onClick={() => setOpenmodal(true)} className='fixed top-0 left-0 right-0 bg-[#5f9ea0] w-full h-full min-h-screen flex items-center justify-center'>
                            <div onClick={() => setOpenmodal(false)} className='w-[400px] h-[400px] bg-white'>
                            </div>
                        </div>}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Modal;