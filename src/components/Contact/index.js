import React, { useRef, useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import Confetti from 'react-confetti';
import { Toaster, toast } from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPaperPlane, faSpinner } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`;

const Contact = () => {
  const form = useRef();
  const [open, setOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [loading, setLoading] = useState(false);  // Added loading state
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectSize = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectSize);
    return () => {
      window.removeEventListener('resize', detectSize);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);  // Set loading to true when submission starts
    emailjs
      .sendForm('service_k0f3ehe', 'template_qyzz055', form.current, '4x6P3x_s6clgctgut')
      .then(
        () => {
          setOpen(true);
          setShowConfetti(true);
          setLoading(false);  // Set loading to false when submission ends
          form.current.reset();
          toast.success("Email sent successfully!");
          setTimeout(() => {
            setShowConfetti(false);
          }, 5000);
        },
        (error) => {
          console.error(error.text);
          setLoading(false);  // Set loading to false if submission fails
          toast.error("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <Container id="contact">
      <Toaster position="bottom-right" reverseOrder={false} />
      {showConfetti && (
        <Confetti width={windowDimension.width} height={windowDimension.height} recycle={false} />
      )}
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Got a question or an opportunity? I'm just a message away!!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Get In Touch 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" required />
          <ContactInput placeholder="Your Name" name="from_name" required />
          <ContactInput placeholder="Subject" name="subject" required />
          <ContactInputMessage placeholder="Message" rows="4" name="message" required />
          <ContactButton type="submit" disabled={loading}>
            {loading ? <FontAwesomeIcon icon={faSpinner} spin /> : <span>Send Message  <FontAwesomeIcon icon={faPaperPlane} /></span>}
          </ContactButton> 
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;

 