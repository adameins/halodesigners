function Button({text, isReverse}: {text: string, isReverse: boolean}) {
    return (
        <>
            <button className={`rounded-full ${isReverse ? 'text-blue-400 hover:text-white hover:border-white hover:bg-blue-400 hover:border border-blue-400 border' : 'bg-blue-400 hover:text-blue-400 text-white hover:border-blue-400 hover:bg-white hover:border border border-transparent'} w-fit py-3 px-7 font-bold transition`}>
                {text}
            </button>
        </>
    )
}

export default Button;
