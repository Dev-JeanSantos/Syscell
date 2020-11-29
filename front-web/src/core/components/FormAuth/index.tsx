import React from 'react';
import './styles.scss';

type Props = {
    textTitle: string,
    children: React.ReactNode;
}

const FormAuth = ({textTitle, children}:Props) => {
  return (
      <div className="form-container">
        <div className="text-title">{textTitle}</div>
        {children}
      </div>
  );
};
export default FormAuth;