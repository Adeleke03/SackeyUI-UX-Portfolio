const HeroStat = () => {
  const stats = [
    { value: '5+', label: 'Years', sublabel: 'Experience' },
    { value: '50+', label: 'Projects', sublabel: 'Delivered' },
    { value: '98%', label: 'Client', sublabel: 'Satisfaction' }
  ];
  
  return (
    <div className="flex lg:gap-[33px] gap-4 md:gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="text-start w-full">
          <div className="gradient-text font-[700] lg:text-[37px] md:text-[32px] text-[30px] lg:leading-[37px] md:leading-[32px] leading-[30px] tracking-normal">
            {stat.value}
          </div>
          <div className="text-sm-style md:flex ">
            <div>{stat.label}</div>
            <div className="md:pl-2">{stat.sublabel}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroStat;
