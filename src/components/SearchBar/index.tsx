import 'react-calendar/dist/Calendar.css';

import { CalendarsDiv, DatesDiv, FindDiv, SearchDiv } from './styles';
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

  const [showSearchInfos, setShowSearchInfos] = useState(true);
  const [showOnlyFindDiv, setShowOnlyFindDiv] = useState(true);

  useEffect(() => {
    window.addEventListener('resize', showOrNot);
    return function cleanup() {
      window.removeEventListener('resize', showOrNot);
    };
  });

  const showOrNot = () => {
    if (window.innerWidth > 901) {
      setShowSearchInfos(true);
      setShowOnlyFindDiv(false);
    } else if (window.innerWidth <= 901 && window.innerWidth > 408) {
      setShowSearchInfos(false);
      setShowOnlyFindDiv(false);
    } else if (window.innerWidth <= 408) {
      setShowSearchInfos(false);
      setShowOnlyFindDiv(true);
    }
  };

  return (
    <>
      {showSearchInfos && (
        <SearchDiv>
          <Image
            src='/assets/map_pin.svg'
            alt='Map Pin'
            width={18}
            height={18}
          />
          <span>North Carolina, NC 90025</span>
          <DatesDiv>
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
          </DatesDiv>
          <FindDiv>
            <Image
              src='/assets/search.svg'
              alt='Map Pin'
              width={18}
              height={18}
            />
          </FindDiv>
        </SearchDiv>
      )}

      {!showSearchInfos && (
        <SearchDiv style={{ width: 'auto', paddingLeft: '3px' }}>
          {!showOnlyFindDiv && (
            <span
              style={{ margin: '0 1rem', fontSize: '1rem', color: '#a8a8aa' }}
            >
              Search
            </span>
          )}
          <FindDiv>
            <Image
              src='/assets/search.svg'
              alt='Map Pin'
              width={18}
              height={18}
            />
          </FindDiv>
        </SearchDiv>
      )}

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
