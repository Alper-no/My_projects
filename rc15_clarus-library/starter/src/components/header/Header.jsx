import React from 'react'
import { HeaderButton, HeaderContainer, HeaderTitle, SearchInput, SelectBox,HeaderForm } from './Header.style'

const Header = () => {
  return (
    <HeaderContainer>Header
      <HeaderTitle>BOKKS OR MAGAZINES</HeaderTitle>
      <HeaderForm>
        <SearchInput/>
        <SelectBox> 
          <option >ALL</option>
        </SelectBox>
        <HeaderButton>Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  )
}

export default Header