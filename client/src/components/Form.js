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
          <div className=''>
            <ul>
              {errors.map((error, i) => (
                <li key={i}>{error}</li>
              ))}
            </ul>
          </div>
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
        <div className=''>
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