import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
        <div className="home__container">
          <img 
          className="home__image"
          src="https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af"
          //src="https://pitronix.in/wp-content/uploads/2020/09/pc_for_hobbyist.png"
              alt=""
          />

        <div className="home__row">
        < Product
           title="Leather Sofa"
            price={12799.0}
            rating={4}
            image="https://dl.airtable.com/.attachmentThumbnails/a2f371071cf292badbb621294758b600/ca963b31"
           
           />
           < Product
           title="High-Back Bench"
            price={16599.0}
            rating={4}
            image="https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f"
            
           />
            
        </div>
      {/*  <div className="home__row">
        < Product
           title="eZeePC Premium: 8GB RAM, 32 GB Memory, 1080P Full HD Webcam"
            price={239.0}
            rating={4}
            image="https://pitronix.in/wp-content/uploads/2020/09/ezeepc_front_view-300x229.png"
           />
           < Product
           title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
           />
           < Product
           title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
           />
          
        </div>*/}
        <div className="home__row">
        < Product
           title="Emperor Bed"
            price={20899.0}
            rating={5}
            image="https://dl.airtable.com/.attachmentThumbnails/0446e84c5bca9643de3452a61b2d6195/1b32f48b"
           
           />
           
            
        </div>
        </div>
           
        </div>
    )
}

export default Home
