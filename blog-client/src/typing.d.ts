declare module '*.css';
declare module '*.less';

declare module 'study' {
  export interface Study {
    name: string;
    age: number;
  }
  
  export function sayHi(color:Study):number;

  export let sep:string
}