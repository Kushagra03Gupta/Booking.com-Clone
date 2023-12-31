import React, { useState } from 'react'
import "../header/Header.scss"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import format from 'date-fns/format';
import { useNavigate } from 'react-router-dom';

export const Header = ({type}) => {

    const [destination, setDestination] = useState(""); 

    const [date, setDate] = useState([
        {
            startDate: new Date(), 
            endDate: new Date(), 
            key: 'selection'
        }
    ]);

    const [open, setOpen] = useState(false); 

    const [openOption, setOpenOption] = useState(false); 
    const [option, setOption] = useState(
        {
            adult: 1, 
            children: 0, 
            room: 1
        }
    )

    const navigate = useNavigate()

    const handleOption = (name, operation) => {
        setOption((prev)=>{return{
            ...prev, [name]: operation === 'i' ? option[name] + 1 : option[name] - 1
        }})
    }

    const handleSearch = () => {
        navigate("/hotels", {state: {destination,date,option}})
    }

  return (
    <div className='header'>
        <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
                <div className="headerListItemActive">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
            { type !== "list" && (
                <>
                    <h1 className="headerTitle">Home is where you book it</h1>
                    <p className="headerDesc">And we've got just the place for you</p>
                    <button className='headerButton'>Explore vacation rentals</button>
    
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input type="text" placeholder='Where are you going?' className='headerSearchInput' onChange={e=>setDestination(e.target.value)}/>
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span className='headerSearchText' onClick={() => setOpen(!open)}>
                            {`${format(date[0].startDate,"dd/MM/yyy")}`} to {`${format(date[0].endDate,"dd/MM/yyy")}`}
                        </span>
    
                        {open && (
                            <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                            className = "date"
                            />
                        )}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />                    
                        <span className='headerSearchText' onClick={() => setOpenOption(!openOption)}>
                            {`${(option.adult)}  adult ~ ${(option.children)} children ~ ${(option.room)} room`}   
                        </span>
    
                        {openOption && (
                            <div className="options">
                            <div className="optionItem">
                                <span className='optionText'>Adult</span>
                                <div className="optionCounter">
                                    <button disabled={option.adult <=1} className='optionCounterButton' onClick={() => handleOption("adult", "d")}>-</button>
                                    <span className="optionCounterNumber">{option.adult}</span>
                                    <button className='optionCounterButton' onClick={() => handleOption("adult", "i")}>+</button>
                                </div>
                                
                            </div>
                            <div className="optionItem">
                                <span className='optionText'>Children</span>
                                <div className="optionCounter">
                                    <button disabled={option.children <=0} className='optionCounterButton' onClick={() => handleOption("children", "d")}>-</button>
                                    <span className="optionCounterNumber">{option.children}</span>
                                    <button className='optionCounterButton' onClick={() => handleOption("children", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className='optionText'>Room</span>
                                <div className="optionCounter">
                                    <button disabled={option.room <=1} className='optionCounterButton' onClick={() => handleOption("room", "d")}>-</button>
                                    <span className="optionCounterNumber">{option.room}</span>
                                    <button className='optionCounterButton' onClick={() => handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>
                        )} 
                    </div>
                    <div className="headerSearchItem">
                        <button className='headerButton' onClick={handleSearch}>Search</button>
                    </div>
                </div>
                </>
            )}
        </div>
    </div>
  )
}
