export default function InputBox({label, change, input}) {
    
    return (
        <p>
            <label>{label}</label>
            <input type="number" required  onChange={change} value={input}/>
        </p>
    );
}