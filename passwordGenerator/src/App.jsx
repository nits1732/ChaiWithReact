import { useState , useCallback, useEffect, useRef} from 'react'



function App() {
  const [length, setLength]= useState(8)
  const [number, setNumber]= useState(false)
  const [char, setChar]= useState(false);
  const [password, setPassword]= useState("")
  // use ref hook
  const passwordRef=useRef(null)
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])
  const passwordgenerator= useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    if(char) str+="~!@#$%^&*()_.{}[]`"
    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random()* str.length+1)
      pass+=str.charAt(char)
    } 
    console.log(pass)
    setPassword(pass)

  }, [length, number, char, setPassword])

  useEffect(()=>{
    passwordgenerator()
  }, [length, number, char, passwordgenerator])
  return (
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-4 text-orange-500 bg-gray-500 text-center' >
        <h1 className=' text-4xl text-center text-white my-2 py-2'>Password Generator</h1>
        <div className='flex-shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button 
          onClick={copyPassword}
          className='outline-none bg-blue-700 px-3 py-0.5 text-white ' style={{ minWidth: '3rem' }} >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={number}
            id='numberInput'
            onChange={(e)=>{
              setNumber((prev)=>!prev);
            }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            defaultChecked={char}
            id='charInput'
            onChange={(e)=>{
              setChar((prev)=>!prev);
            }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
      </div>
    </div>
  )
}

export default App
