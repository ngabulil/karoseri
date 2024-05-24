import { VisiSvg, MisiSvg } from "../../assets/svg"

const Visi = () => {
    console.log("ini visi")
    const datavisi = ["lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum", "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"]
  return (
    <div>
      <div className="max-w-8xl mx-auto px-12 mb-8 sm:px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Visi Dan Misi Perusahaan</h2>
        <div className="flex gap-8 sm:flex-col">
          <div className="w-1/2 border rounded-3xl p-8 bg-[rgb(25,148,179)] text-white font-medium sm:w-full">
            <div>
              <p className="text-center text-sky-200 font-bold text-2xl">Visi</p>
            </div>
            <div className="flex justify-center pb-3">
              <MisiSvg width={220} />
            </div>
            <div className="text-justify ml-[20px]">
              <ul className="list-disc flex flex-col gap-4">
                {datavisi.map((item) => (
                  <li className="marker:text-xl">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-1/2 border rounded-3xl p-8 bg-[rgb(63,195,216)] text-white font-medium sm:w-full">
            <div>
              <p className="text-center text-blue-900 font-bold text-2xl">Misi</p>
            </div>
            <div className="flex justify-center">
              <VisiSvg width={200} />
            </div>
            <div className="text-justify ml-[20px]">
              <ul className="list-disc flex flex-col gap-4">
                {datavisi.map((item) => (
                  <li className="marker:text-xl">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visi