import React from 'react';
import { Box, Text } from 'ds';

const App: React.FC = () => {
  return (
    <div className="App">
      <Box bg="highlight" mb={4}>
        <Text variant="primary">This is a box</Text>
      </Box>
    </div>
  );
};

export default App;
