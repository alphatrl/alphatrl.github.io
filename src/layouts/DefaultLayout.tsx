import React from 'react';

import SEO from '../shared/components/SEO';

interface Props {
  title?: string;
}

const DefaultLayout: React.FC<React.PropsWithChildren<Props>> = (props) => {
  const { title = 'Amos Tan', children } = props;

  return (
    <div className="m-auto ">
      <SEO title={title} />
      <main>{children}</main>
    </div>
  );
};

export default DefaultLayout;
