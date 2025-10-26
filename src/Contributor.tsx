import type {Contributor} from "./App.tsx";


export default function ContributorComponent(props: {Person: Contributor}){

    return (
        <div className={"w-[70%]  min-h-[10rem] h-[75%] bg-stone-500 rounded-xl"}>

            <div className={"w-[100%] h-[80%] bg-stone-300 rounded-t-xl"}>

            </div>

            <div className={"w-[100%] h-[50%] bg-stone-600 flex justify-center items-center flex-col rounded-b-xl shadow-2xl"}>
                <p className={"text-md"}> {props.Person.name} </p>
                <p className={"text-md"}> {props.Person.country} </p>
            </div>


        </div>
    )
}