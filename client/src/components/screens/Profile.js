import React from 'react'

function Profile() {
  return (
    <div style={{
      maxWidth: "550px",
      margin: "0px auto"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-around",
        margin: "18px 0px",
        borderBottom: "1px solid grey"
      }}>
        <div>
            <img style={{width:"160px", height: "160px", borderRadius:"80px"}}
            src="https://images.unsplash.com/photo-1646514323144-f35cf99ef800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=801" alt="profile pic" />
        </div>
        <div>
          <h4> Kaifff</h4>
            <div style={{display:"flex",
              justifyContent:"space-between",
              width: "110%"
              }}>
              <h5>9 posts</h5>
              <h5>500 followers</h5>
              <h5>21 following</h5>
            </div>
        </div>
      </div>
      <div className='gallary'>
          <img className= "item" src="https://images.unsplash.com/photo-1624704765327-d9e4e073889d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1472213984618-c79aaec7fef0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=855&q=80" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1565475668349-0130bea1059b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=542&q=80" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1556899727-2849fd6a224c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1591543620767-582b2e76369e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=887&q=80" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1564661392417-bb629e9c6519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=881&q=80" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1544332288-bf4cc86e0919?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1610609007942-1dcb6bc82cb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="gallarypic" />
          <img className= "item" src="https://images.unsplash.com/photo-1647202321657-530c84a29a62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="gallarypic" />
          
         
            
      </div>
    </div>
  )
}

export default Profile  