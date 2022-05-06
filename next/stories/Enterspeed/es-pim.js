import React from "react";
import "./es-pim.css";

function ListItem(props) {
  console.log(props);

  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;

  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

function ProductList(props) {
  const products = props.products;

  return (
    <ul>
      {products.map((product, index) => (
        <ListItem key={index.toString()} value={product} />
      ))}
    </ul>
  );
}

/**
 * This is the raw data as stored in the PIM.
 */
export default function EsPim({ EsPimData }) {
  // const VacationHouses = [1, 2, 3, 4, 5];
  const VacationHouses = EsPimData.views.enterspeedVacationHouses.cmsProducts;

  const VacationHouseList = VacationHouses.map((vacationHouse, index) => {
    const {
      address,
      currency,
      headline,
      image,
      lat,
      lead,
      lon,
      number,
      price,
      stayType,
    } = vacationHouse[0];
    return (
      <div
        style={{
          padding: "16px",
          backgroundColor: "lightblue",
          marginBottom: "32px",
        }}
        key={index.toString()}
      >
        <div>{address}</div>
        <div>{currency}</div>
        <div>{headline}</div>
        <div>{image}</div>
        <div>{lat}</div>
        <div>{lead}</div>
        <div>{lon}</div>
        <div>{number}</div>
        <div>{price}</div>
        <div>{stayType}</div>
      </div>
    );
  });

  return (
    <>
      {/* <h1>
        {EsPimData.views.enterspeedVacationHouses.cmsProducts[0][0].headline}
      </h1>/
      <NumberList numbers={numbers} />
      <pre>{JSON.stringify(EsPimData, null, 2)}</pre>
      <pre>{VacationHouses[0][0].name}</pre> */}
      {VacationHouseList}
    </>
  );
}
