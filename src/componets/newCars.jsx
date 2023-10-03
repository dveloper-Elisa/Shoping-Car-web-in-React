import arrayOfCar from "../mydata/cars";
import { useState, useEffect } from "react";
import NewcarCompnent from "../pages/newones";

const Newcars = () => {
  const [arrayCars, setArrayCars] = useState([]);

  useEffect(() => {
    setArrayCars(arrayOfCar);
  }, []);

  return (
    <>
      <div
        id="bugati"
        className="flex flex-row justify-center text-white py-10 font-extrabold  tracking-widest text-[20px]"
      >
        <h2> for Bughat</h2>
      </div>
      <div className="m-16 grid sm:grid-cols-2 grid-cols-1 md:grid-cols-3 md:mx-7  lg:grid-cols-4 ">
        {arrayCars.map((car) => {
          return (
            <>
              <span key={car.id}>
                <NewcarCompnent
                  name={car.name}
                  image={car.image}
                  egine={car.Egine}
                />
                ;
              </span>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Newcars;
