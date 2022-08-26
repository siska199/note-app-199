import React from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { ContainerCards,WrapContainerCards  } from "./homepage.style";
import { getInitialData } from "../utils";

const Hompage = () => {
  const data = getInitialData();
  return (
    <article className="container">
      <Navbar />
      <WrapContainerCards >
        <ContainerCards>
          {data.map((data, i) => <Card key={i} data={data}/>)}
        </ContainerCards>
      </WrapContainerCards>
    </article>
  );
};

export default Hompage;
