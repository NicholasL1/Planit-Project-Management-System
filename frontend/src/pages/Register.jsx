import { useState } from 'react'
import { toast } from 'react-toastify'
import { FaUser } from 'react-icons/fa'
import { userSelector, useDispatch, useSelector } from 'react-redux'
import { register } from '../features/auth/authSlice'

function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm: '',
  })

  const { firstName, lastName, email, password, confirm } = formData

  const dispatch = useDispatch()

  const { user, isLoading, isSuccess, message } = useSelector(state => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== confirm) {
      toast.error('passwords do not match')
    } else {
      const userData = {
        firstName,
        email,
        password
      }

      dispatch(register(userData))
    }
  }

  return (
    <>
      <section className="heading">
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group" style={{ display: 'inline-block', width: '50%' }}>
            <input
              type="text"
              className="form-control"
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={onChange}
              placeholder='Enter your first name'
              required
            />
          </div>
          <div className="form-group" style={{ display: 'inline-block', width: '50%' }}>
            <input
              type="text"
              className="form-control"
              id='lastName'
              name='lastName'
              value={lastName}
              onChange={onChange}
              placeholder='Enter your last name'
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id='email'
              name='email'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id='password'
              name='password'
              value={password}
              onChange={onChange}
              placeholder='Enter your password'
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id='confirm'
              name='confirm'
              value={confirm}
              onChange={onChange}
              placeholder='Confirm password'
              required
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register