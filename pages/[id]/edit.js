import {
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
} from "mdb-react-ui-kit";
const axios = require("axios").default;
import Router, { useRouter } from "next/router";
import { useState } from "react";

function EditHero({ heros }) {
  const router = useRouter();
  const heroId = router.query.id;

  const [form, setForm] = useState({
    superHero: heros.superHero,
    realName: heros.realName,
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        data: JSON.stringify(form),
      });
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-8 d-flex justify-content-center">
      <MDBCard className="border border-2 my-2 w-50" alignment="center">
        <MDBCardBody>
          <MDBCardTitle className="mb-3">Edit Super Hero Identity</MDBCardTitle>
          <form onSubmit={handleForm}>
            <MDBInput
              onChange={handleChange}
              label="SuperHero"
              type="text"
              name="superHero"
              value={form.superHero}
              className="mb-3"
            />
            <MDBInput
              className="mb-3"
              onChange={handleChange}
              label="realName"
              type="text"
              name="realName"
              value={form.realName}
            />
            <MDBBtn type="submit">Click to Submit</MDBBtn>
          </form>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const id = params.id;
  const res = await axios(`http://localhost:3000/api/hero/${id}`);
  const { hero } = res.data;
  return {
    props: { heros: hero },
  };
}

export default EditHero;
