import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({})
    },
    factories: {
      user: Factory.extend({
        id(index: number) {
          return index;
        },
        name() {
          return `${faker.name.firstName()} ${faker.name.lastName()}`;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        }
      })
    },
    seeds(server) {
      server.createList("user", 200);
    },
    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      // Used to avoid conflict with nextjs
      this.namespace = "";
      this.passthrough();
    }
  });

  return server;
}
