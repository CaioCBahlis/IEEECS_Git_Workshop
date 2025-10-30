
import './App.css'
import ContributorComponent from "./Contributor.tsx";

export type Contributor = {
    name: string
    country: string
    FirstCommit: boolean
}

let Contributors: Contributor[] = [
    {
        name: "Caio Carraro",
        country: "Brazil",
        FirstCommit: false
    },
    {
        name: "Anzhelika Kurnikova",
        country: "USSR",
        FirstCommit: true
    },
    {
        name: "Sofia Mitsuyuki",
        country: "Brazil",
        FirstCommit: false
    },
    {
        name: "Vama Shah",
        country: "Bharat",
        FirstCommit: true
    }, {
        name: "Vama Shah",
        country: "Bharat",
        FirstCommit: true
    },
    {
        name: "Caio Bahlis",
        country: "Brazil",
        FirstCommit: true
    }
]

function App() {

  return (

      <div id='background' className={'w-screen min-h-screen h-auto bg-stone-800 flex justify-center items-center'}>

          <div className={"w-[75%] min-h-[45rem] h-auto bg-stone-100 rounded-xl flex justify-start gap-10 flex-col mt-[2rem] pb-20"}>

              <h1 id={"Roboto"} className={"w-[100%] h-[2rem] text-slate-800 text-center flex mt-5 justify-center"}> Our Contributors </h1>

              <div className={"w-[100%] rounded-b-xl grid grid-cols-4 gap-y-[5rem] justify-items-center items-center"}>

                  {Contributors.map(Person =>
                      <ContributorComponent Person={Person} />

                          )}


              </div>


          </div>

      </div>
  )
}

export default App
