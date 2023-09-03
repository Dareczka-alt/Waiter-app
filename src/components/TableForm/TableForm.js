const TableForm = () => {
  return (
    <div>
      <div>
        <p>Status:</p>
        <select>
          <option value="Free">Free</option>
          <option value="Busy">Busy</option>
          <option value="Cleaning">Cleaning</option>
        </select>
      </div>

      <div>
        <p>People:</p>
        <input type="number"></input><span>/</span><input type="number"></input>
      </div>

      <div>
        <p>Bill:</p>
        <span>$</span><input type="number"></input>
      </div>

      <button className="btn-default">Update</button>


    </div>
  )

}

export default TableForm;