import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-lime-100">
      <div className="item-center font-black text-2xl pb-4">
            <h2 className="hover:text-9xl"><span className="text-lime-700">World</span> <span className="text-orange-700">University</span> <span className="text-rose-400">Ranking</span></h2>
      </div>
      <div className="overflow-hidden rounded-2xl shadow-md">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-white ">
              <thead className="text-base text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-white">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                          Rank
                      </th>
                      <th scope="col" className="px-6 py-3">
                          University
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Rating
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Category
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b dark:bg-lime-400 dark:border-rose-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          1
                      </th>
                      <td className="px-6 py-4">
                          Harvard University
                      </td>
                      <td className="px-6 py-4">
                          99.9
                      </td>
                      <td className="px-6 py-4">
                          World Universities
                      </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-orange-300 dark:border-rose-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          2
                      </th>
                      <td className="px-6 py-4">
                          Massachusetts Institute of Technology (MIT)
                      </td>
                      <td className="px-6 py-4">
                          99.8
                      </td>
                      <td className="px-6 py-4">
                          World Universities
                      </td>
                  </tr>
                  <tr className="bg-white dark:bg-rose-300 dark:border-rose-200">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          3
                      </th>
                      <td className="px-6 py-4">
                          University of Cambridge
                      </td>
                      <td className="px-6 py-4">
                          99.7
                      </td>
                      <td className="px-6 py-4">
                          World Universities
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
      <div className="items-end">
        <span className="text-black text-4xl font-sans transition ease-in-out delay-150 :-translate-y-1 hover:scale-110 hover:text-red-600 hover:text-9xl duration-200 ">
            6403611 วิชญ์ภาส นารถสกุล 
        </span>
      </div>
      <div className="items-end">
        <span className="text-black text-4xl font-sans transition ease-in-out delay-150 :-translate-y-1 hover:scale-110 hover:text-red-600 hover:text-9xl duration-200 ">
            ลองเอาเมาส์มาชี้ดูสิ๊ !!!!!
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 128 128">
        <path d="M42.3 24.5c.4 0 .8-.1 1.2-.2 1.5-.6 2.3-2.4 1.6-3.9L39.3 6.5c-.6-1.5-2.4-2.3-3.9-1.6-1.5.6-2.3 2.4-1.6 3.9l5.8 13.9C40 23.8 41.2 24.5 42.3 24.5zM31.8 31.2l-14.3-4.5c-1.6-.5-3.3.4-3.8 2-.5 1.6.4 3.3 2 3.8L30 36.9c.3.1.6.1.9.1 1.3 0 2.5-.8 2.9-2.1C34.3 33.3 33.4 31.7 31.8 31.2zM50.2 109.5c.6.2 1.2.4 1.8.4 1.4 0 2.7-.6 3.6-1.6l13.5-14.4 9.2 22.2c.5 1.2 1.6 1.8 2.8 1.8.4 0 .8-.1 1.2-.2 1.5-.6 2.3-2.4 1.6-3.9l-9.3-22.3h20.4c2 0 3.9-1.2 4.6-3.1.8-1.9.3-4-1.2-5.5L55.5 41.1c-1.4-1.4-3.6-1.8-5.4-1-1.9.8-3 2.6-3 4.6v60.2C47 107 48.2 108.8 50.2 109.5zM53 47.1l39.6 38.4H70.1c-.8 0-1.6.3-2.2 1l-14.9 16V47.1zM63.6 7.6l-7 13.3c-.8 1.5-.2 3.3 1.3 4 .4.2.9.3 1.4.3 1.1 0 2.1-.6 2.7-1.6l7-13.3c.8-1.5.2-3.3-1.3-4C66.2 5.6 64.4 6.1 63.6 7.6z"></path>
        </svg>
      </div>
    </main>
  );
}
