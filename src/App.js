import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Header from "./components/Header";
import Profile from "./components/pages/Profile";
import NotFound from "./components/pages/NotFound";
import ChangeProfile from "./components/pages/profile/ChangeProfile";
import ChangePassword from "./components/pages/profile/ChangePassword";
import GetProfile from "./components/pages/profile/GetProfile";
import UploadAvatar from "./components/pages/profile/UploadAvatar";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        {/* <Route path="/profile/GetProfile" element={<GetProfile />} />
        <Route path="/profile/ChangePassword" element={<ChangePassword />} />
        <Route path="/profile/UploadAvatar" element={<UploadAvatar />} />
        <Route path="/profile/ChangeProfile" element={<ChangeProfile />} /> */}

        {/* ye model dige mishe injoori nevesht */}
        <Route path="/profile" element={<Profile />}>
          <Route path="GetProfile" element={<GetProfile />} />
          <Route path="ChangePassword" element={<ChangePassword />} />
          <Route path="UploadAvatar" element={<UploadAvatar />} />
          <Route path="ChangeProfile" element={<ChangeProfile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
