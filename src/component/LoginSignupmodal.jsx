import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the app root element for accessibility

const LoginSignupModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // State to track if it's in login mode or signup mode

  const handleToggleMode = () => {
    setIsLogin(!isLogin); // Toggle between login and signup mode
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login or signup logic here based on the current mode (isLogin)
    // You can access the form data from the event object (e.target)
    // Example: const username = e.target.username.value;
    //          const password = e.target.password.value;
    //          ...

    // Reset the form fields after submission if needed
    e.target.reset();

    // Close the modal after form submission
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Login/Signup Modal"
    >
      <h2>{isLogin ? "Login" : "Signup"}</h2>

      {/* Login Form */}
      {isLogin && (
        <form onSubmit={handleSubmit}>
          {/* Add your login form fields */}
          <input type="text" name="username" placeholder="Username" /><br/>
          <input type="password" name="password" placeholder="Password" /><br/>
          <button type="submit">Login</button>
        </form>
      )}

      {/* Signup Form */}
      {!isLogin && (
        <form onSubmit={handleSubmit}>
          {/* Add your signup form fields */}
          <input type="text" name="username" placeholder="Username" /><br/>
          <input type="email" name="email" placeholder="Email" /><br/>
          <input type="password" name="password" placeholder="Password" /><br/>
          <button type="submit">Signup</button>
        </form>
      )}

      {/* Toggle between Login and Signup mode */}
      <button onClick={handleToggleMode}>
        {isLogin ? "Switch to Signup" : "Switch to Login"}
      </button>

      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default LoginSignupModal;
