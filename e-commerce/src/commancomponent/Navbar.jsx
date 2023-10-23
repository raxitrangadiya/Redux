import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import './nav.css'
import { Link } from 'react-router-dom';
export default function App() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light className='text-light' bgColor='light'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'><img src="images/logo.png" alt="" /></MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#'>
                                <Link className='text-dark' to="/">Home</Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink>
                                <Link className='text-dark' to='/category'>Category</Link>
                                </MDBNavbarLink>
                        </MDBNavbarItem>


                    </MDBNavbarNav>

                    <form className='d-flex mx-3 input-group w-75'>
                        <input type='search' className='form-control ' placeholder='search somthing owesome 😊' aria-label='Search' />
                        <MDBBtn color='primary'>Search</MDBBtn>
                    </form>
                    <MDBNavbarItem className='me-3 me-lg-0 d-block'>
                        <MDBNavbarLink href='#'>
                            <MDBIcon className=' mt-2 text-dark' fas icon='shopping-cart' />
                        </MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBNavbarItem className='me-3 mx-3 me-lg-0 d-block'>
                        <MDBNavbarLink href='#'>
                            <MDBIcon className=' mt-2 text-dark' fas icon='bell' />
                        </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBDropdown className='mx-5'>
                        <MDBDropdownToggle   tag='a' className='nav-link ' role='button'>
                            <MDBIcon fas icon="user-alt fa-fw me-3 text-dark" /><span className='fs-5 text-dark'>Users</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className=''>
                            <MDBDropdownItem link ><Link className='text-dark fs-5' to='/login'>Login</Link></MDBDropdownItem>
                            <MDBDropdownItem link ><Link className='text-dark fs-5' to='/register'>Registration</Link></MDBDropdownItem>
                            <MDBDropdownItem link ><Link className='text-dark fs-5' to='/becomevendor'>Become seller</Link></MDBDropdownItem>
                            <MDBDropdownItem link ><Link className='text-danger fs-5' to='/login'>Help 24&times;7</Link></MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>

    );
}