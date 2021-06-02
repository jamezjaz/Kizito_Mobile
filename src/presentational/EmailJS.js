import React from 'react';
import {
  Form,
  Input,
  TextArea,
  Button,
} from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import EmailStyles from '../styles/EmailStyles.module.css';

const EmailJS = () => {
  const SERVICE_ID = 'service_g4f1wso';
  const TEMPLATE_ID = 'template_e4581uw';
  const USER_ID = 'user_B0ZbFOBqRNxomF67x4mh3';

  const handleOnSubmit = e => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then(result => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully',
        });
      }, error => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops!, something went wrong',
          text: 'error.text',
        });
      });
    e.target.reset();
  };

  return (
    <div className={EmailStyles.container}>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="user_email"
          placeholder="Email"
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Name"
          name="user_name"
          placeholder="Name"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Message"
          name="message"
          placeholder="Message"
          required
        />
        <Button
          type="submit"
          color="green"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default EmailJS;
