type LoadingProps = {
  type: string;
};

const Loading: React.FC<LoadingProps> = ({ type }) => {
  switch (type) {
    case "page1":
      return <div>챔피언 리스트 로딩중입니다..</div>;
    case "page2":
      return <div>챔피언 상세페이지 로딩중입니다...</div>;
    case "page3":
      return <div>아이템 리스트 로딩중입니다...</div>;
    default:
      return <div>로딩중입니다...</div>;
  }
};

export default Loading;
