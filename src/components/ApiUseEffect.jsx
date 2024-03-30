import React, { useEffect, useState } from "react";

const ApiUseEffect = () => {
  const [dogImage, setDogImage] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/50")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => setDogImage(data.message))
      .catch((error) => {
        setError(error.message);
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="bg-black">
        <h2 className="text-white text-5xl font-bold text-center mb-5 pt-10 mt-5">
          DATA FROM API
        </h2>
        {error ? (
          <div className="text-red-500 text-center">
            Failed to fetch data. Please try again later.
          </div>
        ) : (
          <div className="flex flex-wrap">
            {dogImage &&
              dogImage.map((dog, index) => (
                <div key={index} className="flex">
                  <div>
                    <img
                      width="200px"
                      height="200px"
                      src={dog}
                      alt="dog-img"
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </>
  );
};
export default ApiUseEffect;
