import { useSelector } from "react-redux"

function NoteItem({ note }) {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="note" style={{ backgroundColor: '#fff', color: '#000' }}>
      <h4>Note from <span>{user.firstName}</span></h4>
      <p>{note.text}</p>
      <div className="note-date">
        {new Date(note.createdAt).toLocaleString('en-CA')}
      </div>
    </div>
  )
}

export default NoteItem