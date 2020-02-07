import React from "react";
import Moment from "react-moment";

export function DateTime(dateTime) {
  return <Moment format="DD/MM/YYYY">{dateTime}</Moment>;
}
