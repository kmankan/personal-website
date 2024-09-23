import FlickeringGrid from "../@/components/magicui/flickering-grid";
import HyperText from "../@/components/magicui/hyper-text";
import { File, Folder, Tree } from "../@/components/magicui/file-tree";

function App() {
  return (
    <div>
      <FlickeringGrid
        className="z-0 absolute inset-0 size-full"
        squareSize={4}
        gridGap={6}
        color="6B7280"
        maxOpacity={0.1}
        flickerChance={0.3}
        height={1000}
        width={1000}
      />

      <div className='title'>
        <HyperText
          className="flex flex-row mt-5"
          duration={800}
          text="malin.kankanamge"
        />
      </div>

      <div className="mt-8 text-center">
        <h2>Hey, welcome to my site.</h2>
      </div>
      <div className="mt-4 text-center">
        <h2>These are some projects i've been building</h2>
      </div>




    </div>
  )
}

export default App
