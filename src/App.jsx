import { useState } from "react";
import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  const people = [
    { idx: crypto.randomUUID(), name: "Maureen", job: "CEO", pic: "https://www.dropbox.com/scl/fi/70x9rlpgi98z3n5790y8r/SNS_Louie.jpg?rlkey=3bxfp0s554afdv40sqqep5tqn&dl=1" },
    { idx: crypto.randomUUID(), name: "Cess", job: "Client Relationship Manager", pic: "https://www.dropbox.com/scl/fi/g1vxx0isfwueq6u08xz46/SNS_Ging.jpg?rlkey=siswahrmxh69u3t6keofpwxot&dl=1" },
    { idx: crypto.randomUUID(), name: "Tisoy", job: "IT Network Operations - Analyst", pic: "https://www.dropbox.com/s/kv4tacxc5u92b9n/SNS_Picture.jpg?dl=1" },
    { idx: crypto.randomUUID(), name: "Joyce", job: "Assistant Operations Manager", pic: "https://www.dropbox.com/scl/fi/5fq61ek6lzysv8nabvgxu/SNS_Joyce.jpg?rlkey=ene8c7qcluz4terp1l62fp9s0&dl=1" },
    { idx: crypto.randomUUID(), name: "Anne", job: "ICU and Trauma - Head", pic: "https://www.dropbox.com/scl/fi/pdwsm3n3hd5eh3radxefa/SNS_Anne.jpg?rlkey=k18703rx37v21g4hf43jomy29&dl=1" },
    { idx: crypto.randomUUID(), name: "Karen", job: "COO", pic: "https://www.dropbox.com/scl/fi/eze5zp5t6kfgnuet4q7w2/SNS_Karen.jpg?rlkey=a2dn3jxaedlyi6dn4dr88hho1&dl=1" },
    { idx: crypto.randomUUID(), name: "Veronica", job: "Customer Support - Lead", pic: "https://www.dropbox.com/scl/fi/7a4s7vom6xiwicvoijtfc/SNS_Veronica.jpg?rlkey=is3qkv4obomqzbodv24bluasu&dl=1" },
    { idx: crypto.randomUUID(), name: "Glen", job: "IT Engineering - Lead", pic: "https://www.dropbox.com/scl/fi/e9akceyatokw5v5bfoae7/SNS_Glen.jpg?rlkey=4hgyxcxovgkr7nzv9e7e522rt&dl=1" },
    { idx: crypto.randomUUID(), name: "Eddy", job: "Software Tester - Lead", pic: "https://www.dropbox.com/scl/fi/ggomoa2xrbcn7d8mx0uet/SNS_Eddy.jpg?rlkey=4h1ftt7nfdsa7v4913swjg4qb&dl=1" },
    { idx: crypto.randomUUID(), name: "Ray", job: "IT Support - Lead", pic: "https://www.dropbox.com/scl/fi/b7r6tyi5z16ug976lqdk3/SNS_Ray.jpg?rlkey=mzcng55w9cz4ipzlfrccy8pkn&dl=1" },
    { idx: crypto.randomUUID(), name: "Rence", job: "Software Designer - Lead", pic: "https://www.dropbox.com/scl/fi/bmzgxaza72zk062xclbk5/SNS_Rence.jpg?rlkey=9a8c18s8aff2m0wwrdcl39q0x&dl=1" },
    { idx: crypto.randomUUID(), name: "Long", job: "IT Network Operations - Lead", pic: "https://www.dropbox.com/scl/fi/uxxraly5k8su5kp9d5hpl/SNS_Long.jpg?rlkey=upnkzvjswdem0xv2qgnd0gdt2&dl=1" },
    { idx: crypto.randomUUID(), name: "Aqui", job: "Asset Management - Lead", pic: "https://www.dropbox.com/scl/fi/s7awq0du3wx4yr98wgqn1/SNS_Aqui.jpg?rlkey=m5agi094v54bdqbt8ic6nuxfa&dl=1" }
  ];
  
  const [employees, setEmployees] = useState(people);
  
  const handleDelete = (idx) => {
    const filtered = employees.filter(employee => employee.idx !== idx);
    setEmployees(filtered);
  }
  
  return (
    <>
      <Header />
      <Card employees={employees} handleDelete={handleDelete} heading="Current Employees"/>
      <Footer />
    </>
  )
}

export default App
