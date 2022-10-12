import { Route, Routes } from "react-router-dom";
import CreateRecruitment from "./components/CreateRecruitment/CreateRecruitment";
import MyRecruitment from "./components/MyRecruitment/MyRecruitment";
import UpdateData from "./components/MyRecruitment/UpdateData";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MyRecruitment />} exact />
        <Route path="/create-new-recruitment" element={<CreateRecruitment />} />
        <Route path="/update/:id" element={<UpdateData />} />
      </Routes>

      {/* <UpdateData /> */}
    </>
  );
}

export default App;
