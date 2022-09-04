import React from "react";
import { BsFillCalendarCheckFill } from "react-icons/bs";

const CustomDateInput = React.forwardRef(({ value, onClick }, ref) => (
  <div className="flex items-center gap-3">
    {value && (
      <div className="text-xs rounded bg-red-700 text-white px-2 py-0.5">
        {value}
      </div>
    )}
    {!value && (
      <div className="text-xs rounded bg-red-700 text-white px-2 py-0.5">
        TODAY
      </div>
    )}
    <button className="text-lg" onClick={onClick} ref={ref}>
      <BsFillCalendarCheckFill />
    </button>
  </div>
));

export default CustomDateInput;
