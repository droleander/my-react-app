import { useState } from "react";
import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  
  const people = [
    { idx: crypto.randomUUID(), name: "Maureen", job: "CEO", pic: "https://www.dropbox.com/scl/fi/70x9rlpgi98z3n5790y8r/SNS_Maureen.jpg?rlkey=3bxfp0s554afdv40sqqep5tqn&dl=1", hobbies: "Making stamps, watching concerts, shopping online, etc." },
    { idx: crypto.randomUUID(), name: "Cess", job: "Client Relationship Manager", pic: "https://www.dropbox.com/scl/fi/g1vxx0isfwueq6u08xz46/SNS_Ging.jpg?rlkey=siswahrmxh69u3t6keofpwxot&dl=1", hobbies: "Secret kasi SPG. LOL!" },
    { idx: crypto.randomUUID(), name: "Tisoy", job: "IT Network Operations Analyst", pic: "https://www.dropbox.com/s/kv4tacxc5u92b9n/SNS_Picture.jpg?dl=1", hobbies: "Mag-internet, matulog, etc." },
    { idx: crypto.randomUUID(), name: "Joyce", job: "Assistant Operations Manager", pic: "https://www.dropbox.com/scl/fi/5fq61ek6lzysv8nabvgxu/SNS_Joyce.jpg?rlkey=ene8c7qcluz4terp1l62fp9s0&dl=1", hobbies: "Kumain sa buffet, uminom ng Soju, etc. " },
    { idx: crypto.randomUUID(), name: "", job: "", pic: "", hobbies: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, iure." }
  ];
  
  const [employees, setEmployees] = useState(people);
  
  const handleDelete = (idx => {
    const filtered = employees.filter(employee => employee.idx !== idx);
    setEmployees(filtered);
  })
  
  return (
    <>
      <Header />
      <Card employees={employees} handleDelete={handleDelete} heading="Current Employees" />
      <Footer />
    </>
  )
}

export default App
