/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';

const GoogleForm = () => {
  return (
    <div>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfVYUswmN1IuA0Sp52vJgtQ9Vo1ixqmZAjbYPxn0R-UHopQNQ/viewform"
        width="100%"
        height="800px"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        {/* Loading... */}
      </iframe>
    </div>
  );
};

export default GoogleForm;
