import React from 'react'
import { MDBNavbar, MDBContainer, MDBNavbarBrand } from 'mdb-react-ui-kit'
import SignOut from './SignOut'
export default function SignOutBox() {
  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer size="md">
          <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
          <SignOut />
        </MDBContainer>
      </MDBNavbar>
    </>
  )
}
