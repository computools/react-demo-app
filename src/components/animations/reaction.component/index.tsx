import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { isRequired } from '../../../utils';
require('./styles.css');

const validateAnimationName = (name: string) => {
  isRequired(name);
  switch (name) {
    case 'jello-horizontal':
      return 'jello-horizontal'
      break;
    case 'jello-vertical':
      return 'jello-vertical'
      break;
    case 'shake-horizontal':
      return 'shake-horizontal'
      break;
    case 'shake-lr':
      return 'shake-lr'
      break;
    default:
      break;
  }
}

type AnimaationType = 'jello-horizontal' | 'jello-vertical' | 'shake-horizontal' | 'shake-lr'

type Props = {
  children: any,
  className?: string,
  animationName?: AnimaationType,
  onClick?: Function
}

export const ReactionComponent = ({
  children = isRequired('children'),
  className = "",
  animationName = validateAnimationName('animationName'),
  onClick = () => null
}: Props) => {
  let currRef;

  const click = React.useCallback(
    (): void => {
      ReactDOM.findDOMNode(currRef.classList.remove(animationName));
      setTimeout(() => ReactDOM.findDOMNode(currRef.classList.add(animationName)), 0);
      onClick();
    }, []
  );

  return (
    <div className="container">
      <div onClick={click} className={`${className}`} ref={(ref) => currRef = ref}>{children}</div>
    </div>
  );
}
