import React from 'react';
import { LengthConsumer } from '../../container/App';

const LengthChild = () => {
  return (
    <React.Fragment>
      <LengthConsumer>
        {length => (
          <h3>
            {'People left: '}
            {length}
          </h3>
        )}
      </LengthConsumer>
    </React.Fragment>
  );
};

export default LengthChild;
