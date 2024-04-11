export const resetUrl = () => {
    setTimeout(() => {
      window.history.pushState({}, "", "/");
    });
  };
  
  export default resetUrl;