import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTicket, reset } from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

function NewTicket() {
  const { user } = useSelector((state) => state.auth)
  const { isLoading, isError, isSuccess, message } = useSelector((state) => state.tickets)

  const [title, setTitle] = useState('');
  const [name, setName] = useState('')
  const [issue, setIssue] = useState('Task')
  const [description, setDescription] = useState('')
  const [reporter, setReporter] = useState(user.firstName)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess) {
      dispatch(reset())
      navigate('/tickets')
    }

    dispatch(reset())
  }, [dispatch, navigate, isError, isSuccess, message])

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTicket({ title, name, issue, description, reporter }))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <BackButton url='/' />
      <section className="heading">
        <h1>Create New Ticket</h1>
        <p>Please fill out the ticket information below</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="title">Ticket Title</label>
            <input type="text" className="form-control" value={title} placeholder='Enter title' onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Assignee</label>
            <input type="text" className="form-control" value={name} placeholder='Enter Assignee' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="issue">Issue</label>
            <select name="issue" id="issue" value={issue} onChange={(e) => setIssue(e.target.value)}>
              <option value='Task'>Task</option>
              <option value='Subtask'>Subtask</option>
              <option value='Epic'>Epic</option>
              <option value='Bug'>Bug</option>
              <option value='Story'>Story</option>
              <option value='Change'>Change</option>
              <option value='IT Help'>IT Help</option>
              <option value='New Feature'>New Feature</option>
              <option value='Problem'>Problem</option>
              <option value='Service Request'>Service Request</option>
              <option value='Support'>Support</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              className='form-control'
              placeholder='Issue Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="name">Reporter</label>
            <input type="text" className="form-control" value={reporter} onChange={(e) => setReporter(e.target.value)} />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default NewTicket