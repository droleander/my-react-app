import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  
  const persons = [
    { name: "Mario", job: "Plumber", employed: true, pic: "https://via.placeholder.com/150" },
    { name: "Luigi", job: "Plumber", employed: true, pic: "https://via.placeholder.com/150" },
    { name: "Peach", job: "Princess" },
    { name: "Bowser", job: "Antagonist" },
    { name: "Louie", job: "Chief Executive Officer", employed: true },
    { name: "Ging", job: "Client Relationship Manager", employed: true },
    { name: "Tisoy", job: "Work? Ano yun?" },
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
