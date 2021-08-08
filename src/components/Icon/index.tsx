import dynamic from 'next/dynamic';
import React, { useCallback } from 'react';

const Email = dynamic(() => import('./components/Email'));
const Github = dynamic(() => import('./components/Github'));
const PlayStore = dynamic(() => import('./components/PlayStore'));
const Twitter = dynamic(() => import('./components/Twitter'));
const Web = dynamic(() => import('./components/Web'));

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

  return getIcon();
};

export default Icon;
