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
import toast, { Toaster } from 'react-hot-toast';

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
          toast.success('Email enviado correctamente!');
        },
        error => {
          if (isSending) {
            setIsSending(false);
            toast.error('No se pudo enviar el Email');
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
      <Toaster />
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
            minLength="2"
            required
          />
          <Input
            type={'email'}
            my="4"
            placeholder="Correo"
            name="user_email"
            border="2px solid"
            _light={{ borderColor: 'blackAlpha.300' }}
            _dark={{ borderColor: 'whiteAlpha.500' }}
            pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
            required
          />
          <Textarea
            minH={'10rem'}
            placeholder="Tu mensaje"
            name="message"
            border="2px solid"
            _light={{ borderColor: 'blackAlpha.300' }}
            _dark={{ borderColor: 'whiteAlpha.500' }}
            required
            minLength="15"
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
