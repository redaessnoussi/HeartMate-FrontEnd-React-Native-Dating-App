import { useState, useEffect } from "react";

type UserProfile = any; // Replace 'any' with the type of your user profile

const useRandomSizes = (userProfiles: UserProfile[]) => {
  const [imageHeights, setImageHeights] = useState<number[]>([]);

  useEffect(() => {
    const generateSize = () => {
      const sizes = userProfiles.map(() => {
        return Math.floor(Math.random() * (350 - 300)) + 250;
      });
      setImageHeights(sizes);
    };

    generateSize();
  }, []);

  return imageHeights;
};

export default useRandomSizes;
