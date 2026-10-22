import express from 'express';
import ventasRoutes from "./routes/ventas.js";
import 'dotenv/config';

const app = express();

// 1.

app.use(express.json());

//Montamos las rutas con 
app.use('/api/v1/ventas', ventasRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor Express en http://localhost:${PORT}`);
})