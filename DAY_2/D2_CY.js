import React from 'react'

function App() {
  const inline={
    textAlign:'center',
    verticalAlign:'middle',
    backgroundColor:'lightblue',
    height:'500px',
    width:'500px',
  }
  return (
    <div style={inline}>
        <h1>Smile Component</h1>
        <br /><br />
        <h6>It is a functional Component</h6>
        <br />
        <img src="https://cdn.pixabay.com/photo/2020/12/27/20/24/smile-5865208_640.png" style={{height:'250px',width:"250px"}} alt='smile'></img>
    </div>
  )
}

export default App