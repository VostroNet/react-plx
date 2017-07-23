import React from 'react';
import ReactDOM from 'react-dom';
import Plx from '../source/index';
import './docs.scss';

const Example = class extends React.Component {
  render() {
    return (
      <div className='Content'>
        <div className='FixedDemo-spacer'>
          <div className='FixedDemo-wrapper'>
            <Plx
              className='FixedDemo'
              parallaxData={ [
                {
                  start: 0,
                  duration: 300,
                  properties: [
                    {
                      startValue: 1,
                      endValue: 0.2,
                      property: 'opacity',
                    },
                    {
                      startValue: 1,
                      endValue: 0.5,
                      property: 'scale',
                    },
                    {
                      startValue: 0,
                      endValue: 360,
                      property: 'rotate',
                    },
                  ],
                },
                {
                  start: 350,
                  duration: 300,
                  properties: [
                    {
                      startValue: 0,
                      endValue: -100,
                      unit: '%',
                      property: 'translateX',
                    },
                    {
                      startValue: 0.2,
                      endValue: 1,
                      property: 'opacity',
                    },
                    {
                      startValue: 0.5,
                      endValue: 1.5,
                      property: 'scale',
                    },
                  ],
                },
                {
                  start: 700,
                  duration: 300,
                  properties: [
                    {
                      startValue: -100,
                      endValue: 100,
                      unit: '%',
                      property: 'translateX',
                    },
                    {
                      startValue: 360,
                      endValue: 0,
                      property: 'rotate',
                    },
                    {
                      startValue: 1.5,
                      endValue: 1,
                      property: 'scale',
                    },
                  ],
                },
              ] }
            >
              <img alt='' src='https://stanko.github.io/public/img/s.png' />
            </Plx>
          </div>
        </div>
        <div className=''>
          <p>
            Three blocks translating and scaling at different speeds.
            Offset is set <code>-200</code>, so animation starts when
            elements get 200 pixels from viewport edge.
          </p>

          <div className='HorizontalDemo'>
            <Plx
              className='HorizontalDemo-item HorizontalDemo-item--one'
              parallaxData={ [
                {
                  start: 'top',
                  offset: -200,
                  duration: 'height',
                  properties: [
                    {
                      startValue: 0,
                      endValue: 200,
                      property: 'translateX',
                    },
                    {
                      startValue: 1,
                      endValue: 1.3,
                      property: 'scale',
                    },
                  ],
                },
              ] }
            />
            <Plx
              className='HorizontalDemo-item HorizontalDemo-item--two'
              parallaxData={ [
                {
                  start: 'top',
                  offset: -200,
                  duration: 'height',
                  properties: [
                    {
                      startValue: 0,
                      endValue: 250,
                      property: 'translateX',
                    },
                    {
                      startValue: 1,
                      endValue: 1.2,
                      property: 'scale',
                    },
                  ],
                },
              ] }
            />
            <Plx
              className='HorizontalDemo-item HorizontalDemo-item--three'
              parallaxData={ [
                {
                  start: 'top',
                  offset: -200,
                  duration: 'height',
                  properties: [
                    {
                      startValue: 0,
                      endValue: 300,
                      property: 'translateX',
                    },
                    {
                      startValue: 1,
                      endValue: 1.1,
                      property: 'scale',
                    },
                  ],
                },
              ] }
            />
          </div>
        </div>
        <div className='ClockDemo--wrapper'>
          <p>
            Simple clock, with it&apos;s arms moving at relative speeds.
          </p>
          <div className='ClockDemo'>
            <Plx
              className='ClockDemo-arm'
              parallaxData={ [
                {
                  start: 0,
                  duration: 2000,
                  properties: [
                    {
                      startValue: 0,
                      endValue: 1440,
                      property: 'rotate',
                    },
                  ],
                },
              ] }
            />
            <Plx
              className='ClockDemo-arm ClockArm--small'
              parallaxData={ [
                {
                  start: 0,
                  duration: 2000,
                  properties: [
                    {
                      startValue: 30,
                      endValue: 150,
                      property: 'rotate',
                    },
                  ],
                },
              ] }
            />
          </div>
        </div>
      </div>
    );
  }
};


ReactDOM.render(<Example />, document.getElementById('demo'));