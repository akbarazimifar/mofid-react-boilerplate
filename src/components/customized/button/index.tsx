import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps } from 'antd/lib/button/button';
import styled from 'styled-components';

const Button: React.FunctionComponent<ButtonProps> = styled(AntButton)`
  /* Customize directly */
  border-radius: 15px;

  &:hover {
    background-color: black;
    color: white;
  }

  /* Customize using ant classes */
  /* NOTE: this class manipulation only applies to this customized button, because it generates a <SC-class>.ant-btn class which the <SC-class> is added only to this customized button element */
  &.ant-btn {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }
`;

export default Button;
