import React from 'react';

const Toasts = ({Title}) => {
    return (
       
      <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <img src="..." class="rounded me-2" alt="..." />
          <strong class="me-auto">Sign Up</strong>
          {/* <small>11 mins ago</small> */}
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">{Title}</div>
      </div>
    );
}

export default Toasts;
