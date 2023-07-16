import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setbody] = useState('');
  const [author, setAuthor] = useState('Shahryar');
  const[isPending,setIspending]=useState(false);
  const history=useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    const blog={title,body,author};
    // console.log(blog);
    setIspending(true);
    fetch(` http://localhost:8000/blogs`,{
      method:"POST",
      headers:{"content-Type":"application/json"},
      body:JSON.stringify(blog)

    }).then(()=>{
      console.log("New Blog Added");
      setIspending(false);
      history('/');
    });
  }
  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label >Blog Title :</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} name="" id="" required />
        <label htmlFor="">Blog Body:</label>
        <textarea value={body} onChange={(e) => setbody(e.target.value)} name="" id="" cols="30" rows="10" required></textarea>
        <label htmlFor="">Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)} >
          <option value="Shahryar">Shahryar</option>
          <option value="Shahryar Saeed">Shahryar Saeed</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog...</button>}
       
      </form>

    </div>
  )
}

export default Create
