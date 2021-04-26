import "./Filter.scss"

const Filter = ({ value, onChange }) => (
    <label className="input__title"> Filter contacts by name
        <input
            className="input"
            type="text"
            value={value}
            name="filter"
            onChange={onChange}
        >
        </input>
    </label>
)

export default Filter;