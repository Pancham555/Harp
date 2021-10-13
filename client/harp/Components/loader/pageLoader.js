import React from 'react'

const PageLoader = () => {
  return (
    <>
      <style jsx>
        {`
.lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #3f88f5;
    border-color: #3f88f5 transparent #3f88f5 transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }  
`}
      </style>
      <div className="flex justify-center my-5">
        <div className="scale-150 lds-dual-ring"></div>
      </div>
    </>
  )
}

export default PageLoader
