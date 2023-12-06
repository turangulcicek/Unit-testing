import React, { useEffect, useState } from "react";
import Card from "../Card";
import axios from "axios";

const Scoops = () => {
  const [scoopData, setScoopData] = useState([]);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    axios
      .get(" http://localhost:3010/scoops")
      .then((res) => setScoopData(res.data));
  }, []);
  return (
    <div className="container my-5">
      <h1>
        Dondurma Çeşitleri
        <p>
          Tanesi <span className="text-success">20 TL </span>
        </p>
        <h3>
          Ücret <span className="text-success">{basket.length * 20} TL</span>
        </h3>
        <div className="row gap-5 p-3 justify-content-between mt-4">
          {scoopData.map((i) => (
            <Card setBasket={setBasket} basket={basket} key={i.name} data={i} />
          ))}
        </div>
      </h1>
    </div>
  );
};

export default Scoops;
