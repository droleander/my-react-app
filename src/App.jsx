import { useState } from "react";
import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  const [persons, setPersons] = useState([
    { idx: crypto.randomUUID(), name: "Maureen", job: "CEO", pic: "https://www.dropbox.com/scl/fi/70x9rlpgi98z3n5790y8r/SNS_Louie.jpg?rlkey=3bxfp0s554afdv40sqqep5tqn&dl=1" },
    { idx: crypto.randomUUID(), name: "Cess", job: "Client Relationship Manager", pic: "https://www.dropbox.com/scl/fi/g1vxx0isfwueq6u08xz46/SNS_Ging.jpg?rlkey=siswahrmxh69u3t6keofpwxot&dl=1" },
    { idx: crypto.randomUUID(), name: "Tisoy", job: "IT Network Operations - Analyst", pic: "https://www.dropbox.com/s/kv4tacxc5u92b9n/SNS_Picture.jpg?dl=1" },
    { idx: crypto.randomUUID(), name: "Joyce", job: "Assistant Operations Manager", pic: "https://www.dropbox.com/scl/fi/5fq61ek6lzysv8nabvgxu/SNS_Joyce.jpg?rlkey=ene8c7qcluz4terp1l62fp9s0&dl=1" },
    { idx: crypto.randomUUID(), name: "Anne", job: "ICU and Trauma - Head", pic: "" },
    { idx: crypto.randomUUID(), name: "Karen", job: "COO", pic: "" },
    { idx: crypto.randomUUID(), name: "Veronica", job: "Customer Support - Lead", pic: "" },
    { idx: crypto.randomUUID(), name: "Glen", job: "IT Engineering - Lead", pic: "" },
    { idx: crypto.randomUUID(), name: "Eddy", job: "Software Tester - Lead", pic: "https://www.dropbox.com/scl/fi/ggomoa2xrbcn7d8mx0uet/SNS_Eddy.jpg?rlkey=4h1ftt7nfdsa7v4913swjg4qb&dl=1" },
    { idx: crypto.randomUUID(), name: "Ray", job: "IT Support - Lead", pic: "https://www.dropbox.com/scl/fi/b7r6tyi5z16ug976lqdk3/SNS_Ray.jpg?rlkey=mzcng55w9cz4ipzlfrccy8pkn&dl=1" },
    { idx: crypto.randomUUID(), name: "Rence", job: "Software Designer - Lead", pic: "https://www.dropbox.com/scl/fi/bmzgxaza72zk062xclbk5/SNS_Rence.jpg?rlkey=9a8c18s8aff2m0wwrdcl39q0x&dl=1" },
    { idx: crypto.randomUUID(), name: "Long", job: "IT Network Operations - Lead", pic: "" },
    { idx: crypto.randomUUID(), name: "Grace", job: "Asset Management - Lead", pic: "" },
    {}
  ]);
  
  const handleDelete = (idx) => {
    const filtered = persons.filter(person => person.idx !== idx);
    setPersons(filtered);
  }
  
  return (
    <>
      <Header />
      <Card persons={persons} handleDelete={handleDelete} heading="Current Employees"/>
      <Footer />
    </>
  )
}

export default App
