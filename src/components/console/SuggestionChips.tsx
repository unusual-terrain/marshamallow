import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export const  SuggestionChips =() => {
  const handleClick = (label: string) => {
    console.log(`Clicked on: ${label}`);
    // You can add your logic here to handle the chip click,
    // for example, setting the suggestion as input in a text field.
  };

  return (
    <Stack direction="row" spacing={2}>
      <Chip
        label="What can I ask you to do?"
        onClick={() => handleClick("What can I ask you to do?")}
        sx={{
          backgroundColor: '#f0f0f0', // Light background color
          color: '#333', // Darker text color
          padding: '10px 5px', // Adjust padding as needed
          fontSize: '1rem', // Adjust font size
          borderRadius: '20px', // More rounded corners
          '&:hover': {
            backgroundColor: '#e0e0e0', // Slightly darker background on hover
          },
        }}
      />
      <Chip
        label="Which one of my projects is performing the best?"
        onClick={() => handleClick("Which one of my projects is performing the best?")}
         sx={{
          backgroundColor: '#f0f0f0', // Light background color
          color: '#333', // Darker text color
          padding: '10px 5px', // Adjust padding as needed
          fontSize: '1rem', // Adjust font size
          borderRadius: '20px', // More rounded corners
           '&:hover': {
            backgroundColor: '#e0e0e0', // Slightly darker background on hover
          },
        }}
      />
      <Chip
        label="What projects should I be concerned about right now?"
        onClick={() => handleClick("What projects should I be concerned about right now?")}
         sx={{
          backgroundColor: '#f0f0f0', // Light background color
          color: '#333', // Darker text color
          padding: '10px 5px', // Adjust padding as needed
          fontSize: '1rem', // Adjust font size
          borderRadius: '20px', // More rounded corners
           '&:hover': {
            backgroundColor: '#e0e0e0', // Slightly darker background on hover
          },
        }}
      />
    </Stack>
  );
}