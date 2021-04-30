import React, { useState, useEffect } from 'react';

import ItemsContext from './Context/ItemsContext';

import { getCategories } from '../../../common/api/requests';
import { NarrowContainer } from '../../../components/common/containers';

import Banner from '../../../components/backend/Banner';
import bannerImage from '../../../static/banners/results.jpg';
import CategoriesList from '../../../components/backend/items/CategoriesList';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories(setCategories);
  }, []);

  return (
    <>
      <Banner style={{ backgroundImage: `url(${bannerImage})` }}>
        Categories list
      </Banner>
      <NarrowContainer>
        <ItemsContext.Provider
          value={{ items: categories, setItems: setCategories }}
        >
          <CategoriesList />
        </ItemsContext.Provider>
      </NarrowContainer>
    </>
  );
};

export default Categories;
