import { instructionData } from 'src/data/instructionData'
import { useStore } from 'src/store'

const Instruction = () => {
  const { setGameStarted } = useStore()

  return (
    <div className="flex h-screen items-center justify-center bg-slate-300">
      <div className="w-full max-w-xl rounded-lg bg-black p-8 text-white sm:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        <h2 className="mb-6 text-center text-3xl font-bold">Game Instructions</h2>

        <table className="min-w-full table-auto">
          <thead>
            <tr>
              <th className="border-b-2 px-4 py-2 text-left text-lg">Action</th>
              <th className="border-b-2 px-4 py-2 text-left text-lg">Description</th>
            </tr>
          </thead>
          <tbody>
            {instructionData.map((item, index) => (
              <tr key={index}>
                <td className="border-b px-4 py-2">{item.action}</td>
                <td className="border-b px-4 py-2">{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setGameStarted()}
            className="rounded bg-blue-500 px-5 py-2 text-3xl font-bold text-white transition-colors hover:bg-blue-700"
          >
            PLAY
          </button>
        </div>
      </div>
    </div>
  )
}

export default Instruction
