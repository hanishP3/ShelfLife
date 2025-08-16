
function Body() {
  return (
    <div className="body-height">
      <div className="body-mainHeading">Story Time</div>
      <div className="flex flex-row gap-4">
        <div >
          <img
            src="/images/a man buying stock from kirana shop.png"
            alt="man buying stock"
            className="body-images"
          />
          <h3 className="body-imagesMainText">
            Tony Purchase at the Kirana Store
          </h3>
          <p className="body-imagesSubText">
            Everything looks fresh & reliable while buying.
          </p>
        </div>

        <div>
          <img
            src="/images/user gets to know stock is expired.png"
            alt="user discovers expired stock"
            className="body-images"
          />
          <h3 className="body-imagesMainText">The Bitter Surprise</h3>
          <p className="body-imagesSubText">
            Later, the customer realizes the stock is expired.
          </p>
        </div>

        <div>
          <img
            src="/images/user angry on shop keeper.png"
            alt="user angry at shop keeper"
            className="body-images"
          />
          <h3 className="body-imagesMainText">
            Trust Broken, Frustration Rises
          </h3>
          <p className="body-imagesSubText">
            The customer confronts the shopkeeper for selling expired goods.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Body;
