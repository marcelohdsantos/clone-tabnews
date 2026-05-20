test("GET to /api/status returns 200 and correct status object", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  new Date(responseBody.updated_at).toISOString();

  const parsedDatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedDatedAt);

  expect(responseBody.dependencies.database.version).toEqual("16.11");
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});

