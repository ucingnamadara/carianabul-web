const TextForm = ({name,type,placeholder, email, onChange}) =>{
    return(<input className='drop-shadow-md rounded-md pl-4 w-80 lm:w-128 h-10 lm:h-12' id={name} name={name} type={type} placeholder={placeholder} value={email} onChange={onChange}></input>)
}

export default TextForm