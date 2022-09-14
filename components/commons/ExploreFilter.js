import { Button, FormControl, MenuItem, Select } from '@mui/material'
import React, { memo, useCallback, useState } from 'react'

function ExploreFilter() {
    const [filterType, setFilterType] = useState('All');


    const handleFilterTypeChange = useCallback((e, type) => {
        if (type === 'mobile') {
            setFilterType(e.target.value)
        } else {
            console.log(e.target.innerText)
            setFilterType(e.target.innerText)
        }
    }, [])
    return (
        <div >
            <h2 className='font-bold mb-4 text-2xl'>Explore</h2>
            <div>
                <div className='md:hidden'>
                    <FormControl sx={{
                        '& .MuiOutlinedInput-root': {
                            backgroundColor: 'red'
                        }
                    }}>
                        <Select
                            value={filterType}
                            onChange={(e) => handleFilterTypeChange(e, 'mobile')}
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value={'all'}>All</MenuItem>
                            <MenuItem value={"Online Events"}>Online Events</MenuItem>
                            <MenuItem value={"upcoming Events"}>Upcoming Events</MenuItem>
                            <MenuItem value={"New Events"}>New Events</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className='hidden items-center space-x-5 md:flex'>
                    <Button onClick={(e) => handleFilterTypeChange(e, 'web')} className='!bg-sec-2 !text-white !rounded-full !font-bold !py-2 !px-5' variant="contained">All</Button>
                    <Button onClick={(e) => handleFilterTypeChange(e, 'web')} className='!bg-sec-2 !text-white !rounded-full !font-bold !py-2 !px-5' variant="contained">Online Events</Button>
                    <Button onClick={(e) => handleFilterTypeChange(e, 'web')} className='!bg-sec-2 !text-white !rounded-full !font-bold !py-2 !px-5' variant="contained">Upcoming Events</Button>
                    <Button onClick={(e) => handleFilterTypeChange(e, 'web')} className='!bg-sec-2 !text-white !rounded-full !font-bold !py-2 !px-5' variant="contained">New Events</Button>
                </div>

            </div>

        </div>
    )
}

export default memo(ExploreFilter)