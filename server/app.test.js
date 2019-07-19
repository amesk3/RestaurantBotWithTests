const app = require("./app");
const supertest = require("supertest");

let db = {
  statusCode: 200,
  reservations: [{ id: 1, body: "foo" }, { id: 2, body: "bar" }]
};

it("stub", () => {
  return expect(true).toBe(true);
});

// it("It responds with an array of reservations", () => {
//   return supertest(app)
//     .get("/reservations")
//     .expect(response => {
//       expect(response.statusCode).toBe(200);
//     })
//     .expect(response => {
//       expect(response.body.length).toBe(2);
//     });
// });

// const reservations = require("./routes/reservations");
// const express = require("express");
// const axios = require("axios");
// const moxios = require("moxios");
// const request = require("supertest");

// const initReservations = () => {
//   const app = express();
//   app.use(reservations);
//   return app;
// };

// describe("GET /reservations", () => {
//   beforeEach(() => {
//     moxios.install();
//   });
//   afterEach(() => {
//     moxios.uninstall();
//   });
//   test("It should fetch HugoDF from GitHub", async () => {
//     moxios.stubRequest(/api.github.com\/users/, {
//       status: 200,
//       response: {
//         id: 1,
//         name: "Mary Berry",
//         date: `2019-07-25T20:00:00.000Z`,
//         createdAt: `2019-07-19T17:51:54.668Z`,
//         userName: "amesk3"
//       }
//     });
//     const app = initReservations();
//     await request(app).get("/reservations");
//     expect(moxios.requests.mostRecent().url).toBe("undefined");
//   });
// });
