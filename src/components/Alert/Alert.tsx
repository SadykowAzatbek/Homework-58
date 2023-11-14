import React from 'react';

interface Props extends React.PropsWithChildren {
  type: string;
  onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({type, onDismiss, children}) => {

  if (onDismiss === undefined) {
    return (
      <div className={`alert alert-${type}`}>
        {children}
      </div>
    )
  } else {
    return (
      <div className={`alert alert-${type}`}>
        {children}
        <div className="d-inline-block ps-2" onClick={onDismiss}>X</div>
      </div>
    );
  }

};

export default Alert;