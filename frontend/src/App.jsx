import { Route, Routes } from "react-router-dom"

function App() {
  

  return (
    
    <div className="flex">
      {/* Component */}
      <Sidebar/> 

      <div>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/explore" element={<ExplorePage/>} />
          <Route path="/likes" element={<LikesPage/>} />
        </Routes>
      </div>
    </div>
    
  )
}

export default App
