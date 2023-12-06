import axios from "axios";
import { useEffect, useState } from "react";

const Toppings = () => {
  const [toppingData, setToppingData] = useState([]);
  const [basket, setBasket] = useState([]);
  useEffect(() => {
    axios
      .get(" http://localhost:3010/toppings")
      .then((res) => setToppingData(res.data))
      .catch((err) => console.log(err));
  }, []);
  // her sos seçildiğinde çalışır

  const handleChange = (e, item) => {
    e.target.checked
      ? setBasket([...basket, item]) /* input tikliyse sepete ekle */
      : setBasket(basket.filter((i) => i.name !== item.name)); /* input tikli değilse sepetten çıkarır */
  };
  console.log(basket);
  return (
    <div className="container">
      <h1>Sos çeşitleri</h1>
      <h2>
        Tanesi <span className="text-success">3 TL</span>
      </h2>
      <h3>
        Soslar ücreti:{" "}
        <span className="text-success">{basket.length * 3} TL </span>
      </h3>
      <div className="d-lg-flex justify-content-lg-between gap-3 mt-4">
        {toppingData.map((data) => (
          <div
            key={data.name}
            className="d-flex flex-column align-items-center gap-1 top-card  py-2 px-4 rounded-5"
          >
            <label
              htmlFor={data.name}
              className="d-flex flex-column align-items-center gap-3"
            >
              <img height={100} src={data.imagePath} alt="topping-img" />
              <h5>{data.name}</h5>
            </label>
            <input
              onChange={(e) => handleChange(e, data)}
              id={data.name}
              className="form-check-input"
              type="checkbox"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toppings;
