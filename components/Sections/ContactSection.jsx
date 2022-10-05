import {
  Box,
  Button,
  Heading,
  Input,
  Textarea,
  Spinner,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Swal from 'sweetalert2';

export default function ContactSection() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = e => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm(
        'service_0lj67i7',
        'template_lh4o61i',
        form.current,
        'OL2TuAXBjgEM3rha8'
      )
      .then(
        result => {
          setIsSending(false);
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your message was send successfully',
            showConfirmButton: false,
            timer: 1500,
          });
        },
        error => {
          if (isSending) {
            setIsSending(false);
            return Swal.fire({
              position: 'center',
              icon: 'error',
              title: 'Oh something went wrong.Try again!',
              showConfirmButton: false,
              timer: 1500,
            });
          } else return;
        }
      );
  };

  return (
    <Box
      minH={'45vh'}
      mt="16"
      p="4"
      display="flex"
      flexDirection={'column'}
      alignItems="center"
      id="contact"
    >
      <Heading
        as="h2"
        fontSize={{ base: '1.8rem', sm: '4xl', md: '6xl' }}
        color={'general.heading'}
      >
        Contáctame
      </Heading>
      <form onSubmit={sendEmail} ref={form}>
        <Box mt="16">
          <Input
            type={'text'}
            mt="4"
            placeholder="Nombre"
            name="from_name"
            border="2px solid"
            _light={{ borderColor: 'blackAlpha.300' }}
            _dark={{ borderColor: 'whiteAlpha.500' }}
          />
          <Input
            type={'email'}
            my="4"
            placeholder="Correo"
            name="user_email"
            border="2px solid"
            _light={{ borderColor: 'blackAlpha.300' }}
            _dark={{ borderColor: 'whiteAlpha.500' }}
          />
          <Textarea
            minH={'10rem'}
            placeholder="Tu mensaje"
            name="message"
            border="2px solid"
            _light={{ borderColor: 'blackAlpha.300' }}
            _dark={{ borderColor: 'whiteAlpha.500' }}
          />
          <Button
            disabled={isSending ? true : false}
            my="4"
            type="submit"
            _light={{ bg: 'blackAlpha.200' }}
          >
            {isSending ? <Spinner color={'general.heading'} /> : 'Enviar'}
          </Button>
        </Box>
      </form>
    </Box>
  );
}
