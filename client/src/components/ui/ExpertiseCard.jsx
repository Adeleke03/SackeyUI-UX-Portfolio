import React from "react";
import expertcard1 from "../../assets/expertcard1.png";
import expertcard2 from "../../assets/expertcard2.png";
import expertcard3 from "../../assets/expertcard3.png";
import expertcard4 from "../../assets/expertcard4.png";

const ExpertiseCard = () => {
  const imgg = [expertcard1, expertcard2, expertcard3, expertcard4];
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center gap-8 p-5 lg:gap-5 my-10">
      {imgg.map((item, index) => (
        <img src={item} alt="cards" />
      ))}
    </div>
  );
};

export default ExpertiseCard;
