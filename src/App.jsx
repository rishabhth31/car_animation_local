import Text from "./components/Text";
import Icon from "./components/Image"

const App = () => {
  return (
    <div className="bg-[#E0FFFA] w-full px-0 py-[24px] md:px-[48px] md:py-[80px] flex flex-col items-center md:gap-[24px] gap-[24px] scrollbar-hide">
      <Text></Text>
      <div className="flex justify-center items-center md:h-[549.02px] md:w-[791.02px] w-[375px] h-[260.28px]">
        <Icon></Icon>
      </div>
    </div>
  );
};
export default App;
