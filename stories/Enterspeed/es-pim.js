import React from "react";
import "./es-pim.css";

/**
 * VacationHouseList
 */
export default function EsPim({ EsPimData }) {
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
      <VacationCard
        key={index.toString()}
        img={image}
        headline={headline}
        address={address}
        lead={lead}
        currency={currency}
        price={price}
        stayType={stayType}
        number={number}
        favourite={index.toString()}
      />
    );
  });

  return (
    <>
      <div className='vacation-houses-wrapper'>
        <div className='vacation-houses'>
            {VacationHouseList}
          </div>
          <div className='vacation-houses__map'>

          </div>
      </div>
    </>
  );
}

class VacationCard extends React.Component {
  render() {
    return(
        <article className="vacation-house-card">
          <div className={this.props.favourite == 0 ? "vacation-house-card__fav-icon--active" : "vacation-house-card__fav-icon"}></div>
          <div className="vacation-house-card__image">
            <img src={"/vacation-houses/" + this.props.img} />
          </div>
          <section className="vacation-house-card__content">
            <header className="vacation-house-card__header">
              <h2 className="vacation-house-card__headline">{this.props.headline}</h2>
              <h3 className="vacation-house-card__address">{this.props.address}</h3>
            </header>
            <p className="vacation-house-card__lead">{this.props.lead}</p>
            <footer className="vacation-house-card__footer">
              <img src="/vacation-houses/vacation-houses-price-icon.svg" width="16" height="16" />
              <span className="vacation-house-card__price">{this.props.price}</span>
              <span className="vacation-house-card__stay-type">/ {this.props.stayType}</span>
              <span className="vacation-house-card__number">{this.props.number}</span>
            </footer>
          </section>
        </article>
    )
  }
}
