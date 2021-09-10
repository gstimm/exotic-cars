import 'react-calendar/dist/Calendar.css';

import { CalendarsDiv, SearchDiv } from './styles';
import React, { useEffect, useState } from 'react';

import Calendar from 'react-calendar';
import Image from 'next/image';

const SearchBar = () => {
  const [viewFirstCalendar, setViewFirstCalendar] = useState(false);
  const [viewSecondCalendar, setViewSecondCalendar] = useState(false);
  const [firstDate, setFirstDate] = useState(new Date());
  const [secondDate, setSecondDate] = useState(new Date());

  function handleViewFirstCalendar() {
    setViewFirstCalendar(!viewFirstCalendar);
  }

  function handleViewSecondCalendar() {
    setViewSecondCalendar(!viewSecondCalendar);
  }

  return (
    <>
      <SearchDiv>
        <Image src='/assets/map_pin.svg' alt='Map Pin' width={18} height={18} />
        <span>North Carolina, NC 90025</span>
        <div className='dates'>
          <div onClick={handleViewFirstCalendar}>
            <Image
              src='/assets/calendar.svg'
              alt='Map Pin'
              width={18}
              height={18}
            />
            <span>
              {firstDate.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </span>
          </div>
          <div onClick={handleViewSecondCalendar}>
            <Image
              src='/assets/calendar.svg'
              alt='Map Pin'
              width={18}
              height={18}
            />
            <span>
              {secondDate.toLocaleDateString('pt-BR', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
              })}
            </span>
          </div>
        </div>
        <div className='search'>
          <Image
            src='/assets/search.svg'
            alt='Map Pin'
            width={18}
            height={18}
          />
        </div>
      </SearchDiv>
      <CalendarsDiv>
        {viewFirstCalendar && (
          <Calendar onChange={setFirstDate} value={firstDate} />
        )}
        {viewSecondCalendar && (
          <Calendar onChange={setSecondDate} value={secondDate} />
        )}
      </CalendarsDiv>
    </>
  );
};

export default SearchBar;
