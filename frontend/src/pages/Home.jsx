import { Link } from "react-router-dom"
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className="desc-heading">
        <h2>This application can be used for project management.</h2>
        <h4>
          To use it, you must create an account by clicking 'Register' on the top right.
        </h4>
        <h4>
          If you already have an account, you can use this service by logging in.
        </h4>
        <h4>
          You can then create tasks, subtasks, bugs, etc. and raise them for discussion under your account.
        </h4>
      </section>
      <section className="heading">
        <h1>What would you like to do?</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to='/new-ticket' className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Create new ticket
      </Link>

      <Link to='/tickets' className="btn btn-block">
        <FaTicketAlt /> View my tickets
      </Link>
    </>
  )
}

export default Home