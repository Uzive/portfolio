import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col, Container } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import Projects from '../components/Projects';
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";


const Home = () => {
  return (
    <>
       <Container className='hero'>
       <AnimatePresence>
          <motion.div
            initial={{ opacity:0, y:15}}
            animate={{ opacity:1, y:0}}
            transition={{ ease: "easeOut", duration: 2}}>
            <Row className='py-5 my-2' >
              <Col className='w-100 d-flex justify-content-center'>
                <Image src='/profile.jpg' className='' width={350} rounded/>
              </Col>
              <Col className='d-flex align-items-center'>
                  <Container>
                    <h1 className='display-1 fw-bold'>
                      John Dioquino
                    </h1>
                    <h3 className='display-6 fw-semibold'>Aspiring Web Developer</h3>
                    <hr />
                    <p>
                      A 20 year's old BSIT Student studying in PHINMA University of Pangasinan
                    </p>  
                    <div className='d-flex align-items-center gap-3'>
                      <Link to='/work'>
                        <Button className='btn-lg' variant='outline-dark'>View Work</Button>
                      </Link>
                      <SocialLinks />
                    </div>
                  </Container>
              </Col>
            </Row>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay: 1}}>
            <Container>
            <Row className='pt-5 mt-5'>
              <Col className='w-100 d-flex flex-column justify-content-center'>
                <h1 className='display-1 fw-bold'>About Me</h1>
                <hr />
                <p>Hello I'm John Dioquino, I'm passionate about basketball and mobile gaming, 
                  I love the thrill of competition and the joy of conquering challenges.
                  A curious spirit drives me to learn and grow every day, both on and off the court.
                  Let's embrace life's adventures with positivity and determination!
                </p>
                <div className='d-flex align-items-center'>
                  <h3 className='fw-bold m-2'>Tech Stack:</h3>
                  <div className='display-6'>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                  </div>
                </div>
                </Col>
                <Col className='w-100 d-flex justify-content-center'>
                  <Image src='/travel.jpg' height={400} rounded/>  
                </Col>
              </Row>
            </Container>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay: 1}}>
            <Container className='p-5 mt-5 bg-dark text-light rounded'>
              <h3 className='display-1 fw-bold'>Recent Projects</h3>
              <Projects />
            </Container>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:1}}>
          <div className='d-flex flex-column justify-content-center align-items-center text-center py-5'>
            <h1 className='display-1 fw-bold'>Contact Me</h1>
            <p>These are my socials where you can ask me if you have any question 
              Feel free to contact me!.
            </p>
            <SocialLinks />
          </div>
      </motion.div>
      </AnimatePresence>
       </Container>
    </>
  );
};

export default Home;
