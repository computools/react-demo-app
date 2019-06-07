import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {List, Button} from 'antd';
import {AnimateComponent, ReactionComponent} from '../../components/animations';
import './styles.css';

const data = ['Racing car sprays burning fuel into crowd.', 'Japanese princess to wed commoner.', 'Australian walks 100km after outback crash.', 'Man charged over missing wedding girl.', 'Los Angeles battles huge wildfires.'];

export class ListPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <section>
          <List
            header={< h1 > Im a list !</h1>}
            bordered
            dataSource={data}
            renderItem={(item, index) => (
            <List.Item>
              <AnimateComponent
                index={index}
                animationDuration={50}
                onEnterClass='move-enter-active'
                beforeEnterClass='move-enter'>
                {item}
              </AnimateComponent>
            </List.Item>
          )}/>
        </section>
        <section>
          <ReactionComponent animationName="shake-horizontal">
            <Button>
              Shaking Horizontaly
            </Button>
          </ReactionComponent>
          <ReactionComponent animationName="shake-lr">
            <Button>
              Shaking Left to Right
            </Button>
          </ReactionComponent>
          <ReactionComponent animationName="jello-horizontal">
            <Button>
              Jello Horizontaly
            </Button>
          </ReactionComponent>
          <ReactionComponent animationName="jello-vertical">
            <Button>
              Shaking Vertically
            </Button>
          </ReactionComponent>
        </section>
      </React.Fragment>
    )
  }
}
