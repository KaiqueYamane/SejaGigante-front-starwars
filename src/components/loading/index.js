import React from 'react'  
import Spinner from 'react-spinkit' 

import './styles.css'
 
const Loading = ({ loading }) => { 
    return loading ? ( 
        <div className='overlay-content'> 
            <div className='wrapper'> 
                <Spinner 
                    name='ball-spin-fade-loader' 
                    fadeIn='none' 
                    color='#ffcb07' 
                />  
            </div> 
        </div> 
    ) : null 
} 
 
export default Loading