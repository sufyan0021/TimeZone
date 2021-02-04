import { getDefaultNormalizer } from '@testing-library/react'
import React,{useState,useEffect} from 'react'
import getTime from '../utils/getTime';

const Time = ({selectedTimeZone}) => {
    const [timeZone] = useState('Europe/London');
    const [time,setTime] = useState();

    useEffect(()=>{
        getLocalTime(timeZone);
        console.log('mounted');
    },[])

    const getLocalTime = async (selectedTimeZone)=>{
        let strTime = await getTime(selectedTimeZone);
        setTime(strTime.data.formatted);
    }
    
    useEffect(()=>{
        var changed=true;
        if(changed){
            getLocalTime(selectedTimeZone);
        }
        const timeGetter = setInterval(()=>{
            getLocalTime(selectedTimeZone);
        },
        5000);
        return ()=>{clearInterval(timeGetter);

        }
    },[selectedTimeZone]);

    return (
        <div className='fetchedTime'>
            <h6>The Local Time in current timezone {selectedTimeZone} is:</h6>
                {time} 
        </div>
    )
}

export default Time;
