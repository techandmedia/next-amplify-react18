/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { ColorMode, useTheme } from '@aws-amplify/ui-react';

export default function Render() {
  const { tokens } = useTheme();
  const [colorMode, setColorMode] = useState<ColorMode>('system');

  useEffect(() => {}, []);

  return <>ABOUT</>;
}
