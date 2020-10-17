import React from 'react';
export interface User {
    message: string;
    age: number;
   
}


export function Function(props:User) {
  return (
    <>
          <div>Hi vinay {props.message}
           {props.age}
           
          </div>
    </>
  );
}
