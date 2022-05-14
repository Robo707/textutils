import React from 'react'

function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  return (
    props.alert && (
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>
          {' '}
          <center>
            {capitalize(props.alert.type)} : {props.alert.msg}{' '}
          </center>
        </strong>
      </div>
    )
  )
}

export default Alert