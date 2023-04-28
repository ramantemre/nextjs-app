import axios from "axios";
import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
} from "mdb-react-ui-kit";
import { useRouter } from "next/router";
import { useState } from "react";
const AddNewHero = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    superHero: "",
    realName: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios("http://localhost:3000/api/hero", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(form),
    });
    if (resp.data) {
      router.push("/");
    }
  };
  return (
    <div className="container mt-8 d-flex justify-content-center">
      {/* <h6 className="display-6">Add new Super Hero</h6> */}

      <MDBCard className="border border-2 my-2 w-50" alignment="center">
        <MDBCardBody>
          <MDBCardTitle className="mb-3">Add new Super Hero</MDBCardTitle>
          <form onSubmit={handleSubmit}>
            <MDBInput
              type="text"
              name="superHero"
              value={form.superHero}
              onChange={handleChange}
              label="Enter Super Hero Name"
              required
              className="mb-3"
            />
            <MDBInput
              type="text"
              name="realName"
              value={form.realName}
              onChange={handleChange}
              label="Enter Real Name"
              required
              className="mb-3"
            />
            <MDBBtn type="submit">Click to Submit</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default AddNewHero;
