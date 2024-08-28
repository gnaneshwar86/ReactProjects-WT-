import React  from 'react';
const App=()=>{
    const divis={
        position:'absolute',
        top:'25%',
        left:'35%',
        textAlign:'center',
        alignItems:'center',
        justifyContent:'center',
    }
    const box2={
        border:'2px,grey,solid',
        backgroundColor:'lightgrey',
        height:'100px',
        width:'300px',
        textAlign:'center',
    }
    const box1={
        border:'2px,grey,solid',
        backgroundColor:'lightgrey',
        height:'300px',
        width:'300px',
        
    }

  return(
    <div style={divis}>
      <h1>Car and Location Info</h1>
      <div style={box1}>
        <h2>Tesla Model S</h2>
        <img src="https://imgd-ct.aeplcdn.com/1056x660/n/xsoupsa_1476828.jpg?q=80" style={{height:'200px',width:'200px',textAlign:'center'}} alt='tesla'></img>
      </div>
      <footer style={box2}>
        <h3>Tesla</h3>
        <h4>Palo Alto</h4>
      </footer>
    </div>
  )
 }
export default App;