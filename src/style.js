const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading1: "font-poppins font-semibold xs:text-[4em] text-[4em] text-center xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-white text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:pb-12 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",

  unfilledButton: "bg-transparent border-2 border-[#0081CF] hover:bg-[#0081CF] font-poppins cursor-pointer text-[16px] font-normal py-2 px-4 rounded-full  items-center text-white",
  filledButton: "bg-[#0081CF] font-poppins cursor-pointer text-[16px] font-semibold py-4 px-10 rounded-full inline-flex items-center text-white",
};

export const layout = {
  section: `flex flex-col ${styles.paddingY}`,
  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;