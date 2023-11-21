import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  const persons = [
    { name: "Louie", job: "Chief Executive Officer", employed: true, pic: "https://via.placeholder.com/150" },
    { name: "Ging", job: "Client Relationship Manager", employed: true },
    { name: "Tisoy", job: "Work? Ano yun?", pic: "https://www.dropbox.com/s/kv4tacxc5u92b9n/SNS_Picture.jpg?dl=1" },
    { name: "Eddy", job: "Software Tester", employed: true },
    { name: "Ray", job: "IT Support - Lead", employed: true },
    { name: "Rence", job: "Software Designer - Lead", employed: true },
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
