import Link from "next/link";
import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useRouter } from "next/router";

export default function ViewHero(props) {
  const { hero: data } = props;
  const router = useRouter();
  const heroId = router.query.id;
  const handleDelete = async () => {
    const res = await axios(`http://localhost:3000/api/hero/${heroId}`, {
      method: "DELETE",
    });
    if (res) router.push("/");
  };

  return (
    <div className="container">
      <h4 className="display-6 mt-4 text-center">Identity Revealed</h4>
      <MDBRow>
        <MDBCol sm="4">
          <MDBCard className="border border-2 my-2">
            <MDBCardBody>
              <MDBCardText>
                The Real name of our Super Hero <b>{data.superHero}</b> is:
              </MDBCardText>
              <MDBCardText>{data.realName}</MDBCardText>
              <Link href={`/${heroId}/edit`}>
                <MDBBtn className="">Edit</MDBBtn>
              </Link>
              <MDBBtn className="btn btn-danger mx-2" onClick={handleDelete}>
                Delete
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const resp = await axios.get(`http://localhost:3000/api/hero/${id}`);
  const { hero } = resp.data;
  return {
    props: { hero },
  };
};
