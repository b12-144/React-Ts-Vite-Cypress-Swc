import { useRef } from "react"

export default function RefPage() {
  let countRef = useRef(0)
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    countRef.current = countRef.current + 1
    alert('You clicked ' + countRef.current + ' times!')
  }

  return (
    <>
     <input ref={inputRef} />
      <button onClick={()=>inputRef.current?.focus()}>
        Focus the input
      </button>
    <button onClick={handleClick}>Increment Count</button>
    <button onClick={()=>inputRef.current?.remove()}>Remove input</button>
    </>
  )
}
