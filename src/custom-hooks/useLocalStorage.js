import { useState } from "react";

export function useLocalStorage(key, initialValue){

    const [storedValue,setStoredValue] = useState(()=>{
        try{
            const item = window.localStorage.getItem(key);
            console.log(key);
            console.log(JSON.parse(item));
            return item ? JSON.parse(item) : initialValue
        }catch(err){
            console.log(err);
            return initialValue;
        }
    });

    const setValue = (value) =>{
        try{
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        }catch(err){
            console.log(err);
        }
    };

    return [storedValue, setValue];

};
