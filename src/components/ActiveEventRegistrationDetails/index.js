// Write your code here

import './index.css'

const ActiveEventRegistrationDetails = props => {
  // eslint-disable-next-line

  //   const list2={
  //       yetToRegister:"YET_TO_REGISTER",
  //       registered:"REGISTRED",
  //       registrationClosed:"REGSTRATIONS_CLOSED"

  //   }

  const {item} = props
  console.log(item)
  switch (item) {
    case 'REGISTERED':
      return (
        <div className="c3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
            className="img3"
          />
          <h1>You have already registered for the event </h1>
        </div>
      )
    case 'REGISTRATIONS_CLOSED':
      return (
        <div className="c3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
            className="img4"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen</p>
        </div>
      )
    case 'YET_TO_REGISTER':
      return (
        <div className="c3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
            className="img5"
          />

          <p>
            A live performance brings so much to your relationship with dance.
            Seeing dance live can often make you fall totally in love with this
            beautiful art form.
          </p>
          <button className="btn3" type="button">
            Register Here
          </button>
        </div>
      )

    default:
      return (
        <div>
          <p>Click on an event, to view its registration details</p>
        </div>
      )
  }
}
export default ActiveEventRegistrationDetails
