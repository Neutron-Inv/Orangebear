import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import './transitions.css';

const TransitionWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="fade"
      >
        <div>{children}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionWrapper;
