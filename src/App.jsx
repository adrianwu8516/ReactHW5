import React from "react";
import DrinkCard from "./DrinkCard";
import DrinkInputGroup from "./DrinkInputGroup";
import "./styles.css";

/**
 * hint:
 * 更新狀態時記得使用 immutable 的方式
 * ex. setDrinks([...drinks, newDrink])
 */

const App = () => {
  const drinks = [
    {
      name: "烏龍綠",
      options: "半糖去冰",
      buyer: "kk"
    },
    {
      name: "珍奶",
      options: "無糖少冰",
      buyer: "ken"
    }
  ];
  return (
    <main className="py-5">
      <div className="container">
        <DrinkInputGroup
          onCreate={(value) => {
            console.log("create", JSON.stringify(value));
            drinks.push({
              name: value.drinkValue,
              options: value.detailValue,
              buyer: value.ordererValue
            });
            console.log(JSON.stringify(drinks));
          }}
        />
        {drinks.map((drink, index) => (
          <DrinkCard
            key={index}
            buyer={drink.buyer}
            name={drink.name}
            options={drink.options}
            onDelete={(order) => {
              for (let number in drinks) {
                if (
                  drinks[number].buyer === order.buyer &&
                  drinks[number].name === order.name &&
                  drinks[number].options === order.options
                ) {
                  console.log("delete", JSON.stringify(drinks[number]));
                  drinks.pop(number);
                  console.log(JSON.stringify(drinks));
                }
              }
            }}
          />
        ))}
      </div>
    </main>
  );
};

export default App;
