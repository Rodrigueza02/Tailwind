import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <div className="flex flex-col w-80 bg-white rounded-xl shadow-lg overflow-hidden border border-red-500">        
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/882/528/non_2x/beautiful-landscape-pine-forest-with-mesmerizing-mountain-views-free-vector.jpg"
          alt="Landscape"
          className="w-full h-40 object-cover"
        />

        <div className="flex flex-col gap-3 p-4">
          <h2 className="text-2xl font-bold text-black">
            Red Heaven
          </h2>

          <p className="text-gray-600 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque.
          </p>

          <div className="flex gap-2">
            <span className="bg-red-400 text-white text-xs px-3 py-1 rounded-full">
              #tailwind
            </span>
            <span className="bg-red-400 text-white text-xs px-3 py-1 rounded-full">
              #frontendEverything
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
