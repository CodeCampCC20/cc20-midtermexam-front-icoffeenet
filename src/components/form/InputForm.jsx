export default function InputForm({
    error,
    text,
    handleChange,
    placeholder,
    value,
    type = "text",
    id,
}) {
    return (
        <div className='flex flex-col gap-1'>
            <label className='flex items-center w-fit gap-1 cursor-pointer' htmlFor='username'>

            </label>
            <input className={`px-4 py-2 rounded-xl bg-gray-200 ${error ? "outline-1 outline-red-500" : "outline-0"}`}
                id={id}
                onChange={handleChange}
                value={value}
                type={type}
                placeholder={placeholder}
            />
            {error &&<p className='text-xs text-red-700'>{text} is required</p>}
        </div>
    )
}
