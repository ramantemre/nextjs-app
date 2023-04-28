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

declare global {
  type hero = Array<HeroData>;
  type HeroData = {
    superHero: string;
    realName: string;
    _id: string;
  };
}

export default function MainPage(props: { hero: hero }) {
  return (
    <div className="container">
      <h4 className="display-6 mt-4 text-center">Superhero Identity Manager</h4>
      <MDBRow>
        {props.hero.map((data: HeroData) => {
          return (
            <MDBCol key={data._id} sm="4">
              <MDBCard className="border border-2 my-2">
                <MDBCardBody>
                  <MDBCardTitle>
                    The Super Hero: <b>{data.superHero}</b>
                  </MDBCardTitle>
                  <MDBCardText>
                    If you want to reveal identity click on view button below{" "}
                  </MDBCardText>
                  <Link href={`/${data._id}`}>
                    <MDBBtn>View</MDBBtn>
                  </Link>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
    </div>
  );
}
export const getServerSideProps = async () => {
  const resp = await axios.get("http://localhost:3000/api/hero");
  const { hero } = resp.data;
  return {
    props: { hero },
  };
};
