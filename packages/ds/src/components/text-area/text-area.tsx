import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { StyledSystemProps } from '../../styled-system-props';
import { Box } from '../';

type TextAreaProps = StyledSystemProps<'textarea', {}>;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({children}, ref) => (
    <Box as="textarea" placeholder="test"></Box>
  )
)