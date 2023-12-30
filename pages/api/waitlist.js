import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Validate email before adding to the database (you can use the existing validateEmail function)

    // Insert the email into the database
    try {
      const result = await pool.query(
        "INSERT INTO email (email, date_created) VALUES ($1, NOW()) RETURNING *",
        [email]
      );

      res.status(201).json({ success: true, data: result.rows[0] });
    } catch (error) {
      console.error("Error inserting into database:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
