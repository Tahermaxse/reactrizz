import NumberTicker from "./Components/Text Animation/NumberTicker"

function App() {
  return (
    <>
      <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={100} />
    </p>
    </>
  )
}

export default App
