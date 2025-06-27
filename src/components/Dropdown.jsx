import { useState } from 'react';
import '../styles/Dropdown.scss';
import arrowUp from '../assets/icon/arrow-up.svg';

function Dropdown({ title, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`dropdown${open ? ' open' : ''}`}>
      <div className="dropdown-header" onClick={() => setOpen((o) => !o)}>
        <span>{title}</span>
        <span className={`dropdown-arrow${open ? ' open' : ''}`}>
          <img src={arrowUp} alt="arrow" />
        </span>
      </div>
      {open && <div className="dropdown-content">{children}</div>}
    </div>
  );
}

export default Dropdown;
