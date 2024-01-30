
function InputBox({ label, placeholder }) {
    return (
        <div>
            <div className="text-sm font-medium text-left py-2">
                <label htmlFor={label}>
                    {label}
                </label>

            </div>
            <input className="w-full px-2 py-1 border rounded border-slate-200" id={label} placeholder={placeholder} />
        </div>
    )
}

export default InputBox