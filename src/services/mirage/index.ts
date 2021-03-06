import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer
} from "miragejs";
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
    serializers: {
      application: ActiveModelSerializer
    },
    factories: {
      user: Factory.extend({
        name(index: number) {
          return `User ${index + 1}`;
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

      this.get("/users", function (schema, request) {
        const total = schema.all("user").length;
        const { page = 1, perPage = 10 } = request.queryParams;
        const pageStart = (Number(page) - 1) * Number(perPage);
        const pageEnd = pageStart + Number(perPage);
        const users = this.serialize(schema.all("user"))
          .users.sort((a, b) => b.id - a.id)
          .slice(pageStart, pageEnd);

        return new Response(200, { "x-total-count": String(total) }, { users });
      });
      this.get("/users/:id");
      this.post("/users");

      // Used to avoid conflict with nextjs
      this.namespace = "";
      this.passthrough();
    }
  });

  return server;
}
