import React from "react";
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays . 26 august to 30 august . 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Price</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
        location="Private room in center of Nakuru"
        title="Stay at this spacious Edwardian House"
        description="1 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . Kitchen . Free parking . Washing Machine"
        star={4.73}
        price="€30 / night"
        total="€117 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/06a169f0-3a47-4384-8ea4-e2de154828ed.jpg?im_w=960"
        location="Nairobi, Nairobi County, Kenya"
        title="Treehouse hosted by Pauline"
        description="2 guests · 1 bedroom · 2 beds · 1 bath . wifi . Kitchen . Free parking . Washing Machine"
        star={3.81}
        price="€90 / night"
        total="€650 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/418eb029-193e-49a1-83dd-25d2b0411227.jpg?im_w=960"
        location="Private room in center of London"
        title="Entire condominium hosted by Peter"
        description="3 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . Kitchen . Free parking . Washing Machine"
        star={4.12}
        price="€80 / night"
        total="€550 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/a79ddd0f-2235-4d65-9310-63f0417122a3.jpg?im_w=960"
        location="Nairobi County, Kenya"
        title="Entire cottage hosted by Eleni"
        description="2 guests · 1 bedroom · 1 bed · 1 bath . wifi . Kitchen "
        star={3.41}
        price="€40 / night"
        total="€350 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/c0538220-fc0e-442e-b5c2-a5b07ea81ece.jpg?im_w=960"
        location="Nairobi,Kenya"
        title="The River Cottage experience"
        description="2 guests · 1 bedroom · 1 bed · 1 bath . wifi . Kitchen . Free parking . Washing Machine"
        star={4.71}
        price="€100 / night"
        total="€850 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/e53ebff6-f6dc-48e9-aad5-b1e202f2e773.jpg?im_w=960"
        location="Nairobi, Nairobi County, Kenya"
        title="JungleBeachSafaris"
        description="8 guests · 4 bedrooms · 5 beds · 4 baths. wifi . Kitchen . Free parking . Washing Machine"
        star={4.76}
        price="€30 / night"
        total="€240 total"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/df52b9e4-e270-4d31-bca2-18f7da4a2ef6.jpg?im_w=960"
        location="Nairobi, Nairobi county , Kenya"
        title="SkyGardens"
        description="3 guest . 1 bedroom . 1 bed . 1.5 shared bathrooms . wifi . Kitchen . Free parking . Washing Machine"
        star={4.81}
        price="€120 / night"
        total="€950 total"
      />
    </div>
  );
}

export default SearchPage;
