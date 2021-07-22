import React from 'react';

export default (props) => {
  const { cancel, errors, submit, submitButtonText, elements } = props;

  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  function handleCancel(event) {
    event.preventDefault();
    cancel();
  }

  function ErrorsDisplay({ errors }) {
    let errorsDisplay = null;

    if (errors.length) {
      errorsDisplay = (
        <div>
          <h2 className=''>Validation errors</h2>
          <ul>
            <li className='validation--errors'>
              Please provide a value for "Title"
            </li>
            <li className='validation--errors'>
              Please provide a value for "Description"
            </li>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </div>
      );
    }
    return errorsDisplay;
  }

  return (
    <div>
      <ErrorsDisplay errors={errors} />
      <form onSubmit={handleSubmit}>
        {elements()}
        <div>
          <button className='button' type='submit'>
            {submitButtonText}
          </button>
          <button className='button-secondary button' onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
