import Content from "./Components/Content";
import Sidebar from "./Components/Sidebar";
import SidebarRight from "./Components/SidebarRight";

const App = () => {
  return (
    <div className="container mx-auto">
      <div className="flex  mx-10">
        <div className="flex w-3/12">
          <Sidebar />
        </div>
        <div className="flex flex-grow ">
          <Content />
        </div>
        <div className="flex w-3/12">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
};

export default App;
