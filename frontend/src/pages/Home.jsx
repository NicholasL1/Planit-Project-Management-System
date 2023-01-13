import { Link } from "react-router-dom"
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function Home() {
  return (
    <>
      <section className="desc-heading">
        <h2>This application can be used for project management.</h2>
        <h4>
          To use it, you must create an account by clicking 'Register' on the top right.
          You can then create stories, bug fixes, or issues and raise them for public discussion under your account.
        </h4>
      </section>
      <section className="heading">
        <h1>What do you need help with?</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to='/new-ticket' className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Create new ticket
      </Link>

      <Link to='/ticket' className="btn btn-block">
        <FaTicketAlt /> View my tickets
      </Link>
    </>
  )
}

export default Home