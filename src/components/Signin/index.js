import React, {useState} from 'react'
import {Container, FormWrap, Icon, FormContent, Form, FormH1,
    FormLabel, FormInput, FormButton, ArrowForward, ArrowRight
} from './SigninElements'
import {RiGlobeLine} from 'react-icons/all'
import emailjs from 'emailjs-com'


const Signin = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_3z7zbmi', 'template_3t5jp2p', e.target, 'user_FdBAw68xdFgiUQrRDHYxH')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          
          e.target.reset()
      }

    const [hover, setHover] = useState(false)


    const onHover = () => {
        setHover(!hover)
    }



    return (
        <Container>
            <FormWrap>
                <Icon to="/" onMouseEnter={onHover}> {hover ? <ArrowForward />: <ArrowRight/>} <RiGlobeLine/> Darchton</Icon>
                <FormContent>
                    <Form onSubmit={sendEmail}>
                        <FormH1>We Will Be In-touch In A Few!</FormH1>
                        <FormLabel htmlFor="for">Full Name</FormLabel>
                        <FormInput type="name" name="name" required />
                        <FormLabel htmlFor="for">Contact Number</FormLabel>
                        <FormInput type="number" name="number" required />
                        <FormLabel htmlFor="for">Email</FormLabel>
                        <FormInput type="email" name="email" required />
                        <FormButton type="submit">Send</FormButton>
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    )
}

export default Signin
