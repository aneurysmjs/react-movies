import React, { useState, useEffect } from 'react';

import './Icon.scss';

type PropsType = {
  path: string;
  selected?: string;
  size: number | string;
};

const Icon = ({ path, size }: PropsType): JSX.Element => {
  const [iconPath, setIconPath] = useState('');

  useEffect(() => {
    (async (): Promise<void> => {
      try {
        const icon = await import('~/assets/svg/' + path + '.svg'); // eslint-disable-line prefer-template
        setIconPath(icon.default);
        // eslint-disable-next-line no-empty
      } catch (err) {}
    })();
  }, [path]);

  return (
    <img
      alt={`icon ${path}`}
      className="icon"
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
      src={iconPath}
    />
  );
};

Icon.defaultProps = {
  size: 16,
};

export default Icon;