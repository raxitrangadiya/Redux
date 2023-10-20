import React, { useEffect, useState } from 'react';
// import React from 'react';
import { MDBBtn, MDBIcon, MDBTable, MDBTableHead, MDBTableBody, MDBModal, MDBModalDialog, MDBModalContent, MDBModalHeader, MDBModalTitle, MDBModalBody, MDBModalFooter, MDBInput, } from 'mdb-react-ui-kit';
import axios from 'axios';

const UsersAdmin = () => {
  const [apiData, setapiData] = useState();
  const [basicModal, setBasicModal] = useState(false);
  const toggleShow = () => setBasicModal(!basicModal);
  useEffect(() => {
    axios.get(`http://localhost:3004/users`)
      .then(function (result) {
        console.log("result ", result);
        let ApiList = Object.entries(result.data).map(([key, val], index) => {
          return <tr><td key={key}>
            <div className='d-flex align-items-center'>
              <div className='bg-dark' >
                <td className='bg-light'>{key}</td>
              </div>
            </div>
          </td>
            <td>{val.username}</td>
            <td>{val.email}</td>
            <td>

              <MDBBtn  onClick={toggleShow} color='success' rounded size='sm'>
                <MDBIcon far icon="edit" />
              </MDBBtn>
              &nbsp;&nbsp;
              <MDBBtn color='danger' rounded size='sm'>
                <MDBIcon fas icon="trash" />
              </MDBBtn>

            </td>
          </tr>

        })
        console.log("result api", ApiList);
        setapiData(ApiList)
      })
  }, [])
  console.log("api", apiData);
  return (
    <div>
      {/* <h1 className="text-center underline">Users management</h1> */}
      <MDBTable hover align='middle'>
        <MDBTableHead >
          <tr className='bg-secondary bg-gradient'>
            <th className='text-light  fw-bold' scope='col'>Sr.no</th>
            <th className='text-light  fw-bold' scope='col'>Name</th>
            <th className='text-light  fw-bold' scope='col'>Email</th>
            <th className='text-light  fw-bold' scope='col'>Actions</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {apiData}
          <MDBBtn onClick={toggleShow}>LAUNCH DEMO MODAL</MDBBtn>
          <MDBModal className='shadow-custom' show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog size="lg">
              <MDBModalContent>
                <MDBModalHeader>
                  <MDBModalTitle>Update Data</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                </MDBModalHeader>
                <MDBModalBody>
                  <MDBTable className='table-responsive-md' >
                    <tr  >
                      <td>  <MDBInput label='Text input' id='form1' type='text' /></td>
                      <td>  <MDBInput label='Email input' id='typeEmail' type='email' /></td>
                    
                    </tr>
                  
                  </MDBTable>
                </MDBModalBody>

                <MDBModalFooter>
                  <MDBBtn color='secondary' onClick={toggleShow}>
                    Close
                  </MDBBtn>
                  <MDBBtn>Save changes</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>
        </MDBTableBody>
      </MDBTable>
      <div>
      </div>
    </div>

  );
};

export default UsersAdmin;