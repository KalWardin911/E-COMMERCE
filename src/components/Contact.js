// // import React from 'react'

// // export default function Contact() {
// //   return (
// //     <div>
// //     <h1>
// //     Contact Page
// //     </h1>
// //     </div>
// //   )
// // }
// import React from 'react';

// export default function Contact() {
//   return (
//     <div>
//       <h1>Contact Page</h1>
//       <p>
//         We're here to help and answer any question you might have. We look forward to hearing from you.
//       </p>
//       <h2>Contact Information</h2>
//       <p>
//         <strong>Email:</strong> support@example.com
//       </p>
//       <p>
//         <strong>Phone:</strong> +1 (555) 123-4567
//       </p>
//       <p>
//         <strong>Address:</strong> 123 Example Street, City, State, ZIP Code
//       </p>
      
//       <h2>Business Hours</h2>
//       <p>
//         <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
//       </p>
//       <p>
//         <strong>Saturday:</strong> 10:00 AM - 4:00 PM
//       </p>
//       <p>
//         <strong>Sunday:</strong> Closed
//       </p>
      
//       <h2>Follow Us</h2>
//       <p>
//         <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a>
//       </p>
//       <p>
//         <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a>
//       </p>
//       <p>
//         <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a>
//       </p>
      
//       <h2>Contact Form</h2>
//       <form>
//         <div>
//           <label htmlFor="name">Name:</label>
//           <input type="text" id="name" name="name" required />
//         </div>
//         <div>
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" required />
//         </div>
//         <div>
//           <label htmlFor="message">Message:</label>
//           <textarea id="message" name="message" required></textarea>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }
import React from 'react';

export default function Contact() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>Contact Page</h1>
      <p style={{ textAlign: 'center' }}>
        We're here to help and answer any question you might have. We look forward to hearing from you.
      </p>
      <h2>Contact Information</h2>
      <p>
        <strong>Email:</strong> support@example.com
      </p>
      <p>
        <strong>Phone:</strong> +1 (555) 123-4567
      </p>
      <p>
        <strong>Address:</strong> 123 Example Street, City, State, ZIP Code
      </p>
      
      <h2>Business Hours</h2>
      <p>
        <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
      </p>
      <p>
        <strong>Saturday:</strong> 10:00 AM - 4:00 PM
      </p>
      <p>
        <strong>Sunday:</strong> Closed
      </p>
      
      <h2>Follow Us</h2>
      <p>
        <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a>
      </p>
      <p>
        <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a>
      </p>
      <p>
        <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">Instagram</a>
      </p>
      
      <h2>Contact Form</h2>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '400px' }}>
        <div style={{ marginBottom: '10px', width: '100%' }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '10px', width: '100%' }}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required style={{ width: '100%' }} />
        </div>
        <div style={{ marginBottom: '10px', width: '100%' }}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required style={{ width: '100%' }}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
