import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    fetch("http://localhost:8000/cards/" + id)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);

  const [detail, setDetail] = useState({});

  return (
    <div>
      {detail && (
        <div className="flex flex-col justify-center items-center">
          <div className="text-3xl font-bold">{detail.title}</div>
          <div className="text-center w-[400px] mt-10 text-2xl">
            {detail.body}
          </div>
          <Link to="/">
            <button className="mt-10 bg-sky-400 px-3 py-1 rounded">Back</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CardDetails;
