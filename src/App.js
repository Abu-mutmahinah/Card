import Card from "./Components/CardComponent/Card";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./Components/FormComponent/Form";
import CardDetails from "./Components/cardDetails";
const App = () => {
  const [edit, setEdit] = useState(null);
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    fetch("  http://localhost:8000/cards").then((response) => {
      response.json().then((data) => {
        setCardData(data);
      });
    });
  }, []);
  return (
    <Router>
      <div className="">
        <Switch>
          <div>
            <Route exact path="/">
              {cardData && (
                <Card
                  cardData={cardData}
                  setCardData={setCardData}
                  setEdit={setEdit}
                />
              )}
              {cardData && (
                <Form
                  cardData={cardData}
                  setCardData={setCardData}
                  edit={edit}
                  setEdit={setEdit}
                />
              )}
            </Route>
            <Route path="/cards/:id" component={CardDetails} />
          </div>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
