import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, para } = req.body;
    const data = { title, para };
    const filePath = path.join(process.cwd(), 'assets/data', 'HeroSection.json');
    await fs.promises.writeFile(filePath, JSON.stringify(data));
    res.status(200).json({ message: 'Data saved successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}