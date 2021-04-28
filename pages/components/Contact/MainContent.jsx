import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzFb8s3QcEowPVLArSWfOHb5myHXf590o",
  authDomain: "thedanielmark-v4.firebaseapp.com",
  projectId: "thedanielmark-v4",
  storageBucket: "thedanielmark-v4.appspot.com",
  messagingSenderId: "49428790703",
  appId: "1:49428790703:web:74f726002e83b60b86c35a",
  measurementId: "G-8SXMJR0K0Q",
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log("Called function");
    const name = state.name;
    const email = state.email;
    const subject = state.subject;
    const message = state.message;

    console.log(name, email, subject, message);

    var db = firebase.firestore();
    // Check inputs
    if (name != "" && email != "" && subject != "" && message != "") {
      db.collection("contact")
        .add({
          Name: name,
          Email: email,
          Subject: subject,
          Message: message,
          Created: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          setOpen(true);
          setState((prevState) => ({
            ...prevState,
            name: "",
            email: "",
            subject: "",
            message: "",
          }));
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    } else {
      console.log("Oops");
    }
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-end w-100 mb-3">
        <Link href={"/"} passHref>
          <a className="grey-to-white text-decoration-none d-flex align-items-baseline">
            <i className="far fa-times-circle h1"></i>
          </a>
        </Link>
      </div>
      <div>
        <h5 className="mb-4">
          Are you interested in working on a project with me? Write to me and I
          will get back to you at the earliest!
        </h5>
        <form autoComplete="off">
          <div className="container px-0">
            <div className="row">
              <div className="col-12 col-md-6">
                <TextField
                  id="name"
                  label="Name"
                  variant="filled"
                  className="w-100 mb-3"
                  onChange={handleChange}
                  value={state.name}
                  required
                />
              </div>
              <div className="col-12 col-md-6">
                <TextField
                  id="email"
                  label="Email"
                  variant="filled"
                  className="w-100 mb-3"
                  onChange={handleChange}
                  value={state.email}
                  required
                />
              </div>
            </div>
          </div>
          <TextField
            id="subject"
            label="Subject"
            variant="filled"
            className="w-100 mb-3"
            onChange={handleChange}
            value={state.subject}
            required
          />
          <TextField
            id="message"
            label="Message"
            variant="filled"
            className="w-100 mb-3"
            onChange={handleChange}
            value={state.message}
            rows={5}
            multiline={true}
            required
          />
          <Button
            variant="contained"
            color="primary"
            className="w-100 text-capitalize font-weight-bold"
            size="large"
            onClick={submitForm}
            style={{ border: "none", outline: "none" }}
          >
            Submit
          </Button>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          I received your message! 🙂
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
