import Image from 'next/image';
import { useState } from 'react';

export default function Square({imagePath, title, blurb, techStack, comingSoon}) {

    if(!comingSoon)
    {
        return (
            <div 
                className='border-2 bg-panelBg/70 flex flex-col rounded-xl border-panelBorder items-center text-center min-h-fit p-3 w-88 hover:cursor-pointer panel'
                onClick={() => window.open('https://the-heat.vercel.app/', '_blank')}
            >
                <Image
                    src={imagePath}
                    width={175}
                    height={175}
                />
                <h2 className='font-bold text-xl my-2'>{title}</h2>
                <h4 className='text-md w-10/12'>{blurb}</h4>
                <div className='flex flex-row w-full justify-center mt-12 mb-1 px-10'>
                {
                    techStack.map((item, index) => {
                        if(techStack[index+1])
                        {
                            return (
                                <>
                                    <h6 className='extraSmall' key={index}>{item}</h6>
                                    <h4 className='extraSmall mx-2' key={index*-1}>⋅</h4>
                                </>
                            )
                        }
                        else {
                            return (<h6 className='extraSmall'>{item}</h6>)
                        }
                    })
                }
                    {/* <h6 className='extraSmall'>next.js</h6>
                    <h4 className='extraSmall mx-2'>⋅</h4>
                    <h6 className='extraSmall'>firebase</h6>
                    <h4 className='extraSmall mx-2'>⋅</h4>
                    <h6 className='extraSmall'>tailwind css</h6> */}
                </div>

            </div>
        )
    } else {
        const [inProgress, setInProgress] = useState("in the kitchen...");
        const updateInProgress = () => {
            if(inProgress === "in the kitchen...")
                setInProgress("in the kitchen")
            else setInProgress(inProgress + ".");
        }
        const interval = setInterval(() => {
            updateInProgress();
        }, 1000);
        return (
            <div className='border-2 bg-panelBg/70 flex flex-col rounded-xl border-panelBorder justify-center items-center text-center min-h-80 p-3 w-88'>
                <h2 className='font-bold text-3xl'>{inProgress}</h2>
            </div>
        )
    }
}