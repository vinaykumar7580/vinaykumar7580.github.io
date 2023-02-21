
import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson,BsLinkedin } from 'react-icons/bs';
  import { useRef } from 'react';
  import emailjs from '@emailjs/browser';
  import style from "../Style/Contact.module.css"
  
  export default function Contact() {
    const form=useRef()

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_ssztkgm', 'template_8bnsttd', form.current, 'lpGIUSyYbXJhYzab6')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return (
      <Container bg="#d0bdf4" maxW="full" mt={0} centerContent overflow="hidden" id="contact" className="contact">
        <Flex paddingTop={"15px"} paddingBottom={"15px"}>
          <Box
            bg="#8458B3"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white.500">
                      Feel free to get in touch with me.
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          id="contact-phone"
                          height="48px"
                          width="220px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}>
                          +91-9011752350
                        </Button>
                        <Button
                          size="md"
                          id="contact-email"
                          height="48px"
                          width="250px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                          vinayhatwar16@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="220px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #1C6FEB' }}
                          leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                          Bhandara, Maharashtra
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <a href="https://www.linkedin.com/in/vinaykumar-hatwar-a508831a1/" target="_blank"><IconButton
                        aria-label="linkedin"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        id="contact-linkedin"
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsLinkedin size="28px" />}
                      /></a>
                      <a href="https://github.com/vinaykumar7580" target="_blank"><IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        id="contact-github"
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      /></a>
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5} textAlign="left">
                        <form ref={form} onSubmit={sendEmail}>
                          <label><h1 className={style.emailhead}>Name</h1></label>
                          <input className={style.emailDetails} type="text"
                          placeholder='name'
                          name="user_name" required />
                          <br />
                          <br />
                          <label><h1 className={style.emailhead}>Email</h1></label>
                          <input className={style.emailDetails} type="email"
                          placeholder='email'
                          name="user_email" required/>
                          <br />
                          <br />
                          <label><h1 className={style.emailhead}>Subject</h1></label>
                          <input className={style.emailDetails} type="text"
                          placeholder='subject'
                          name="subject" required />
                          <br />
                          <br />
                          <label className={style.emailhead}><h1>Message</h1></label>
                          <textarea className={style.emailDetails} name="message" id="" cols="20" rows="5"></textarea>
                          <br />
                          <br />
                          <button type="submit" className={style.emailButtons}>Send Message</button>

                        </form>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }
// function Contact(){
//     return(
//         <div id="contact">
            
//         </div>
//     )
// }
// export default Contact