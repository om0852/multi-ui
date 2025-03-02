import Histogram from "./_components/Bar_21"

const data = [1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 7, 7, 8, 9, 10]

export default function Example() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-bold mb-4">Histogram Example</h1>
      <Histogram data={data} bins={5} />
    </div>
  )
}
