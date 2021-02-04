import React, { useEffect,useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import getData from '../utils/getData'
import Time from './Time';

const TimeZone = () => {
    const [timeZones, settimeZones] = useState();
    const [timeZoneSelect,setSelectTimeZone] = useState("Europe/London");
    useEffect(()=>{
        const dataFetcher = async()=>{
            var prom =  await getData();
            settimeZones(prom.data.zones);
        } 
        dataFetcher();    
    },[])

    const handleSelect = (value)=>{
        setSelectTimeZone(value);
    }

    return (
        <div>
            <Time selectedTimeZone={timeZoneSelect}/>
             <DropdownButton
                alignRight
                title="TimeZones"
                id="dropdown-menu-align-right"
                onSelect={handleSelect}
            >
               {timeZones&&timeZones.map((zone,idx)=>{
                        return <Dropdown.Item eventKey={zone.zoneName} key={idx}>{zone.zoneName}</Dropdown.Item>
                    })}
            </DropdownButton>   
        </div>
    ) 
}

export default TimeZone
