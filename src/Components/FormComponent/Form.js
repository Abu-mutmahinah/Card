import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import phone from "../Images/phone.png";

const Form = ({ cardData, setCardData, edit, setEdit }) => {
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  //FUNCTION TO HANDLE UPDATING CARD
  const updateCard = (name, date, title, body, img, id) => {
    const NewCard = cardData.map((item) =>
      item.id === id ? { name, date, title, body, img, id } : item
    );
    setCardData(NewCard);
    setEdit("");
  };
  useEffect(() => {
    if (edit) {
      setType(edit.name);
      setDate(edit.date);
      setBody(edit.body);
      setTitle(edit.title);
    } else {
      setType("");
      setDate("");
      setBody("");
      setTitle("");
    }
  }, [edit]);
  const onFormsubmit = (e) => {
    e.preventDefault();
    if (!edit) {
      setCardData([
        ...cardData,
        {
          id: uuidv4(),
          name: type,
          date: date,
          title: title,
          body: body,
          img: phone,
        },
      ]);
      setType("");
      setDate("");
      setTitle("");
      setBody("");
    } else {
      updateCard(type, date, title, body, edit.img, edit.id);
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold text-xl mt-10">ADD NEW CARD</h1>
      <form action="" className="Form">
        <input
          type="text"
          placeholder="Enter Type"
          className="input"
          value={type}
          onChange={(e) => setType(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Enter Time"
          className="input"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Title "
          className="input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          type="text"
          placeholder="Enter Body "
          className="input"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
          rows="5"
        ></textarea>

        <button className="button" onClick={onFormsubmit}>
          {edit ? "SAVE CHANGES" : "ADD CARD"}
        </button>
      </form>
    </div>
  );
};

export default Form;
