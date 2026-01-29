import React, { useCallback, lazy, Suspense } from 'react';

const Email = lazy(() => import('./components/Email'));
const Github = lazy(() => import('./components/Github'));
const PlayStore = lazy(() => import('./components/PlayStore'));
const Twitter = lazy(() => import('./components/Twitter'));
const Web = lazy(() => import('./components/Web'));

interface Props {
  name: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<Props> = (props) => {
  const { name, width = 16, height = 16 } = props;

  const getIcon = useCallback(() => {
    switch (name) {
      case 'github':
        return <Github width={width} height={height} />;
      case 'twitter':
        return <Twitter width={width} height={height} />;
      case 'email':
        return <Email width={width} height={height} />;
      case 'web':
        return <Web width={width} height={height} />;
      case 'play_store':
        return <PlayStore width={width} height={height} />;
      default:
        return null;
    }
  }, [height, name, width]);

  return (
    <Suspense fallback={null}>
      {getIcon()}
    </Suspense>
  );
};

export default Icon;
