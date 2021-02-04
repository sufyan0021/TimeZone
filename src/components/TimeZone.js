import React, { useState, useContext} from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { TimeContext } from '../context/TimeContext';
import Time from './Time';


const TimeZone = () => {
    const timeZones = useContext(TimeContext);
    const [timeZoneSelect,setSelectTimeZone] = useState("Europe/London");

    const handleSelect = (value)=>{
        setSelectTimeZone(value);
    }

    return (
        <div>
            <Time selectedTimeZone={timeZoneSelect}/>
            <DropdownButton id="dropdown-basic-button"
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
