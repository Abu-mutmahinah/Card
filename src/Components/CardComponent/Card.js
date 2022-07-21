import { FiTrash } from "react-icons/fi";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const Card = ({ cardData, setCardData, setEdit }) => {
  // FUNCTION TO HANDLE DELETING EACH CARD
  const handleDelete = ({ id }) => {
    const filtercard = cardData.filter((item) => item.id !== id);
    setCardData(filtercard);
  };

  // FUNCTION TO HANDLE EDITING ITEMS FROM THE CARD
  const handleEdit = ({ id }) => {
    const findItem = cardData.find((item) => item.id === id);
    setEdit(findItem);
  };
  return (
    <div>
      {cardData.map((data) => {
        return (
          <div key={data.id} className="Card-container mt-5">
            {/* ICON OF THE CARD */}
            <div className="Icon">
              <div className="buttons mt-10 flex justify-center">
                <FiTrash
                  className="trash text-gray-500 cursor-pointer  "
                  onClick={() => handleDelete(data)}
                />
                <BiEdit
                  className=" trash text-gray-500 "
                  onClick={() => handleEdit(data)}
                />
              </div>
              <img src={data.img} alt="" />
            </div>

            {/* DETAILS ABOUT THE CARD START HERE */}
            <div className="card-details">
              {/* THE  HEAD OF THE CARD THAT HOLDS THE CARD TYPE AND THE DATE  */}
              <div className="header">
                <div className="card-type uppercase">{data.name}</div>
                <div className="day">{data.date}</div>
              </div>

              <div className="title">
                {" "}
                <h1>{data.title}</h1>
              </div>
              <div className="body">{data.body}</div>

              <div className={`footer ${data.className}`}>
                <div className="flex items-center gap-3">
                  <img src={data.img} alt="" className="avatar" />
                  <p>Glen Williams</p>
                </div>
                <Link to={`/cards/${data.id}`}>
                  <div className="readMore">Read more 🡢</div>
                </Link>
              </div>
            </div>
            {/* DETAILS ABOUT THE CARD ENDS HERE */}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
