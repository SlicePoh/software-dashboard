const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-balo font-semibold xs:text-[42px] text-[35px] text-white w-full",
    paragraph: "font-balo text-sblue text-[18px] ",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-start items-start",
    flexBetween: "flex justify-between items-center",
  
    padX: "sm:px-2 px-4",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    borderNorm: "border-solid border-2 border-slate-100 rounded-full",
    borderS: "border-solid border-2 border-slate-100 rounded-lg",
    anal: "p-4 m-4 w-4/5 ml-20 relative",
    menu: "float-left top-0 bottom-0 left-0 sticky mx-6 h-screen w-10 text-slate-400 ",
    side: "float-right bottom-0 right-0 sticky bg-slate-200 mt-16 w-1/5 h-screen w-20",
    
    navHead: "sm:text-base text-xl font-bold sm:px-2 px-4 text-slate-400",
    navEnd: "sm:text-base text-xl font-bold sm:px-2 px-4 ",

    divVer: "border-r-4 border-gray-200 h-screen pr-4",
    divHor: "border-d-4 border-gray-200 w-20 ",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,

    bord: `mx-4 ${styles.flexCenter} ${styles.borderS} p-1 text-sm`,

    sideB: `${styles.side} flex flex-col justify-between items-center`,
  };
  
  export default styles;