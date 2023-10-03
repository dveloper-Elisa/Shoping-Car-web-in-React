export default function Collection() {
  return (
    <>
      <h1 className="text-center text-white font-extrabold tracking-widest my-10 text-[25px]">
        Our Collection.
      </h1>

      <div
        id="collection"
        className="grid lg:grid-cols-2 md:grid-cols-2 gap-4 items-center mx-16"
      >
        <div className="bg-gray-800 overflow-hidden text-white grid md:grid-flow-row items-center gap-12">
          <div className="flex flex-col p-2 justify-end">
            <h4 className="text-amber-300 animate-pulse text-[40px] first-letter:uppercase py-5 ">
              provided by this week
            </h4>
            <p className="text-white font-mono">
              This is the bughat New Vasion
            </p>
            <p className="tracking-widest text-[45px] font-extrabold">UPTO</p>
            <strong className="font-bold text-[25px]">55% OFF</strong>
          </div>
          <div className="flex justify-end">
            <img
              src="./public/photo/12-removebg-preview.png"
              alt="photo not found"
              className="mix-blend-hard-light -rotate-12"
            />
          </div>
        </div>
        <div className=" text-white grid lg:grid-cols-1 gap-4 mt-10 flex-col justify-end items-center max-w-lg w-full">
          <div className="grid lg:w-fir max-w-[100%] bg-gray-800">
            <div className="flex flex-col p-2 justify-between">
              <h4>Hammer</h4>
              <p>
                here we buy new brand <br />
                of Hammer only
              </p>
              <p className="tracking-widest font-extrabold">UPTO</p>
              <button
                type="button"
                className="bg-green-600 p-1 my-1 rounded-md w-fit text-white "
              >
                Order
              </button>
            </div>
            <div className="flex justify-end">
              <img
                src="./public/photo/2-removebg-preview.png"
                alt="photo not found"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 flex-row gap-4 ">
            <div className="flex flex-col items-center bg-gray-800 ">
              <div className="flex flex-col p-1 justify-between">
                <h4>New Hammer </h4>
              </div>
              <img
                src="./public/photo/8-removebg-preview.png"
                alt="photo not found"
                className="h-[20vh] md:w-[12vw] w-fit"
              />
              <button
                type="button"
                className="bg-green-600 rounded-md w-full text-white "
              >
                Order
              </button>
            </div>
            <div className="flex flex-col bg-gray-800 justify-between text-center">
              <div className="flex flex-col p-1 justify-between w-fit">
                <h4>White Hammer </h4>

                <img
                  src="./public/photo/9-removebg-preview.png"
                  alt="photo not found"
                  className=" rounded h-[19vh] md:w-[12vw] w-fit"
                />
              </div>
              <button
                type="button"
                className="bg-green-600 rounded-md text-white w-[100%]"
              >
                Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
