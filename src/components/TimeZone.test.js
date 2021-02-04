import React from 'react';
import {render} from '@testing-library/react';
import TimeZone from './TimeZone';


//test to check if dropdown button renders
it('renders correctly',()=>{
    const {queryByTestId} = render(<TimeZone/>);

    expect(queryByTestId('dropdown-timezone')).toBeTruthy();
    
})




