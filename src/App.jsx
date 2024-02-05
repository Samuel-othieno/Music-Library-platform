import React from 'react';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { NavbarSearch } from './Components/Home/Home';

function App() {
  return (
    <MantineProvider>
      <NavbarSearch/>
    </MantineProvider>

  )
}

export default App