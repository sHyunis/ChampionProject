import Image from "next/image";
import LoadingImage from "../public/imgs/loading.gif";
type LoadingProps = {
  type: string;
};

const Loading: React.FC<LoadingProps> = ({ type }) => {
  switch (type) {
    case "page1":
      return (
        <div className="w-full mx-auto flex justify-center items-center h-[100vh]">
          <Image src={LoadingImage} alt="loading" />
          <br />
          <p className="text-center">CHAMPIONLIST</p>
        </div>
      );
    case "page2":
      return (
        <div className="w-full mx-auto flex justify-center items-center  h-[100vh]">
          <Image src={LoadingImage} alt="loading" />
          <br />
          <p className="text-center">DETAIL PAGE</p>
        </div>
      );
    case "page3":
      return (
        <div className="w-full mx-auto flex justify-center items-center  h-[100vh]">
          <Image src={LoadingImage} alt="loading" />
          <br />
          <p className="text-center">ITEM LIST</p>
        </div>
      );
    case "page4":
      return (
        <div className="w-full mx-auto flex justify-center items-center  h-[100vh]">
          <Image src={LoadingImage} alt="loading" />
          <br />
          <p className="text-center">FREE CHARACTOR</p>
        </div>
      );
    default:
      return (
        <div className="w-full mx-auto flex justify-center items-center  h-[100vh]">
          <Image src={LoadingImage} alt="loading" className="bg-background" />
        </div>
      );
  }
};

export default Loading;
