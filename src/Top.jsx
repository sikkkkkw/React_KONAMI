const Top = ({ children }) => {
  return (
    <>
      <div className="flex items-center w-full h-[37px] m-[0] relative">
        <p className="ml-[10px]">KONAMI</p>
        <div className="w-full h-[350px] top-[37px] bg-red-200 absolute">
          <div className="flex justify-between mx-[320px] mt-[10px] items-center">
            <p className=" text-2xl">My KONAMI</p>
            <p className=" text-sm w-[100px] h-[40px] flex justify-center items-center hover:bg-slate-200 hover: rounded-lg">
              국가/지역
            </p>
          </div>
          <div className="flex justify-between mt-[20px] mx-[320px]">
            <div className=" flex h-[220px] w-[400px] bg-red-200 flex-col border-2  border-white ">
              <div className=" mx-3 my-3 flex-col flex items-center">
                <p className=" text-center">Login to My KONAMI is here</p>
                <button className=" h-[52px] w-[382px] bg-white ">
                  로그인 &#10097;
                </button>
              </div>
              <div className=" mt-[10px] border-t border-2 border-white"></div>
              <div className=" m-3 my-3 flex-col flex items-center">
                <p className="text-center">처음 방문한 사용자</p>
                <button className="h-[52px] w-[382px] bg-white">
                  등록 &#10097;
                </button>
              </div>
            </div>
            <div className=" flex h-[250px] w-[850px] bg-red-50"></div>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};
export default Top;
