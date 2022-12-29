



const InputBox = ({ text, handleChange, handleSubmit }) => {




  return (
    <form onSubmit={handleSubmit} className='searchForm' >
      <label htmlFor="search">
        <input
          id='search'
          type="text"
          role='searchbox'
          placeholder="Search Items"
          value={text}
          onChange={handleChange}
        />
      </label>
    </form>
  )
}

export default InputBox

