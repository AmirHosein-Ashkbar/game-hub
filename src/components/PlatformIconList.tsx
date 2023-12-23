import { Platform } from '../hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react';
import {FaWindows,FaPlaystation,FaXbox,FaApple,FaLinux,FaAndroid} from "react-icons/fa"
import {MdPhoneIphone} from "react-icons/md"
import {SiNintendo} from "react-icons/si"
import {BsGlobe} from "react-icons/bs"
import { IconType } from 'react-icons';

interface Props{
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {

    const iconMap : { [ key:string ] : IconType} = {
        pc : FaWindows,
        playstation3 : FaPlaystation,
        playstation4 : FaPlaystation,
        playstation5 : FaPlaystation,
        "ps-vita" : FaPlaystation,
        xbox360 : FaXbox,
        "xbox-one" : FaXbox,
        "xbox-series-x" : FaXbox,
        xbox : FaXbox,
        "nintendo-switch" : SiNintendo,
        macos : FaApple,
        linux : FaLinux,
        ios : MdPhoneIphone,
        android : FaAndroid,
        web : BsGlobe,
    }
    
    
    
  return (  
    <HStack marginY={2}>
    {platforms.map(platform => <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.500' />)}
    </HStack>
  )
}

export default PlatformIconList