function Header(props) {
  return (
    <div className="heading">
        <h1>To-Do List</h1>
        <div className="date">{props.currentDate}</div>
      </div>
  )
}

export default Header
