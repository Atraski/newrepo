

import React from "react";
// import OfferCard from "./Card/Offercard";
// import { WhatWeOffer } from "./config";
import OfferCard from "./serviceCard";
import { WhatWeOffer } from "./indexfashion";
// import color from "../../constant";
// import OfferCard from "../../components/Card/OfferCard";
// import { WhatWeOffer } from "../../config";

function WhatweOffer() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="container row col-12 d-flex justify-content-center text-center my-5 py-3 py-md-5 px-5 mx-0 offerbg">
          <h1 className="Heading-1 text-center col-12 py-5">Our Services</h1>

          {WhatWeOffer.map((items) => {
            return <OfferCard data={items} />;
          })}
        </div>
      </div>
    </>
  );
}

export default WhatweOffer;
