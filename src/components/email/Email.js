import { IconButton, TextField, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { styled } from "@mui/material/styles";
import emailjs from '@emailjs/browser';

import './email.css';
import { useRef } from "react";

export default function Email ({toggleEmail}) {

    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY
        ).then((response) => {
            alert("Email sent successfully");    
            toggleEmail();
        }).catch((err) => {
            console.log('Failed', err.text, err);
            alert("Email error encountered");         
        });
    }

    const StyledTextField = styled(TextField)({
        "& label": {
          color: "black"
        },
        "&:hover label": {
          fontWeight: 700
        },
        "& label.Mui-focused": {
          color: "black"
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "black"
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "white"
          },
          "&:hover fieldset": {
            borderColor: "black",
            borderWidth: 2
          },
          "&.Mui-focused fieldset": {
            borderColor: "black"
          }
        }
      });
    
    return (
        <section id='email-container'>
            <div id='contact-top'>
                <h4>Contact Form</h4>
                <IconButton sx={{ position:'absolute', top:'1%', right: '5%', color:'black', height: '10%', 'margin-top':'5%'}} onClick={(toggleEmail)}>
                    <CloseIcon/>
                </IconButton>
            </div>
                <form ref={form} id='contact-bottom' onSubmit={onSubmit}>
                    <StyledTextField sx={{width: '50%', margin: '5px', padding: '5px'}} variant='filled' label='Name' type='text' name='from_name'/>
                    <StyledTextField sx={{width: '50%', margin: '5px', padding: '5px'}} variant='filled' label='Email' type='text'  name='email'/>
                    <StyledTextField sx={{width: '70%', margin: '5px', padding: '5px'}} rows={2} variant='filled' label='Message' multiline={true} type='text' name='message'/>
                    <Button id='input-submit' sx={{border:'1px solid black', color:'black'}} variant='outlined' type='submit'>Submit</Button>
                </form>
        </section>
    )
}