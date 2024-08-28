import React from 'react'

function App() {
  return (
    <div>
        <h1 style={color='green'}>Inline Style in JSX Example</h1>
        <div style={{color:'darkblue',padding:'10px',border:'1px solid blue',borderRadius:'5px',}}>
            <p style={{color:'darkblue',fontSize:'16px'}}>This is a paragraph with Inine Styles applied</p>
        </div>
    </div>
  )
}

export default App