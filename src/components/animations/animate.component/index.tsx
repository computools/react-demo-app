import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { isRequired } from '../../../utils';
require('./styles.css');

type Props = {
  index: number,
  children: any,
  className?: string,
  beforeEnterClass: string,
  onEnterClass: string,
  animationDuration: number
}

export const AnimateComponent = ({
  index = isRequired('index'),
  children = isRequired('children'),
  className = "",
  beforeEnterClass = isRequired('beforeEnterClass'),
  onEnterClass = isRequired('onEnterClass'),
  animationDuration = 150
}: Props) => {
  let currRef;

  React.useEffect(() => {
    setTimeout(() => {
      ReactDOM.findDOMNode(currRef.classList.add(onEnterClass))
    }, Number(index) * animationDuration)
  });

  return (
    <div className={`${className} ${beforeEnterClass}`} ref={(ref) => currRef = ref}>{children}</div>
  );
}
