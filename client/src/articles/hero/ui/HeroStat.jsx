const HeroStat = () => {
    const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Delivered' },
    { value: '98%', label: 'Client Satisfaction' }
  ];
  return (
    <div className="flex lg:gap-[33px]">
      {stats.map((stat,index)=>(
        <div key={index} className="text-start">
          <div className="gradient-text font-[700]  lg:text-[37px] lg:leading-[37px] tracking-normal">{stat.value}</div>
          <div className="text-sm-style">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default HeroStat;
