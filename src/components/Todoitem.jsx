function Todoitem(props) {
  return (
    <li
              key={props.index}
              className={`${props.item.highlighted ? 'highlighted' : ''} ${props.item.priority}-priority`}
              onClick={() => props.toggleCompletion(props.index)}
            >
              <span
                style={{
                  textDecoration: props.item.completed ? "line-through" : "none",
                }}
              >
                {props.item.text}
              </span>
              <br />
            </li>
  )
}

export default Todoitem
