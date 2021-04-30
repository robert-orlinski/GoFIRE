import React, { useContext } from 'react';
import styled from 'styled-components';

import ItemsContext from '../../../views/backend/contents/Context/ItemsContext';

import ListedCategory from './atoms/ListedCategory';
import { NarrowCenterContainer } from '../../common/containers';
import { ListWithoutSpace } from '../../common/texts';

const CategoriesListHeader = styled.h2`
  padding-bottom: 3rem;
`;

const CategoriesListInner = styled(ListWithoutSpace)`
  margin-bottom: 5rem;
`;

const CategoriesList = () => {
  const { items } = useContext(ItemsContext);

  const operationCategories = items.filter((category) => {
    return category.type === 'operation';
  });

  const typeCategories = items.filter((category) => {
    return category.type === 'type';
  });

  return items.length > 0 ? (
    <>
      {operationCategories && (
        <section>
          <CategoriesListHeader>Operation types:</CategoriesListHeader>
          <CategoriesListInner as="ul">
            {operationCategories.map((category) => (
              <ListedCategory key={category._id} {...category} />
            ))}
          </CategoriesListInner>
        </section>
      )}
      {typeCategories && (
        <section>
          <CategoriesListHeader>Investment types:</CategoriesListHeader>
          <CategoriesListInner>
            {typeCategories.map((category) => (
              <ListedCategory key={category._id} {...category} />
            ))}
          </CategoriesListInner>
        </section>
      )}
    </>
  ) : (
    <NarrowCenterContainer>
      <p>There are no categories! You can add anyone.</p>
    </NarrowCenterContainer>
  );
};

export default CategoriesList;
