    import React from 'react'

    const AppleProducts = () => {

      const appleProducts = [
        {
          title: "MAC",
          img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=200&hei=130&fmt=png-alpha&.v=1696964122666"
        },
        {
          title: "iPhone",
          img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_EMEA?wid=200&hei=130&fmt=png-alpha&.v=1692971740071",
        },
        {
          title: "iPad",
          img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664912135437",
        },
        {
          title: "Apple Watch",
          img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_IN?wid=200&hei=130&fmt=png-alpha&.v=1693703814407",
        },
        {
          title: "AirPods",
          img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=200&hei=130&fmt=png-alpha&.v=1660676485885",
        },
        {
          title: "AirTag",
          img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=200&hei=130&fmt=png-alpha&.v=1625783380000",
        },
        {
          title: "Apple TV 4K",
          img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=200&hei=130&fmt=png-alpha&.v=1664628458484",
        },
        {
          title: "HomePod",
          img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=200&hei=130&fmt=png-alpha&.v=1670389216654",
        },
        {
          title: "Accessories",
          img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-13-accessories-nav-202309?wid=200&hei=130&fmt=png-alpha&.v=1692803114952",
        },
      ]


      return (
        <>
        <h1 className='font-sans font-semibold text-5xl p-5 pl-40 pb-10 text-gray-900'>Store. <span className='text-gray-500'>The best way to buy the<br />products you love.</span></h1>
        <section className='flex flex-row justify-center items-center w-[85%] m-auto py-8'>
            {appleProducts.map(({img,title},index)=> {
              return <div key={index} className='flex flex-col justify-center items-center gap-5'>
                <img src={img} alt="" className='w-[90%]'/>
                <p>{title}</p>
              </div>
            })}
        </section>
        </>
      )
    }

    export default AppleProducts
    