import React, { useState } from "react";

const Card = ({ data, basket, setBasket }) => {
  const found = basket.filter((i) => i.name === data.name);
  const amount = found;
  // sepetteki belirli türdeki ürünleri silme

  const handleReset = () => {
    setBasket(basket.filter((i) => i.name !== data.name));
  };
  return (
    <div
      className="d-flex flex-column text-center align-items-center border rounded mb-3 p-2 bg-black text-light "
      style={{ width: "250px" }}
    >
      <img height={100} src={data.imagePath} alt="çeşit resmi" />
      <span className="fs-4">{data.name}</span>
      <div className="d-flex fs-5 mt-3 align-items-center gap-2">
        <button onClick={handleReset} className="btn btn-danger">
          Sifirla
        </button>
        <span>{found.length}</span>
        <button
          onClick={() => setBasket([...basket, data])}
          className="btn btn-success"
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Card;
