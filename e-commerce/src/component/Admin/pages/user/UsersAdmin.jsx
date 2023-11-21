import React, { useEffect, useState } from 'react';
// import React from 'react';
import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { DeleteUserinadmin, PatchUser, PutUser, retriveUsers } from '../../../../store/action/users';
import CustomHooks from '../../../../hooks/CustomHooks';
const UsersAdmin = () => {
  // const {id}=useParams()
  const dispatch = useDispatch()
  const [basicModal, setBasicModal] = useState(false);
  const [apiData, setapiData] = useState()
  const [deleteStatus,setdeleteStatus]=useState(false)
  const [Update, setUpdate] = useState();
  const [Updatestatus, setUpdatestatus] = useState(false)
  const [loading, setLoading] = useState(false)
  let printmodel=(Update)
  console.log(printmodel);

  const toggleShow = () => setBasicModal(!basicModal);
const {handleChange,updateData,inp} = CustomHooks(Update)
console.log("aa",Update);
// console.log("update",update);
  useEffect(() => {
    getData()
    // getDatabyId()
  },[deleteStatus,Updatestatus])

  // data print in table START
  const getData = async () => {
    const getResponce = await dispatch(retriveUsers())
    console.log("get data", getResponce);
    const alluserList = (getResponce.payload.data).map((val, key) => {
      return <tr key={key}>
        <td>{key}</td>
        <td>{val.username}</td>
        <td>{val.email}</td>
        <td>{val.mobile}</td>
        <td>{val.password}</td>
        <td>{val.role_id}</td>
        {/* <td>{val.id}</td> */}
        {/* <td>{val.id}</td> */}
        <td> <MDBBtn data-id={val.id} className='bg-success' onClick={()=>{toggleShow();getDatabyId(val.id)}}><i data-id={val.id}class="fas fa-pen"></i></MDBBtn></td>
        <td> <MDBBtn data-id={val.id} className='bg-danger' onClick={Deluser}><i className="far fa-trash-can" data-id={val.id}></i></MDBBtn></td>
      </tr>
    })
    setapiData(alluserList)
  }
  // data print in table END
  const getDatabyId=async(val)=>{
const patchResponce=await dispatch(PatchUser(val))
console.log("patchResponce",patchResponce.payload.data);
updateData(patchResponce.payload.data)
setUpdate(patchResponce.payload.data)
setLoading(true)
}
  // data Update in table START
const UpdateSave=async()=>{
  const PutResponce=await dispatch(PutUser(Update.id,inp))
  // inp
  console.log("PutResponce",inp);
  setUpdatestatus(true)
  setLoading(true)
}
  // data Update in table END
  
  
  
  // data DELETE in table START
  const Deluser=async(event)=>{
    const id = event.target.dataset.id 
    const DeleteResponce=await dispatch(DeleteUserinadmin(id))
    setdeleteStatus(true)
  }
  // data DELETE in table END
  return (
    <div>
      {/* <h1 className="text-center underline">Users management</h1> */}
      <MDBTable hover align='middle'>
        <MDBTableHead >
          <tr className='bg-secondary bg-gradient'>
            <th className='text-light  fw-bold' scope='col'>Sr.no</th>
            <th className='text-light  fw-bold' scope='col'>Username</th>
            <th className='text-light  fw-bold' scope='col'>Email</th>
            <th className='text-light  fw-bold' scope='col'>Mobile</th>
            <th className='text-light  fw-bold' scope='col'>password</th>
            <th className='text-light  fw-bold' scope='col'>role</th>
            {/* <th className='text-light  fw-bold' scope='col'>id</th> */}
            <th className='text-light  fw-bold' scope='col'>Edit</th>
            <th className='text-light  fw-bold' scope='col'>Delete</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {apiData}

{/* mdb model START */}


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
                      <td>  <MDBInput name='username'  value={loading ? inp.username:"false" }  onChange={handleChange} label='Text input' id='form1' type='username' /></td>
                      <td>  <MDBInput name='email'  value={loading ? inp.email:"false" } onChange={handleChange} label='Email input' id='typeEmail' type='email' /></td>
                      <td>  <MDBInput name='password'  value={loading ? inp.password:"false" } onChange={handleChange} label='password' id='typepassword' type='text' /></td>
                    </tr>
                  </MDBTable>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color='secondary' onClick={toggleShow}>
                    Close
                  </MDBBtn>
                  <MDBBtn onClick={()=>{UpdateSave();toggleShow()}}>Save changes</MDBBtn>
                </MDBModalFooter>
              </MDBModalContent>
            </MDBModalDialog>
          </MDBModal>

      {/* mdb model END */}
       
        </MDBTableBody>
      </MDBTable>
      <div>
      </div>
    </div>

);
};

export default UsersAdmin;