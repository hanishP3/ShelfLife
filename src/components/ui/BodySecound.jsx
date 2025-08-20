import React from "react";

function BodySecound() {
  return (
    <>
      <div className="body-height">
        <h1 className="body-mainHeading">Our Solution</h1>
        <div className="flex flex-row gap-4">
          <div>
            <img
              src="/images/shopKeeperStoreInShelflife.png"
              alt="Shopkeeper managing stock details on laptop"
              className="body-images"
            />
            <h3 className="body-imagesMainText">
              Shopkeeper easily updates stock in ShelfLife
            </h3>
            <p className="body-imagesSubText">
              Keep track of all your products in one place — simple, fast, and
              organized.
            </p>
          </div>

          <div>
            <img
              src="\images\shopKeeperGotAn Notification.png"
              alt="Shopkeeper receiving expiry notification on phone"
              className="body-images"
            />
            <h3 className="body-imagesMainText">
              Get expiry alerts before it’s too late
            </h3>
            <p className="body-imagesSubText">
              ShelfLife notifies you when products are close to expiry, so you
              can act in time.
            </p>
          </div>

          <div>
            <img
              src="/images/happyUserAndCustomer.png"
              alt="Happy customer with shopkeeper"
              className="body-images"
            />
            <h3 className="body-imagesMainText">
              Building Trust, Creating Smiles
            </h3>
            <p className="body-imagesSubText">
              Customers feel valued when fresh and safe goods are delivered.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BodySecound;
