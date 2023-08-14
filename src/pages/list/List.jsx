import React, { useState } from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/Header'
import { useLocation } from 'react-router-dom'
import "../list/List.scss"
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { SearchItem } from '../../components/searchItem/SearchItem'



export const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [option, setOption] = useState(location.state.option);
  const [date, setDate] = useState(location.state.date); 
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in date</label>
              <span className='dateSpan' onClick={() => setOpen(!open)}>
                {`${format(date[0].startDate,"dd/MM/yyy")}`} to {`${format(date[0].endDate,"dd/MM/yyy")}`}
              </span>
              {open && 
              (
              <DateRange
                onChange={(item) => setDate([item.selection])}
                minDate={new Date()}
                ranges={date}
              />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOption">
                  <span className="lsOptionText">Min price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOption">
                  <span className="lsOptionText">Max price <small>per night</small></span>
                  <input type="number" className="lsOptionInput" />
                </div>

                <div className="lsOption">
                  <span className="lsOptionText">Adult</span>
                  <input type="number" className="lsOptionInput" placeholder={option.adult} />
                </div>

                <div className="lsOption">
                  <span className="lsOptionText">Children</span>
                  <input type="number" className="lsOptionInput" placeholder={option.children} />
                </div>

                <div className="lsOption">
                  <span className="lsOptionText">Room</span>
                  <input type="number" className="lsOptionInput" placeholder={option.room} />
                </div>
              </div>
            </div>

            <button className='searchButton'>Search</button>
          </div>

          <div className="listResult">
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
            <SearchItem/>
          </div>
        </div>
      </div>
    </div>
  )
}
