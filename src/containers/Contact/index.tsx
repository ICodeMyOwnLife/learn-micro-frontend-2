import React, { FC, memo } from 'react';
import { RouteComponentProps } from 'react-router';

export const ContactComponent: FC<RouteComponentProps> = ({ location }) => (
  <div>
    <h2>Contact 2</h2>
    <p>{location.pathname}</p>
  </div>
);

const Contact = memo(ContactComponent);
Contact.displayName = 'Contact';
export default Contact;
