import React, { useState } from "react";

const DrinkInputGroup = ({ onCreate }) => {
  const [ordererValue, setOrdererValue] = useState("");
  const [drinkValue, setDrinkValue] = useState("");
  const [detailValue, setDetailValue] = useState("");
  const handleOrdererChange = (e) => {
    setOrdererValue(e.target.value);
  };
  const handleDrinkChange = (e) => {
    setDrinkValue(e.target.value);
  };
  const handleDetailChange = (e) => {
    setDetailValue(e.target.value);
  };
  const handleCreate = () => {
    const order = { ordererValue, drinkValue, detailValue };
    onCreate && onCreate(order);
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="訂購人"
        onChange={handleOrdererChange}
      />
      <input
        type="text"
        className="form-control"
        placeholder="飲品名稱"
        onChange={handleDrinkChange}
      />
      <input
        type="text"
        className="form-control mr-1"
        placeholder="糖度冰塊"
        onChange={handleDetailChange}
      />
      <button className="btn btn-primary" onClick={handleCreate}>
        新增
      </button>
    </div>
  );
};

export default DrinkInputGroup;
