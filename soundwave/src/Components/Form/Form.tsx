import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const TextControlsExample: React.FC = () => {
  return (
    <Form className="bg-black rounded-5 text-white fs-1vw gap-1rem p-4">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="text-white">Name</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" className="bg-transparent border-0 text-white" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label className="text-white">Email</Form.Label>
        <Form.Control type="mail" placeholder="Enter text" className="bg-transparent border-0 text-white" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        <Form.Label className="text-white">Password</Form.Label>
        <Form.Control type="text" placeholder="Enter text" className="bg-transparent border-0 text-white" />
      </Form.Group>
      <Button type="submit" variant="primary" className="w-100" style={{ fontSize: '1.2rem' }}>
        Join Now
      </Button>
    </Form>
  );
}


export default TextControlsExample;