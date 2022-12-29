



const InputBox = () => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search"></label>
      <input
        id='search'
        type="text"
        role='searchbox'
        placeholder="Search Items"
      />


    </form>
  )
}

export default InputBox

