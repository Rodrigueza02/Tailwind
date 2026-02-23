import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-100 to-pink-100">
      <div className="w-96 bg-white rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300">
        
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/099/443/non_2x/sunset-landscape-with-mountains-and-lake-free-vector.jpg"
          alt="Sunset Landscape"
          className="w-full h-48 object-cover"
        />

        <div className="p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Sunset Paradise
          </h2>

          <p className="text-gray-500 text-sm leading-relaxed">
            Discover breathtaking natural views surrounded by mountains,
            peaceful lakes, and unforgettable sunsets that inspire calm
            and creativity.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
              #NextJS
            </span>
            <span className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full">
              #WebDesign
            </span>
            <span className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full">
              #UIConcept
            </span>
          </div>

          <button className="mt-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition">
            Explore More
          </button>
        </div>

      </div>
    </div>
  );
}