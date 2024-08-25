const COLORS = {
	green: {
		bg: "bg-[#ECF7D4]",
		badge: "bg-[#D6F497]",
	},
	orange: {
		bg: "bg-[#F9EFE1]",
		badge: "bg-[#F7E0B8]",
	},
	red: {
		bg: "bg-[#FBE5E7]",
		badge: "bg-[#FDC6C7]",
	},
};

export const getRandomColor=()=>{
  const colorsNames=Object.keys(COLORS);//get array of the keys (color names)
  const randomIndex=Math.floor(Math.random()* colorsNames.length); //generate a random number between 0 and length-1 of the color names array; this is our index for the random color we
  const randomColorName= colorsNames[randomIndex]; //get the color name at the radom index
  return COLORS[randomColorName]; // Return the color object corresponding to the random color name

  //Bracket Notation se value access kr rhai hai.
  
};