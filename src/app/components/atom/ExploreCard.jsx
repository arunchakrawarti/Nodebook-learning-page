import React from 'react';
import Image from "next/image"; 
import { Phone, Mail, MapPin } from "lucide-react";

const ExploreCard = ({
    title,
    address,
    phone,
    email,
    mapLink,
    iconSrc, 
    bgColorClass,
}) => {

    const textColor = 'text-gray-900'; 
    
    const contactIconColor = 'text-gray-600'; 
    
    const cardIconColor = 'text-indigo-600'; 

    return (
       
        <div className={`w-full max-w-lg lg:max-w-[45%] ${bgColorClass} p-4 sm:p-6 rounded-xl flex flex-col justify-between shadow-lg`}> 
            
           
            <div className='flex space-x-3 sm:space-x-6'>
                
                
                <div className="flex-shrink-0 pt-1">
                    <Image
                        src={iconSrc} 
                        alt={`${title} Icon`}
                        
                        width={64} 
                        height={64} 
                        className={`w-16 h-16 sm:w-24 sm:h-24 ${cardIconColor}`}
                    />
                </div>
                
                
                <div className='flex flex-col space-y-1 sm:space-y-2 flex-grow'> 
                    
                   
                    <h4 className={`font-montserrat font-bold text-lg sm:text-xl leading-tight tracking-normal ${textColor}`}>
                        {title}
                    </h4>
                    
                    
                    <p className={`font-montserrat font-normal text-sm sm:text-base leading-snug tracking-normal ${textColor}`}>
                        {address}
                    </p>

                   
                    <div className='pt-2 space-y-2'>
                        
                        {/* Phone */}
                        <div className='flex items-center space-x-2 sm:space-x-3'>
                            <Phone className={`w-4 h-4 sm:w-5 sm:h-5 ${contactIconColor}`} />
                            <p className={`font-montserrat font-normal text-sm sm:text-base leading-tight tracking-normal ${textColor}`}>
                                {phone}
                            </p>
                        </div>
                        
                        {/* Email */}
                        <div className='flex items-center space-x-2 sm:space-x-3'>
                            <Mail className={`w-4 h-4 sm:w-5 sm:h-5 ${contactIconColor}`} />
                            <p className={`font-montserrat font-normal text-sm sm:text-base leading-tight tracking-normal ${textColor}`}>
                                {email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

          
            <div className='w-full flex justify-end pr-1 sm:pr-2 pt-4'>
                <a 
                    href={mapLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className='flex items-center space-x-1 hover:opacity-80 transition-opacity'
                >
                    <MapPin className={`w-4 h-4 sm:w-5 sm:h-5 ${cardIconColor}`} />
                    <p className={`font-montserrat font-semibold text-sm sm:text-base leading-none tracking-normal ${cardIconColor}`}>
                        {mapLink}
                    </p>
                </a>
            </div>
        </div>
    );
}

export default ExploreCard;