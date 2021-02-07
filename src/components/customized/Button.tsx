import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import styled from 'styled-components';

const Button: React.FunctionComponent<ButtonProps> = styled(AntButton)`
  border-radius: 15px;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export default Button;
