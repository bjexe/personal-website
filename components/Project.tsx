import React from 'react'
import Image from 'next/image'

interface expectedProps {
    name: string,
    description: string,
    repository?: string,
    website?: string,
    youtube?: string,
    startDate: string,
    endDate: string
};

export default function Project({ name, description, repository, website, youtube, startDate, endDate }: expectedProps) {
    return(
        <div className='pb-6'>
            <h1 className="text-center text-5xl mb-6">
                {name}
            </h1>
            {
                (repository || website) && 
                <div className='flex justify-center items-center gap-20 mb-6'>
                    {
                        repository && 
                        <div className="flex items-center">
                            <Image src='/github-mark-white.png' width={20} height={20} alt="github logo"/>
                            <a href={repository} target="_blank" rel="noreferrer" className="underline font-bold text-xl ml-2">github repository link</a>
                        </div>
                    }
                    {
                        website && 
                        <div className='flex justify-center items-center'>
                            <Image src='/link-32.png' width={20} height={20} alt="link logo"/>
                            <a href={website} target="_blank" rel="noreferrer" className="underline font-bold text-xl ml-2">{website}</a>
                        </div>
                    }
                </div>
            }
            <div className='flex justify-center mb-6'>
                <div className='w-7/12'>
                <p className='text-center text-xl'>
                    {description}
                </p>
                </div>
            </div>
            {
                youtube && 
                <div className='flex grow justify-center mb-6'>
                    <iframe src={youtube} title={`${name} video`} width={640} height={360} className="border-none"/>
                </div>
            }
            <div className='text-center text-2xl mb-8'>
                {startDate} - {endDate}
            </div>
            <hr className='mt-6 w-7/12 mx-auto mb-4'/>
        </div>
    );
}