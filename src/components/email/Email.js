import { IconButton, TextField, Button } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import emailjs from '@emailjs/browser';

import './email.css';
import { useRef } from "react";

export default function Email ({toggleEmail}) {

    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY
        ).then((response) => {
            console.log('Successfully sent', response.state, response.text);
            alert("Email sent successfully");            
            toggleEmail();
        }).catch((err) => {
            console.log('Failed', err.text, err);
            alert("Email error encountered");         
        });
    }
    
    return (
        <section id='email-container'>
            <div id='contact-top'>
                <h4>Contact Form</h4>
                <IconButton sx={{ position:'absolute', top:'1%', right: '5%', color:'black', height: '10%', 'margin-top':'5%'}} onClick={(toggleEmail)}>
                    <CloseIcon/>
                </IconButton>
            </div>
                <form ref={form} id='contact-bottom' onSubmit={onSubmit}>
                    <TextField sx={{width: '50%', margin: '5px', padding: '5px', label:{color: 'black'}, input:{color: 'black'}}} variant='filled' label='Name' type='text' name='from_name'/>
                    <TextField sx={{width: '50%', margin: '5px', padding: '5px', label:{color: 'black'}, input:{color: 'black'}}} variant='filled' label='Email' type='text'  name='reply_to'/>
                    <TextField sx={{width: '70%', margin: '5px', padding: '5px', label:{color: 'black'}}} inputProps={{style:{color:'black'}}} rows={2} variant='filled' label='Message' multiline={true} type='text' name='message'/>
                    <Button id='input-submit' sx={{border:'1px solid black', color:'black'}} variant='outlined' type='submit'>Submit</Button>
                </form>
        </section>
    )
}