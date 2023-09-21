import {useRouteError} from "react-router-dom"


const Error = () => {
  const {status, statusText} = useRouteError();
  
  return (
    <>
      <h1>opps!!!</h1>
      <h2>wrong page</h2>
      <h2>
        {status+":"+statusText}
      </h2>
    </>
  );
};

export default Error;
