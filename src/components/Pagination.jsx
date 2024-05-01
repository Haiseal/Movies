import React,{useState} from 'react'

function Pagination() {
  let [pageNum,setPage] = useState(1);
  return (
    <div className='flex justify-center'>
      <div className='border'>Previours</div>
      <div className='border'> 1 </div>
      <div className='border'>Next</div>
    </div>
  )
}

export default Pagination
