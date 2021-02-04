import React from 'react';
import {render,fireEvent} from '@testing-library/react';
import TimeZone from './TimeZone';
import getData from '../utils/getData';
import Time from './Time';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

it('renders correctly',()=>{
    const {queryByTestId} = render(<TimeZone/>);

    expect(queryByTestId('dropdown-timezone')).toBeTruthy();
    
})



