import Image from "next/image";
import Link from "next/link";

async function getAlbum(id) {
  const res = await fetch("http://localhost:4000/albums/" + id, {
    next: {
      revalidate: 0,
    },
  });

  return res.json();
}

export default async function AlbumDetails({ params }) {
  const album = await getAlbum(params.id);

  return (
    <main className="flex justify-center min-h-screen">
      <div className=" shrink-0 bg-stone-500 rounded-md mx-auto my-auto w-[100vh] h-[60vh]">
        {/* Top Container */}
        <div className="flex justify-around">
          {/* Section 1  */}
          <div className="ml-8 mt-6">
            <Image
              src={album.cover}
              alt={`Album cover for ${album.title}`}
              width={275}
              height={275}
              className="rounded-lg shadow-sm shadow-stone-900"
            />
          </div>

          {/* Section 2 */}
          <div className="mt-7 mr-10">
            <div className="uppercase text-stone-300">i listened to...</div>
            <div className="flex mt-5 items-center">
              <h1 className="">{album.title}</h1>
            </div>
            <div className="flex items-baseline ">
              <p className="bg-stone-700 mt-2 mb-5 px-2">{album.year}</p>
              <p className="text-stone-400 pl-2 pr-1 text-xl">by</p>
              <p className="hover:text-blue-500 text-stone-400 hover:border-blue-500  text-xl">
                {album.artist}
              </p>
            </div>
            <div className="flex w-96 justify-between pt-3 text-stone-200 border-stone-600 border-t">
              <div>Rating</div>
              <div className="mr-36">Like</div>
            </div>
            <div className="bg-stone-300 rounded-md text-stone-400 pl-3 pt-1 pb-36 mt-12 mb-8">
              Add a review...
            </div>
          </div>

          {/* Section 3*/}
          <div className="my-4 text-xl text-stone-300 hover:text-stone-100">
            <Link href={`/albums/${album.id}`}>X</Link>
          </div>
        </div>

        {/* Bottom Container */}
        <div className="flex justify-end">
          <button className="bg-green-600 rounded-md shadow-inner shadow-green-300 hover:bg-green-700 hover:shadow-green-400 text-lg px-3 mr-24">
            Save
          </button>
        </div>
      </div>
    </main>
  );
}
