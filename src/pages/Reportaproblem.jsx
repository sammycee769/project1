import React, { useState } from 'react';
import styles from './ReportProblem.module.css';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import { FaArrowUp } from "react-icons/fa6";

const ReportProblem = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    problem: '',
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));
};

const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, problem } = formData;

    if (!name) {
        alert('Please fill in your name.');
        return;
    }
    if (!email) {
        alert('Please fill in your email.');
        return;
    }
    if (!problem) {
        alert('Please describe the problem.');
        return;
    }

    alert("Thanks for talking to us! We'll respond as soon as possible.");
    setFormData({ name: '', email: '', problem: '' }); // Clear the form
};

return (
  <div id='bolt' className={styles.bolt}>
    <Nav/>
    <div className={styles.reportContainer}>
        <h1 className={styles.reportTitle}>Report a Problem</h1>
        <form onSubmit={handleSubmit} className={styles.reportForm}>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className={styles.input}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className={styles.input}
            />
            <label htmlFor="problem">Describe Problem</label>
            <textarea
                id="problem"
                name="problem"
                value={formData.problem}
                onChange={handleChange}
                placeholder="Describe the issue you're facing"
                rows="5"
                required
                className={styles.textarea}
            />
            <button type="submit" className={styles.submitBtn}>
                Send
            </button>
        </form>
    </div>
          <div className='cont'>
                <a id='bot' href="#bolt"><FaArrowUp /> Back to Top</a>
                </div>
                <Footer/>
        </div>
    );
};

export default ReportProblem;
