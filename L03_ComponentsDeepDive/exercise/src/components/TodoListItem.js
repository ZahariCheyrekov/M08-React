export default function TodoListItem({
    id,
    text,
    onDelete
}) {
    return (
        <li>
            {text}
            <button onClick={() => onDelete(id)}>Delete</button>
        </li>
    );
}