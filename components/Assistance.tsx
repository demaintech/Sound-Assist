import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { motion } from "framer-motion";

const Assistance = () => {
  return (
    <main className="flex flex-col-reverse gap-10 py-24">
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] min-h-[300px] border-2 flex justify-center items-center border-gray-200 rounded-xl">
          <div className="w-[90%] flex flex-col justify-between items-center py-16 gap-6">
            {/* User Response */}
            <div className="w-[100%] flex justify-end">
              <div className="max-w-[500px] min-h-[50px] bg-gray-200 rounded-lg p-8">
                <h2 className="text-gray-600 text-[16px] font-medium w-[90%] leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facere ratione, quidem blanditiis non quis consequatur
                  laboriosam quos eveniet, doloremque possimus, iure nemo unde
                  sapiente magnam sit enim officia. Ducimus, nihil. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Eum nobis saepe
                  mollitia veritatis aspernatur voluptatum earum, iusto soluta
                  veniam at molestias necessitatibus illo sit esse illum
                  reiciendis quasi. Optio, dolore.
                </h2>
              </div>
            </div>

            {/* AI Response */}
            <div className="w-[100%] flex justify-start">
              <div className="max-w-[500px] min-h-[50px] bg-gray-800 rounded-lg p-8">
                <h2 className="text-gray-300 text-[16px] font-medium w-[90%] leading-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Facere ratione, quidem blanditiis non quis consequatur
                  laboriosam quos eveniet, doloremque possimus, iure nemo unde
                  sapiente magnam sit enim officia. Ducimus, nihil. Lorem ipsum
                  dolor sit, amet consectetur adipisicing elit. Eum nobis saepe
                  mollitia veritatis aspernatur voluptatum earum, iusto soluta
                  veniam at molestias necessitatibus illo sit esse illum
                  reiciendis quasi. Optio, dolore.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-center items-center">
        <div className="w-full flex justify-center items-center">
          <form
            action=""
            className="w-[80%] flex justify-center items-center gap-4 mx-auto"
          >
            <input
              type="text"
              placeholder="Enter your query"
              className="w-[60%] min-h-[80px] border-2 border-gray-200 outline-none text-[18px] px-10 font-medium text-gray-500 rounded-[50px]"
            />
            <button className="w-[60px] h-[60px] bg-black rounded-full flex justify-center items-center">
              <FontAwesomeIcon
                icon={faPaperPlane}
                className="w-6 h-6 text-[20px] text-white"
              />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Assistance;
