import React, { useState } from 'react'
import {useSearchParams} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {Box,Text,Checkbox, CheckboxGroup,VStack} from '@chakra-ui/react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from '@chakra-ui/react'
import { useEffect } from 'react';
import { fetchData } from '../Redux/products/action';

function FilterComponent() {
  const dispatch=useDispatch();
  const [searchParams,setSearchParams]=useSearchParams();
  //console.log(searchParams);
  // console.log(searchParams.getAll("category"));

  const [categoryValues,setCategoryValues]=useState(searchParams.getAll("category")|| []);

  const categoryHandler=(values)=>{
    //console.log(values);
    setCategoryValues(values);
  };

  useEffect(()=>{
    if(categoryValues){
      setSearchParams({category:categoryValues},{replace:true});
      let params={
        category:searchParams.getAll("category")
      }
      dispatch(fetchData(params));
    }
  },[categoryValues,setSearchParams,searchParams,dispatch])

  return (
    <Box>
    <Box display={{base:'none',md:"block"}}p="1rem 2rem">
      <Text fontSize="2xl">Filters</Text>
      <Text>Category</Text>
      <CheckboxGroup 
      colorScheme='green' 
      defaultValue={categoryValues}
      onChange={categoryHandler}>

      <VStack alignItems={"baseline"}>
        <Checkbox value="men's clothing">Men's clothing</Checkbox>
        <Checkbox value="women's clothig">Women's clothing</Checkbox>
        <Checkbox value="jewelery">Jewelery</Checkbox>
        <Checkbox value="electronics">Electronics</Checkbox>
        <Checkbox value="bags">Bags</Checkbox>
      </VStack>
    </CheckboxGroup>

    </Box>
    <Box display={{base:"block",md:'none'}}p="0rem 2rem">
    <Menu closeOnSelect={false}>
  <MenuButton as={Button} colorScheme='blue'>
    MenuItem
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
      <MenuItemOption value='asc'>Ascending</MenuItemOption>
      <MenuItemOption value='desc'>Descending</MenuItemOption>
    </MenuOptionGroup>
    <MenuDivider />
    <MenuOptionGroup title='Country' type='checkbox'>
      <MenuItemOption value='email'>Email</MenuItemOption>
      <MenuItemOption value='phone'>Phone</MenuItemOption>
      <MenuItemOption value='country'>Country</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
</Menu>
    </Box>

  </Box>
  )
}

export default FilterComponent;

