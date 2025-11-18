import TestCard from '../../atom/TestCard'; 
import testSeriesData from '../../../../public/db/testSeriesData.json';

const Alltest = () => {
  return (
    <div className="px-4  sm:px-6 lg:px-12 py-6">
      <div className="mb-6">
        <h1 className="font-inter font-bold text-[22px] leading-[28px] tracking-[0px] text-gray-900">
          All Test Series
        </h1>
      </div>
      <div className="space-y-6">
        {testSeriesData.map((item, index) => (
          <TestCard
            key={index}
            title={item.title}
            description={item.description}
            currentPrice={item.currentPrice}
            originalPrice={item.originalPrice}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
          />
        ))}
      </div>
    </div>
  );
};

export default Alltest;
