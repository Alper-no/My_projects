import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderTitle,
  SearchInput,
  SelectBox,
  HeaderForm,
} from "./Header.style";
import { useBooksContext } from "../../context/Books.Context";

const Header = () => {
  const printType = ["all", "books", "magazines"];
  const { searchInfo, setSearchInfo, getData } = useBooksContext();

  const handleChange = (e) => {
    setSearchInfo({...searchInfo, [e.target.name] : e.target.value})
  };
  return (
    <HeaderContainer>
      Header
      <HeaderTitle>BOKKS OR MAGAZINES</HeaderTitle>
      <HeaderForm>
        <SearchInput
          type="search"
          placeholder="Search"
          name="query"
          value={searchInfo.query}
          onChange={handleChange}
        />
        <SelectBox
          value={searchInfo.selectType}
          name="selectType"
          onChange={handleChange}
        >
          {printType.map((item) => (
            <option key={item} value={item}>
              {item}
            </option> 
          ))}
        </SelectBox>
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
