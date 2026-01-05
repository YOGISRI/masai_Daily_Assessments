export default function App() {
  return (
    <div className="space-y-10 p-6 bg-gray-100">

      {/* Navbar */}
      <nav className="flex flex-col md:flex-row gap-4 bg-gray-800 text-white p-4">
        <a>Home</a>
        <a>Features</a>
        <a>Contact</a>
      </nav>

      {/* Hero */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <h2 className="
          font-bold text-xl md:text-3xl lg:text-5xl
          bg-gradient-to-r from-blue-500 to-purple-500
          text-transparent bg-clip-text
        ">
          Tailwind CSS Mini Page
        </h2>
        <img
          src="https://via.placeholder.com/400"
          className="rounded shadow-lg"
        />
      </section>

      {/* Features */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1,2,3].map(i => (
          <div key={i} className="bg-white p-4 rounded shadow">
            Feature {i}
          </div>
        ))}
      </section>

      {/* Table */}
      <section>
        <table className="w-full border">
          <tbody>
            <tr className="bg-gray-200">
              <td className="border p-2">Header</td>
              <td className="border p-2">Header</td>
              <td className="border p-2">Header</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border p-2">Row</td>
              <td className="border p-2">Row</td>
              <td className="border p-2">Row</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Contact Form */}
      <section>
        <form className="max-w-sm space-y-3">
          <input className="w-full border rounded p-2" placeholder="Name" />
          <input className="w-full border rounded p-2" placeholder="Email" />
          <button className="w-full bg-blue-500 text-white py-2 rounded">
            Send
          </button>
        </form>
      </section>

    </div>
  );
}
