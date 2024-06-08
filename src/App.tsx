import { BrowserRouter } from "react-router-dom";
import PageHeader from "./layouts/PageHeader";
import { Main } from "./layouts/Main";
import { SideBarProvider } from "./contexts/SideBarContexts";

function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <BrowserRouter>
        <SideBarProvider>
          <PageHeader />
          <Main />
        </SideBarProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
