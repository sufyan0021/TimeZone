import { getDefaultNormalizer } from '@testing-library/react'
import React,{useState,useEffect} from 'react'
import getTime from '../utils/getTime';

const Time = ({selectedTimeZone}) => {
    const [timeZone,setTimeZone] = useState('Europe/London');
    const [time,setTime] = useState();

    /*const getInitialTime = ()=>{
        var date = new Date();
        let strTime = date.toLocaleString("en-US", {
            timeZone 
        });
        setTime(strTime);
    }*/

    useEffect(()=>{
        getLocalTime(timeZone);
    },[])

    const getLocalTime = async (selectedTimeZone)=>{
        let strTime = await getTime(selectedTimeZone);
        console.log(strTime.data.formatted);
        setTime(strTime.data.formatted);
    }
    
    useEffect(()=>{
        const timeGetter = setInterval(()=>{
            getLocalTime(selectedTimeZone);
        },
        5000);
        return ()=>{clearInterval(timeGetter);}
    },[selectedTimeZone]);

    return (
        <div className='fetchedTime'>
            <h6>The Local Time in current timezone {selectedTimeZone} is:</h6>
           {time} 
        </div>
    )
}

export default Time;
