import { css } from '@emotion/react';

import { icon, IconName } from '@assets/icons';

interface IconProps {
  iconName: IconName;
  size: 'small' | 'medium' | 'large';
}

const iconSizes = {
  small: '0.5rem',
  medium: '1rem',
  large: '1.5rem',
};

const Icon = ({ iconName, size = 'small' }: IconProps) => {
  const IconComponent = icon[iconName];

  const style = css`
    width: ${iconSizes[size]};
    height: auto;
  `;

  return <IconComponent css={style} />;
};

export default Icon;
