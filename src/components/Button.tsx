import { useState } from "react";

interface ButtonProps {
  color: string;
  children: string;
}

export function ButtonIn(props: ButtonProps) {
  const [counter, setCounter] = useState(1);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    <button
      onClick={increment}
      style={{ backgroundColor: props.color }}
      type="button"
    >
      {props.children}
      <strong>{counter}</strong>
    </button>
  );
  // }
  // export function ButtonDec(props: ButtonProps) {
  //   const [counter, setCounter] = useState(1);

  //   function increment() {
  //     setCounter(counter - 1);
  //   }

  //   return (
  //     <button
  //       onClick={increment}
  //       style={{ backgroundColor: props.color }}
  //       type="button"
  //     >
  //       {props.children}
  //       <strong>{counter}</strong>
  //     </button>
  //   );
  // }

  // export function ButtonCount(props: ButtonProps) {
  //   const [counter, setCounter] = useState(1);

  //   function increment() {
  //     if (counter >= 5) {
  //       alert("Valor maximo atingido");
  //       return;
  //     }
  //     setCounter(counter + 1);
  //   }
  //   function decrement() {
  //     if (counter <= 0) {
  //       alert("Valor minimo atingido");
  //       return;
  //     }
  //     setCounter(counter - 1);
  //   }

  //   return (
  //     <div>
  //       <button
  //         onClick={increment}
  //         style={{ backgroundColor: props.color }}
  //         type="button"
  //       >
  //         {/* {props.children} */}
  //         <strong>+</strong>
  //       </button>
  //       <p>{counter}</p>
  //       <button
  //         onClick={decrement}
  //         style={{ backgroundColor: props.color }}
  //         type="button"
  //       >
  //         {/* {props.children} */}
  //         <strong>-</strong>
  //       </button>
  //     </div>
  //   );
}
