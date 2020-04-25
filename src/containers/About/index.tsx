import React, { FC, memo } from 'react';
import { RouteComponentProps } from 'react-router';

export const AboutComponent: FC<RouteComponentProps> = ({ location }) => (
  <div>
    <h2>About 2</h2>
    <p>{location.pathname}</p>
  </div>
);

const About = memo(AboutComponent);
About.displayName = 'About';
export default About;
