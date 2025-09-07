<h1>📚 Minimal Library Management System</h1>

<p>
A full-stack <strong>Library Management System</strong> built with 
<b>React, TypeScript, Redux Toolkit Query (RTK Query)</b> on the frontend 
and <b>Node.js, Express.js, MongoDB, Mongoose</b> on the backend.  
The system allows users to manage books, perform borrow operations, 
and view borrow summaries—all with a clean, minimalist UI.
</p>

<hr/>

<h2>🚀 Features</h2>
<ul>
  <li>View all books in a table with details (Title, Author, Genre, ISBN, Copies, Availability).</li>
  <li>Create, Edit, and Delete books.</li>
  <li>Borrow books with quantity & due date validation.</li>
  <li>Automatic availability update when copies = 0.</li>
  <li>Borrow summary page with aggregated data.</li>
  <li>Minimalist, responsive UI with Tailwind CSS.</li>
  <li>Frontend state management via <b>Redux Toolkit + RTK Query</b>.</li>
  <li>Backend with modular MVC pattern, error handling, and pagination support.</li>
</ul>

<hr/>

<h2>🛠️ Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li>React + TypeScript</li>
  <li>Redux Toolkit + RTK Query</li>
  <li>Tailwind CSS</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Node.js + Express.js</li>
  <li>MongoDB + Mongoose</li>
</ul>

<hr/>

<h2>📂 Project Structure</h2>

<pre>
 ├── frontend   # React + TypeScript + RTK Query
 ├── backend    # Express + MongoDB + Mongoose (MVC structured)
 └── README.md
</pre>

<hr/>

<h2>⚙️ Local Setup Guide</h2>

<h3>1. Clone the Repository</h3>
<pre>
git clone https://github.com/your-username/B5A4.git
cd B5A4
</pre>

<h3>2. Backend Setup</h3>
<pre>
cd backend
npm install
</pre>

- Create a <code>.env</code> file inside <code>backend/</code> with:
<pre>
PORT=5000
MONGO_URI=mongodb://localhost:27017/librarydb
</pre>

- Run the backend server:
<pre>
npm run dev
</pre>
The backend will start on <b>http://localhost:5000</b>.

<h3>3. Frontend Setup</h3>
<pre>
cd ../frontend
npm install
</pre>

- Update the API base URL in your frontend configuration if needed.
- Start the frontend:
<pre>
npm run dev
</pre>
The frontend will start on <b>http://localhost:5173</b> (Vite default).

<hr/>

<h2>📑 Available Pages</h2>
<ul>
  <li><code>/books</code> – List of all books</li>
  <li><code>/create-book</code> – Add a new book</li>
  <li><code>/books/:id</code> – Book detail view</li>
  <li><code>/edit-book/:id</code> – Edit book details</li>
  <li><code>/borrow/:bookId</code> – Borrow book form</li>
  <li><code>/borrow-summary</code> – Borrow summary</li>
</ul>

<hr/>


<h2>🔗 Live Demo</h2>
<p>
You can access the deployed frontend here:  
<a href="https://library-management-client-two-plum.vercel.app" target="_blank">
https://library-management-client-two-plum.vercel.app
</a>
</p>

<hr/>

<h2>🤝 Contribution</h2>
<p>
Feel free to fork this repository, open issues, and submit pull requests 
to improve the system.
</p>

<hr/>

<h2>📜 License</h2>
<p>
This project is licensed under the <b>MIT License</b>.
</p>
