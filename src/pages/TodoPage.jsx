import { useState } from "react"

function TodoPage() {
    const [lists, setLists] = useState([])
    const [input, setInput] = useState()

    const addList = (event) => {
        let key = Date.now()
        setLists([
            ...lists,
            {
                id: key,
                input: input
            }])
    }

    const handleDelete = (id) => {
        setLists(lists.filter((list) => list.id != id) )
    }

    return (
        <div>
            <div>
                <div className="flex flex-col not-[]:items-center justify-self-center w-96 p-8 bg-base-300 rounded-xl mt-64 border-white border-1">
                    <h1 className="font-bold mb-4">Todo List</h1>
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-row content-center">
                            <input className="input" type="text" value={input} onChange={(event) => setInput(event.target.value)} />
                            <button className="btn ml-2" onClick={addList}>Add</button>
                        </div>
                        <hr className="border-accent" />

                        <ul>
                            {
                                lists.map(list => (
                                    <li className="flex flex-row justify-between m-2" key={list.key}>
                                        <div>{list.input}</div><button className="btn w-6 h-8 text-wrap" onClick={() => handleDelete(list.id)}>❌</button>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoPage