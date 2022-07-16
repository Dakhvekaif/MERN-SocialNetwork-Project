import React from 'react'

function Home() {
  return (
    <div className='home'>
      <div className='card home-card'>
        <h5>James Bond</h5>
        <div className='card-image'>
          <img className="item" src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="post" />
        </div>
        <div className='card-content'>
        <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h6>Title</h6>
          <p>This is amazing post</p>
          <input type="text" placeholder='Add a comment' />
        </div>
      </div>
      <div className='card home-card'>
        <h5>william Byers</h5>
        <div className='card-image'>
          <img className="item" src="https://images.unsplash.com/photo-1542892650-7659c76be2e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80" alt="post" />
        </div>
        <div className='card-content'>
        <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h6>Title</h6>
          <p>This is amazing post</p>
          <input type="text" placeholder='Add a comment' />
        </div>
      </div>
      <div className='card home-card'>
        <h5>Micheal hamilton</h5>
        <div className='card-image'>
          <img className="item" src="https://images.unsplash.com/photo-1541534401786-2077eed87a74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="post" />
        </div>
        <div className='card-content'>
        <i className="material-icons" style={{color:"red"}}>favorite</i>
          <h6>Title</h6>
          <p>This is amazing post</p>
          <input type="text" placeholder='Add a comment' />
        </div>
      </div>
    </div>
  )
}

export default Home