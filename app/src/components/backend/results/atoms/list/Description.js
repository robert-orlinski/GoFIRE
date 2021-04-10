import React from 'react';

import { ResultSection } from '../../../../common/containers';
import { UnstyledTitle } from '../../../../common/texts';

const ResultDescription = ({ title, description }) => (
  <ResultSection>
    <UnstyledTitle>{title}</UnstyledTitle>
    <p style={{ 'padding-bottom': '0' }}>{description}</p>
  </ResultSection>
);

export default ResultDescription;
