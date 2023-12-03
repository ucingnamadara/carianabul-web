const Button = ({buttonText}) => {
    return(
        <div className='flex flex-row items-center justify-center gap-3'>
            <button className="bg-black text-white rounded-xl px-32 py-3 cursor-pointer text-center font-bold" type='submit'>{buttonText}</button>
        </div>
    )
}

export default Button