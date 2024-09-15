import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

//when we are accepting dasta from forms
app.use(express.json({limit: "16kb"}))

//when we are accepting data from url
app.use(express.urlencoded({

    extended:true,
    limit:"16kb"
}))

//to store static files like images, favicons and videos etc.
app.use(express.static("public"))

app.use(cookieParser())


//routes import
import { authRoutes } from './routes/auth.routes.js';
import { userRoutes } from './routes/user.routes.js';
import { postRoutes } from './routes/post.routes.js';
import { commentRoutes } from './routes/comment.routes.js';

//routes declaration
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/comment', commentRoutes);
app.get('/', (req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'I am home route. Sever is live',
    });
});

export { app }