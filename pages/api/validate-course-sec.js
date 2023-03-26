import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
   if (req.method === 'POST') {
      const data = req.body
      const filePath = path.join(process.cwd(), 'assets/data', 'CourseSection.json');
      await fs.promises.writeFile(filePath, JSON.stringify(data));
      res.status(200).json({ message: req.body });
   } else {
      res.status(405).json({ message: 'Method not allowed' });
   }
}