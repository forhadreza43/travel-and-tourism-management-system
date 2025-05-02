
export const formatDate = (dateString: string): string => {
  // Parse the ISO date string
  const date = new Date(dateString);
  
  // Format options
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  };
  
  // Return formatted date
  return date.toLocaleDateString('en-US', options);
};
