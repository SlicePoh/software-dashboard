const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-balo font-semibold xs:text-[42px] text-[35px] text-white w-full",
    paragraph: "font-balo text-sblue text-[18px] ",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",
    flexBetween: "flex justify-between items-center",
    
    flexSS: "flex justify-start items-center m-2",

    padX: "sm:px-2 px-4",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    borderNorm: "border-solid border-2 border-slate-100 rounded-full",
    borderS: "border-solid border-2 border-slate-100 rounded-lg",
    anal: " ml-28 w-8/12 ",
    
    side: "float-right bottom-0 right-0 sticky bg-gray-100 mt-16 w-3/12 h-screen",
    
    navHead: "sm:text-sm md:text-md xl:text-lg font-bold xl:px-4 md:px-2 text-slate-400",
    navEnd: "sm:text-sm md:text-md xl:text-lg font-bold xl:px-4 md:px-2 ",

    divVer: "border-r-4 border-gray-200 h-screen p-4",
    divHor: "border-b-4 border-gray-200 ",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,

    menu: `${styles.flexBetween} flex-col float-left bottom-0 left-0 sticky h-screen w-1/9 text-slate-400 `,
    bord: `mx-4 ${styles.flexCenter} ${styles.borderS} p-1 text-sm`,

    sideB: `${styles.side} flex flex-col justify-between items-center`,
  };
  
  export default styles;