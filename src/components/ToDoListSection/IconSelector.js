import React from 'react'

import {MdDirectionsBike} from 'react-icons/md';
import {IoIosBusiness} from 'react-icons/io';
import {AiTwotoneHome} from 'react-icons/ai'

function IconSelector({iconName}) {

    const returnIcon = name => {
        switch(name){
            case 'sports': return <MdDirectionsBike size = {22}color={'#AAF683'}/>
            case 'home'  : return  <AiTwotoneHome size = {22} color={'#FFD97D'}/>
            case 'work' : return <IoIosBusiness size = {22} color = {'#60D394'}/>
            default: <></>
        };
    }
    return (
        <div style = {{marginLeft: 5}}>
            {returnIcon(iconName)}
        </div>
    )
}

export default IconSelector
