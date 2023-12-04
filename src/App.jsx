import { useState } from "react";
import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  
  const people = [
    { idx: crypto.randomUUID(), name: "Mario", job: "Master Plumber", pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.AKVnkxcm7-S_nnXUDY87uwHaEK%26pid%3DApi&f=1&ipt=9dc443024e7a331171888c0f334fc907115c307b1a274432aeb9e1fec68e18c1&ipo=images", hobbies: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolorum maiores quos nostrum sequi nam." },
    { idx: crypto.randomUUID(), name: "Luigi", job: "Assistant Plumber", pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fplay.nintendo.com%2Fimages%2FMasthead_luigi.17345b1513ac044897cfc243542899dce541e8dc.9afde10b.png&f=1&nofb=1&ipt=3e38cb7224ed1a8fe5c0feff341e1b1d8db21305073b6cb664b1bd93624c1ae4&ipo=images", hobbies: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo, sunt. In voluptate reprehenderit maxime incidunt." },
    { idx: crypto.randomUUID(), name: "Peach", job: "Princess", pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1409899072%2FOfficialPeach_400x400.jpg&f=1&nofb=1&ipt=45708281abdd8e77a0ea01ea35df5459ab83598e245f22bf9ce6b2fbdddc2efc&ipo=images", hobbies: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum fugit consequuntur cupiditate itaque ad deleniti!" },
    { idx: crypto.randomUUID(), name: "Bowser", job: "Antagonist", pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mariowiki.com%2Fimages%2F7%2F7d%2FMSOGT_Bowser.png&f=1&nofb=1&ipt=bb6796360319545b8583458880f42740be428378d19a95922ffc9d87da75e034&ipo=images", hobbies: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae maxime, rem unde quos deleniti consequatur." },
    { idx: crypto.randomUUID(), name: "", job: "", pic: "https://via.placeholder.com/150", hobbies: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, tempora praesentium! Accusantium quibusdam iure dolores." }
    // { idx: crypto.randomUUID(), name: "Maureen", job: "CEO", pic: "https://www.dropbox.com/scl/fi/70x9rlpgi98z3n5790y8r/SNS_Maureen.jpg?rlkey=3bxfp0s554afdv40sqqep5tqn&dl=1", hobbies: "Making stamps, watching concerts, shopping online, etc." },
    // { idx: crypto.randomUUID(), name: "Cess", job: "Client Relationship Manager", pic: "https://www.dropbox.com/scl/fi/g1vxx0isfwueq6u08xz46/SNS_Ging.jpg?rlkey=siswahrmxh69u3t6keofpwxot&dl=1", hobbies: "Secret kasi SPG. LOL!" },
    // { idx: crypto.randomUUID(), name: "Tisoy", job: "IT Network Operations Analyst", pic: "https://www.dropbox.com/s/kv4tacxc5u92b9n/SNS_Picture.jpg?dl=1", hobbies: "Mag-internet, matulog, etc." },
    // { idx: crypto.randomUUID(), name: "Joyce", job: "Assistant Operations Manager", pic: "https://www.dropbox.com/scl/fi/5fq61ek6lzysv8nabvgxu/SNS_Joyce.jpg?rlkey=ene8c7qcluz4terp1l62fp9s0&dl=1", hobbies: "Kumain sa buffet, uminom ng Soju, etc. " },
    // { idx: crypto.randomUUID(), name: "Anne", job: "ICU and Trauma Head", pic: "https://www.dropbox.com/scl/fi/pdwsm3n3hd5eh3radxefa/SNS_Anne.jpg?rlkey=k18703rx37v21g4hf43jomy29&dl=1", hobbies: "Magpunta sa mga seminars/talks/book-signings, etc." },
    // { idx: crypto.randomUUID(), name: "Karen", job: "COO", pic: "https://www.dropbox.com/scl/fi/eze5zp5t6kfgnuet4q7w2/SNS_Karen.jpg?rlkey=a2dn3jxaedlyi6dn4dr88hho1&dl=1", hobbies: "Magpunta sa mall at out-of-town, manood ng UAAP, etc." },
    // { idx: crypto.randomUUID(), name: "Veronica", job: "Customer Support Lead", pic: "https://www.dropbox.com/scl/fi/7a4s7vom6xiwicvoijtfc/SNS_Veronica.jpg?rlkey=is3qkv4obomqzbodv24bluasu&dl=1", hobbies: "Bonding with pamangkin, Mamasyal kung saan-saan with the fam, etc." },
    // { idx: crypto.randomUUID(), name: "Glen", job: "IT Engineering Lead", pic: "https://www.dropbox.com/scl/fi/e9akceyatokw5v5bfoae7/SNS_Glen.jpg?rlkey=4hgyxcxovgkr7nzv9e7e522rt&dl=1", hobbies: "Mamasyal sa iba't-ibang state. Eh di kayo na nagbabakasyon sa Hawaii! LOL!" },
    // { idx: crypto.randomUUID(), name: "Eddy", job: "Software Test Lead", pic: "https://www.dropbox.com/scl/fi/ggomoa2xrbcn7d8mx0uet/SNS_Eddy.jpg?rlkey=4h1ftt7nfdsa7v4913swjg4qb&dl=1", hobbies: "Touring South Korea, etc." },
    // { idx: crypto.randomUUID(), name: "Ray", job: "IT Support Lead", pic: "https://www.dropbox.com/scl/fi/b7r6tyi5z16ug976lqdk3/SNS_Ray.jpg?rlkey=mzcng55w9cz4ipzlfrccy8pkn&dl=1", hobbies: "Biking, hiking, etc." },
    // { idx: crypto.randomUUID(), name: "Rence", job: "Software Design Lead", pic: "https://www.dropbox.com/scl/fi/bmzgxaza72zk062xclbk5/SNS_Rence.jpg?rlkey=9a8c18s8aff2m0wwrdcl39q0x&dl=1", hobbies: "Playing video games, etc." },
    // { idx: crypto.randomUUID(), name: "Long", job: "IT Network Operations Lead", pic: "https://www.dropbox.com/scl/fi/uxxraly5k8su5kp9d5hpl/SNS_Long.jpg?rlkey=upnkzvjswdem0xv2qgnd0gdt2&dl=1", hobbies: "Kumain sa Aysee. LOL!" },
    // { idx: crypto.randomUUID(), name: "Aqui", job: "Asset Management Lead", pic: "https://www.dropbox.com/scl/fi/s7awq0du3wx4yr98wgqn1/SNS_Aqui.jpg?rlkey=m5agi094v54bdqbt8ic6nuxfa&dl=1", hobbies: "Biking, mamasyal kung saan-saan, etc." },
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
