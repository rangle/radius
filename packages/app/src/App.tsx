import React from 'react';
import { Text, Box } from 'ds-seed';

const App: React.FC = () => {
  return (
    <div className="App">
      <span>This is the application seed for the design system efforts</span>
      <Box bg="highlight" mb={4}>
        <Text variant="primary">This is a box</Text>
      </Box>
    </div>
  );
};

export default App;
