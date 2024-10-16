import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <div className="container mx-auto px-4">
        <div className="flex items-baseline">
          {/* Here we have our NavBar sections*/}

          {/* Section 1 */}
          <div className="w-1/3">
            <div className="text-white text-lg border border-white rounded-full w-56">
              <div className="pl-3">Search</div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="w-1/3 flex justify-center">
            <Link href="/">
              <h1>JukeBox</h1>
            </Link>
          </div>

          {/* Section 3 */}
          <div className="w-1/3 flex">
            <ul className="flex space-x-6 pl-8">
              {["Albums", "Artists", "Collections", "Users"].map((item) => (
                <li>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-white text-lg py-2 px-2 rounded-md hover:bg-white hover:bg-opacity-15"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
