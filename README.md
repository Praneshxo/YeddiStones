# T-Shirt E-Commerce Website

This is a simple e-commerce website built with **Next.js**, **React**, **Express**, and **PostgreSQL** (using **Neon** for database hosting). It provides a platform to display and sell t-shirts with a user-friendly interface. The backend is powered by Express, and Axios is used for handling HTTP requests between the frontend and backend.

## Technologies Used

- **Frontend**:  
  - **Next.js**: React-based framework for server-side rendering and static site generation.
  - **React**: For building interactive user interfaces.
  - **Axios**: For making HTTP requests between the frontend and backend.
  - **CSS**: Traditional CSS for styling.

- **Backend**:
  - **Express.js**: Node.js web framework to handle server-side logic.
  - **PostgreSQL**: Database to store information about t-shirts, customers, and orders (using **Neon** for PostgreSQL hosting).

- **Database**:
  - **Neon**: Managed PostgreSQL service to store application data.

## Features

- Browse and view a variety of t-shirts.
- Product details page with the ability to view product descriptions and sizes.
- Add products to the shopping cart.
- Checkout process for completing purchases.
- Backend API to handle product data and user orders.
  
## Project Setup

Follow the steps below to set up and run the application locally.

### 1. Clone the repository

```bash
git clone https://github.com/your-username/tshirt-ecommerce.git
cd tshirt-ecommerce
```

### 2. Install dependencies

#### Frontend (Next.js)

Install the required frontend dependencies:

```bash
cd frontend
npm install
```

#### Backend (Express.js)

Install the required backend dependencies:

```bash
cd backend
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the **frontend** and **backend** directories and add the following environment variables (adjust as needed):

#### Frontend (.env.local):

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

#### Backend (.env):

```env
DATABASE_URL=your_postgresql_connection_string_from_neon
PORT=5000
```

- Get your **Neon PostgreSQL** connection string from your Neon project and replace it in `DATABASE_URL`.

### 4. Run the Development Servers

#### Start Backend Server (Express.js)

```bash
cd backend
npm run dev
```

#### Start Frontend Server (Next.js)

```bash
cd frontend
npm run dev
```

Now, the application should be running locally at `http://localhost:3000` for the frontend, and the backend API should be accessible at `http://localhost:3001`.

### 5. Database Setup

- Ensure that you have configured the PostgreSQL database with the required tables for storing product and order information. You can find the database schema in the `backend/db` folder (if applicable).

## Folder Structure

```
tshirt-ecommerce/
├── frontend/            # Next.js frontend code
│   ├── components/      # React components
│   ├── pages/           # Pages for routing
│   ├── styles/          # CSS files
│   ├── public/          # Static assets (images, etc.)
│   └── .env.local       # Frontend environment variables
├── backend/             # Express.js backend code
│   ├── controllers/     # API route controllers
│   ├── models/          # Database models
│   ├── routes/          # API route definitions
│   ├── db/              # Database connection and migrations
│   ├── .env             # Backend environment variables
│   └── server.js        # Express.js server setup
├── .gitignore           # Git ignore file
└── README.md            # This file
```

## Deployment

### Frontend Deployment

- You can deploy the frontend to platforms like **Vercel** or **Netlify** for easy deployment. Just connect your GitHub repository and deploy directly.

### Backend Deployment

- For the backend, you can deploy it to services like **Heroku**, **Render**, or **Vercel** (for serverless backend) and make sure to set up the database connection with Neon correctly.

## Usage

Once deployed, users will be able to:

1. Browse available t-shirt products.
2. View details of each t-shirt.
3. Add items to the shopping cart and complete the checkout process.

## Contributing

Feel free to fork this repository and contribute by submitting pull requests. If you find any issues or have suggestions for improvements, open an issue in this repository.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Happy coding and enjoy building your e-commerce platform!**
```

### Notes:
- Replace `your-username/tshirt-ecommerce` with the actual GitHub repository URL.
- Make sure your project has the necessary database tables and models in the backend to handle t-shirt product data and orders.
- The `.env.local` and `.env` files are crucial for storing sensitive configuration details like the database connection strings. Make sure to add them securely. 

Let me know if you need any adjustments or if you'd like to add other features!
