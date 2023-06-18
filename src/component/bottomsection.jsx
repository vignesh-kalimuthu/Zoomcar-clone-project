import React from "react";

const ImageOverlayComponent = () => {
  return (
    <div className="relative">
      <img
        src={process.env.PUBLIC_URL + "/people.png"}
        alt="Image"
        className="h-96 w-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center">
  <div className="flex flex-col items-center">
    <div className="py-5 px-5 mb-90 max-w-40 h-46 bg-black bg-opacity-40 flex items-center justify-center">
      <h1 className="text-white text-3xl font-bold">Largest car sharing marketplace<br/>
Sedans for short distances, SUVs for tough terrains, luxury cars for surprises - we have got it all!</h1>
    </div>
    



  </div>
</div>

    </div>
  );
};

export default ImageOverlayComponent;