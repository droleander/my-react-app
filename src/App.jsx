import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  const persons = [
    { name: "Louie", job: "Chief Executive Officer", employed: true, pic: "https://www.dropbox.com/scl/fi/70x9rlpgi98z3n5790y8r/SNS_Louie.jpg?rlkey=3bxfp0s554afdv40sqqep5tqn&dl=1" },
    { name: "Ging", job: "Client Relationship Manager", employed: true, pic: "https://www.dropbox.com/scl/fi/g1vxx0isfwueq6u08xz46/SNS_Ging.jpg?rlkey=siswahrmxh69u3t6keofpwxot&dl=1" },
    { name: "Tisoy", job: "Work? Ano yun?", pic: "https://www.dropbox.com/s/kv4tacxc5u92b9n/SNS_Picture.jpg?dl=1" },
    { name: "Eddy", job: "Software Tester", employed: true, pic: "https://www.dropbox.com/scl/fi/ggomoa2xrbcn7d8mx0uet/SNS_Eddy.jpg?rlkey=4h1ftt7nfdsa7v4913swjg4qb&dl=1" },
    { name: "Ray", job: "IT Support - Lead", employed: true, pic: "https://www.dropbox.com/scl/fi/b7r6tyi5z16ug976lqdk3/SNS_Ray.jpg?rlkey=mzcng55w9cz4ipzlfrccy8pkn&dl=1" },
    { name: "Rence", job: "Software Designer - Lead", employed: true, pic: "https://www.dropbox.com/scl/fi/bmzgxaza72zk062xclbk5/SNS_Rence.jpg?rlkey=9a8c18s8aff2m0wwrdcl39q0x&dl=1" },
    {},
  ];

  return (
    <>
      <Header />
      <div className="container d-flex flex-wrap justify-content-center">
        {persons.map(person => (
          <Card
            key={crypto.randomUUID()}
            nameProp={person.name}
            jobProp={person.job}
            employedProp={person.employed}
            picProp={person.pic}
          />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App
