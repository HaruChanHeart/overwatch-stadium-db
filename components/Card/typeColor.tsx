export const getTypeColorClass = (type: number): string => {
    switch (type) {
      case 1:
        return "zinc-800";   // common
      case 2:
        return "blue-950";   // rare
      case 3:
        return "purple-950"; // epic
      default:
        return "orange-950"; // legendary
    }
  };
  