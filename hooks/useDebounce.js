const { useState, useEffect, useRef } = require("react");

export function useDebounce(value, delay = 1000) {
  const [debounce, setDebounce] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounce(value);
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [value, delay]);

  return debounce;
}



// export function useDebouncedCallback(callback,delay=500){
//   const timerRef=useRef(null)
//   const debounceFn=(...args)=>{
//     clearTimeout(timerRef.current)
//     timerRef.current=setTimeout(()=>{
//       callback(...args)
//     },delay)
//   }

//   useEffect(() => {
//     return () => clearTimeout(timer.current);
//   }, []);

//   return debounceFn;
// }


//  const debouncedSearch = useDebouncedCallback((query) => {
//     console.log("API call:", query);
//   }, 500);