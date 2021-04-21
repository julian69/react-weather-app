import React from "react";

interface Props {
  value: string | number;
}

const Degree: React.FC<Props> = ({ value }) => <span>{`${value}\u00b0`}</span>;

export default Degree;
