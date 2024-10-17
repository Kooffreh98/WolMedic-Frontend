// Function to shorten a given string by retaining the first 3 characters
// and the last 2 characters if the string is longer than 5 characters.
export function textShortener(str: string): string {
  // Check if the string is long enough to be shortened
  if (str.length <= 5) {
    return str; // Return the string as is if it's already 5 characters or less
  }

  // Extract first 3 characters from the start
  const frontPart = str.slice(0, 3);

  // Extract last 2 characters from the end
  const backPart = str.slice(-2);

  // Combine the two parts and return the shortened string
  return frontPart + backPart;
}
