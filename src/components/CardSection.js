import React from "react";
import Card from "./Card";

const CardSection = () => {
  return (
    <div>
      <section className="contact bg-success ">
        <div className="container ">
          <h2 className="text-white text-center pt-5 pb-5">We love new Pics!!</h2>
          <div className="row">
            <div className="col-4">
              <Card title="Street" buttonText="visit Me" url="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
              </div>
              <div className="col-4">
              <Card title="Church" buttonText="Visit Me" url="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              </div>
              <div className="col-4">
              <Card title="Building" buttonText="Visit Me" url="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default CardSection;
