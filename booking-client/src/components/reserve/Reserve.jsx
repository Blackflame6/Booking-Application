import "./reserve.css";
import useFetch from "../../components/hooks/useFetch";
import { useState } from "react";

const Reserve = ({ setOpenModal, hotelId }) => {
  const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
  const [selectedRrooms, setSelectedRooms] = useState([])

  const handleSelect = () => {

  }
  return (
    <div className="reserve">
      <div className="rContainer">
        <button onClick={() => setOpenModal(false)} className="rClose">
          X
        </button>
        <span>Select your rooms:</span>
        {data &&
          data.map((item, i) => (
            <div className="rItem" key={i}>
              <div className="rItemInfo">
                <div className="rTitle">{item.title}</div>
                <div className="rDesc">{item.desc}</div>
                <div className="rMax">
                  Max people <b>{item.maxPeople}</b>
                </div>
                <div className="rPricw">{item.price}</div>
              </div>
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input type="select" value={roomNumber._id} onChange={handleSelect} />
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Reserve;
