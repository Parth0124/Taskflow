function Footer(props) {
  return (
    <div>
      <button onClick={props.clearCompleted}>Clear Completed</button>
      <p>{props.remainingCount} items remaining</p>
    </div>
  )
}

export default Footer
