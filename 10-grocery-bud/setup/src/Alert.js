import React, { useEffect } from "react";

// if we dont use list in the dependency list of useEffect and only use
// empty dependency list i.e[], then when we add the item it will get
// rendered for the 1st time and the use effect will be in processs to
// remove alert after 3 second , but before this 3 lets say after 1 second only ,
// we added new item or removed a item from the list then the the alert for the
// new action will only be shown for the remaining second i.e. the remaining 2 second,
// which is incorrect hence we also have to add the main list in the depencency
// array so that whenever the list updates we can erase it.
const Alert = ({ type, msg, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert(false, "", "");
    }, 3000);
    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
