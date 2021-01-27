import React, { useEffect, useState } from "react";
import productApi from "./api/productApi";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { infoDataOne, infoDataTwo} from "./data/InfoData"
import { SliderData } from "./data/SliderData";
import Dropdown from "./components/Dropdown";
import InfoSection from "./components/InfoSection";


const App: React.FC = () => {

  //
  const [isOpenDropdown, setOpenDropdown] = useState(false); 


  //
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = { _page: 1, _limit: 10 };
        const response = await productApi.getAll(params);
        console.log("Fetch products successfully: ", response);
        console.log(response.data);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);

  //toggle open/close dropmenu
  const toggle = () => {
    setOpenDropdown(!isOpenDropdown);
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpenDropdown} toggle={toggle}/>
      <Hero slides={SliderData} />
      <InfoSection {...infoDataOne}/>
      <InfoSection {...infoDataTwo}/>
    </>
  );
};

export default App;
