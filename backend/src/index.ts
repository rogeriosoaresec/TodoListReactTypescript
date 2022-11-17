import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

// types
type User = {
  username:string,
  password:string
}

let users:User[] = [{
  username: "teste",
  password: "123"
}];


// routes
app.get('/', (req: Request, res: Response) => {
  res.send(users);
});

app.post('/', (req: Request, res: Response) => {
  const newUser = req.body as User;
  users.push(newUser);

  res.send("user added...")
});

app.put('/', (req: Request, res: Response) => {
  const userToChange = req.body as User;

  users = users.map((user:User, index) => {
    if (user.username == userToChange.username) {
      user.password = userToChange.password
      console.log(`Changing ${userToChange.username}`);
    }

    return user;
  });

  res.send("user changed...")
});

app.delete('/:username', (req: Request, res: Response) => {
  const userToDelete = req.params.username;
  users = users.filter((e) => e.username !== userToDelete);
  res.send("user deleted...")
});


app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});