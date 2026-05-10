import React from "react";
import customer1 from "../../assets/customer1.png";
import customer2 from "../../assets/customer2.png";
import customer3 from "../../assets/customer3.png";
import quote from "../../assets/quote.png";
import star from "../../assets/star.png";

const TestimonialCard = () => {
  const testimonies = [
    {
      id: 1,
      imgg: customer1,
      to: "https://www.linkedin.com/feed/update/urn:li:activity:7419712621010075648?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7419712621010075648%2C7420073522481229825%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287420073522481229825%2Curn%3Ali%3Aactivity%3A7419712621010075648%29",
      feedback:
        '"Well said. In fintech, confidence is the real conversion metric. Clean, calm, and trustworthy beats fancy every time. "',
      name: "Md Mehedi Hasan Roni",
      rank: "Product Designer",
    },
    {
      id: 2,
      imgg: customer2,
      to: "https://www.linkedin.com/feed/update/urn:li:activity:7419712621010075648?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7419712621010075648%2C7420061664940728321%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287420061664940728321%2Curn%3Ali%3Aactivity%3A7419712621010075648%29",
      feedback:
        '"Exceptional attention to detail and user experience. The design system they created became the foundation of our entire product suite."',
      name: "Michael Rodriguez",
      rank: "CEO, StartupX",
    },
    {
      id: 3,
      imgg: customer3,
      to: "https://www.linkedin.com/feed/update/urn:li:activity:7419712621010075648?commentUrn=urn%3Ali%3Acomment%3A%28activity%3A7419712621010075648%2C7420061664940728321%29&dashCommentUrn=urn%3Ali%3Afsd_comment%3A%287420061664940728321%2Curn%3Ali%3Aactivity%3A7419712621010075648%29",
      feedback: '"Love this, trust and clarity always beat flashy UI."',
      name: "Rosemary Rotimi",
      rank: "Product Designer",
    },
  ];
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 my-10 mx-auto">
      {testimonies.map((item) => (
        <a
          key={item.id}
          href={item.to}
          target="_blank"
          className=" border-[0.84px] border-[#FFFFFF1A] w-[368.67px] h-[418.22px] rounded-[25.12px] p-7 bg-linear-to-r from-[#FFFFFF0D] to-[#00000000] flex flex-col"
        >
          <div className="bg-linear-to-r from-[#00B8DB33] to-[#AD46FF33] w-[50.24px] h-[50.24px] rounded-[14.65px] flex items-center justify-center">
            <img src={quote} alt="quote" />
          </div>
          <p className="mt-8  text-[#D1D5DC] font-normal text-[16.75px]">
            {item.feedback}
          </p>
          <div className="mt-auto">
            <div className="flex flex-row gap-2 mb-5">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="flex items-center gap-3">
              <img src={item.imgg} alt="" />
              <div>
                <h3 className="font-bold text-[16.75px]">{item.name}</h3>
                <p className="text-[#99A1AF] font-normal text-[14.65px]">
                  {item.rank}
                </p>
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default TestimonialCard;
