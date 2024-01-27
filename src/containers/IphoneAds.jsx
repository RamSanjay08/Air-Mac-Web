import React from "react";

const IphoneAds = () => {
  const productData = [
    {
      id: 1,
      title: "IPHONE 15 PRO",
      mainTitle: "Titanium",
      price: "$1600",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-15-pro-202309?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1692910040844",
    },
    {
      id: 2,
      title: "SPORT BAND",
      mainTitle: "Unity in Bloom",
      price: "$1200",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-bhm-202401?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1703005205962",
    },
    {
      id: 3,
      title: "APPLE WATCH SERIES 9",
      mainTitle: "Smarter Brighter",
      price: "$1800",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-s9-202309_GEO_IN?wid=400&hei=500&fmt=jpeg&qlt=95&.v=1693501324197",
    },
    {
      id: 4,
      title: "IPAD AIR",
      mainTitle: "Light Bright",
      price: "$1500",
      img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-air-202203?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1645636337374",
    },
  ];

  return (
    <>
     <h1 className='font-sans font-semibold text-5xl p-11  text-center pb-10 text-gray-900'>The latest. <span className='text-gray-500'>Take a look at what’s new right now.</span></h1>
    <section className="flex flex-row overflow-x-auto">
      {productData.map(({ id, title, mainTitle, price, img }) => {
        return (
          <div className="w-[400px] h-[500px] mx-4" key={id}>
            <div
              className="bg-cover bg-center w-full h-full text-white rounded-2xl p-5"
              style={{
                backgroundImage: `url(${img})`,
              }}
            >
              <p className="">{title}</p>
              <h3 className="">{mainTitle}</h3>
              <h4 className="">From {price}</h4>
            </div>
          </div>
        );
      })}
    </section>
    </>
  );
};

export default IphoneAds;
