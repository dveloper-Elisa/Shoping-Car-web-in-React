export default function Home() {
  return (
    <>
      <div
        id="home"
        className="md:flex md:mx-16 md:items-center md:justify-between md:my-2 m-2"
      >
        <div className="md:flex md:flex-col  justify-center gap-2 md:max-w-[25vw] flex  flex-col max-w-[50vw] m-16">
          <h3 className="text-sky-900 font-bold first-letter:uppercase">
            merce Denz <a href="#benzi">benzi</a>
          </h3>
          <p className="text-[30px] text-white">
            THE LATEST
            <strong className="text-orange-400 first-line:uppercase">
              BENZI
              <br />
            </strong>
            CAR PRIZE
          </p>
          <p className="text-white">
            here choice is for you and customer is king, make choice
            <code>price is very low than what you expect.</code>
          </p>
          <button className="bg-green-600 rounded text-white w-32 my-2 py-1">
            Buy Now
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="./photo/10-removebg-preview.png"
            alt="first image not found"
            className="-rotate-12 max-w-3xl z-0"
          />
        </div>

        {/* the cards to create */}

        <div className="md:flex md:flex-col flex-wrap flex justify-center mt-12 gap-3">
          <div className="bg-gray-700 max-w-fit flex justify-end rounded-xl">
            <img
              src="./photo/3-removebg-preview.png"
              alt="second image"
              className=" rounded-xl p-1 max-w-[15rem]"
            />
          </div>

          <div className="bg-gray-700 max-w-fit flex justify-end rounded-xl ">
            <img
              src="./photo/5-removebg-preview.png"
              alt="second image"
              className=" rounded-xl p-1 max-w-[15rem]"
            />
          </div>

          <div
            id="benzi"
            className="bg-gray-700 max-w-fit flex justify-end rounded-xl"
          >
            <img
              src="./photo/6-removebg-preview.png"
              alt="second image"
              className=" rounded-xl p-1 max-w-[15rem]"
            />
          </div>
          <div className="bg-gray-700 max-w-fit flex justify-end rounded-xl">
            <img
              src="./photo/7-removebg-preview.png"
              alt="second image"
              className=" rounded-xl p-1 max-w-[15rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
