import { TextareaAutosize } from '@material-ui/core';
import React from 'react';

export default function TextareaCustom(props) {
  const { placeholder, rows } = props;
  return <TextareaAutosize rows={rows || 7} placeholder={placeholder} />;
}
